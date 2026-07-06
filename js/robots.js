/* Isometric walking robots — background canvas for #bricks.
   Self-contained, no dependencies. */
(function () {
  const canvas = document.getElementById("bricks");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduceMotion = false;   // robots always walk

  const COLORS = ["#3d7d7e", "#d9a441", "#c2704e", "#8d9b6a"];
  const PAPER = "#f3efe4";
  // the four isometric walking directions (screen-space, 2:1)
  const DIRS = [[1, .5], [-1, -.5], [1, -.5], [-1, .5]];

  let W, H, bandTop, bots = [];

  function rand(a, b) { return a + Math.random() * (b - a); }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * devicePixelRatio;
    canvas.height = H * devicePixelRatio;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    bandTop = H * 0.66;
    populate();
  }

  function makeBot(sleeper) {
    return {
      x: sleeper ? W - rand(70, 130) : rand(60, W - 60),
      y: sleeper ? H - rand(40, 90) : rand(bandTop + 40, H - 20),
      dir: pick(DIRS),
      speed: rand(0.3, 0.55),
      color: pick(COLORS),
      phase: rand(0, Math.PI * 2),
      state: sleeper ? "sleep" : "walk",
      stateT: rand(3, 9),
      blinkAt: rand(2, 6),
      blink: 0,
      sleeper: sleeper,
    };
  }

  function populate() {
    bots = [];
    const n = Math.max(3, Math.min(7, Math.floor(W / 220)));
    for (let i = 0; i < n; i++) bots.push(makeBot(i === 0));
  }

  /* ---------- isometric drawing helpers ---------- */

  // diamond footprint centered at (x, y), half-width t, lifted by up
  function diamond(x, y, t, up) {
    ctx.beginPath();
    ctx.moveTo(x, y - t * .5 - up);
    ctx.lineTo(x + t, y - up);
    ctx.lineTo(x, y + t * .5 - up);
    ctx.lineTo(x - t, y - up);
    ctx.closePath();
  }

  // vertical face between two footprint corners
  function face(x1, y1, x2, y2, lift, h) {
    ctx.beginPath();
    ctx.moveTo(x1, y1 - lift);
    ctx.lineTo(x2, y2 - lift);
    ctx.lineTo(x2, y2 - lift - h);
    ctx.lineTo(x1, y1 - lift - h);
    ctx.closePath();
  }

  // iso box: footprint center (x,y), half-width t, height h, lifted by `lift`
  function box(x, y, t, h, lift, color) {
    const E = [x + t, y], S = [x, y + t * .5], Wp = [x - t, y];
    ctx.fillStyle = color;
    ctx.strokeStyle = color;
    ctx.lineWidth = 1;
    // left face (darker)
    ctx.globalAlpha = 0.62;
    face(Wp[0], Wp[1], S[0], S[1], lift, h); ctx.fill();
    // right face (medium)
    ctx.globalAlpha = 0.44;
    face(S[0], S[1], E[0], E[1], lift, h); ctx.fill();
    // top face (lightest)
    ctx.globalAlpha = 0.28;
    diamond(x, y, t, lift + h); ctx.fill();
    ctx.globalAlpha = 0.7;
    diamond(x, y, t, lift + h); ctx.stroke();
  }

  function drawBot(b, t) {
    const walking = b.state === "walk";
    const bob = walking ? Math.abs(Math.sin(b.phase)) * 2.5 : 0;
    const x = b.x, y = b.y;

    // shadow
    ctx.globalAlpha = 0.10;
    ctx.fillStyle = "#2a2a26";
    ctx.beginPath();
    ctx.ellipse(x, y, 12 - bob, 6 - bob * .5, 0, 0, Math.PI * 2);
    ctx.fill();

    // body + head, two simple iso boxes
    box(x, y, 11, 14, 2 + bob, b.color);
    box(x, y, 7, 9, 17 + bob, b.color);

    // antenna
    const topY = y - 17 - bob - 9 - 3.5;
    ctx.globalAlpha = 0.7;
    ctx.strokeStyle = b.color;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(x, topY);
    ctx.lineTo(x, topY - 6);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, topY - 8, 2, 0, Math.PI * 2);
    ctx.fillStyle = b.color;
    ctx.globalAlpha = 0.35 + 0.45 * Math.abs(Math.sin(t * 2 + b.phase));
    ctx.fill();

    // eyes on the face matching walking direction (right face if moving right)
    const right = b.dir[0] >= 0;
    const fx = right ? 1 : -1;
    const eyeLift = 17 + bob + 4.5;          // on the head
    const e1x = x + fx * 2.2, e2x = x + fx * 5.2;
    const e1y = y + (7 - 2.2) / 2 - eyeLift;   // follow the face slope
    const e2y = y + (7 - 5.2) / 2 - eyeLift;
    ctx.fillStyle = PAPER;
    ctx.globalAlpha = 0.95;
    if (b.blink > 0 || b.state === "sleep") {
      ctx.fillRect(e1x - 1.5, e1y, 3, 1);
      ctx.fillRect(e2x - 1.5, e2y, 3, 1);
    } else {
      ctx.beginPath();
      ctx.arc(e1x, e1y, 1.4, 0, Math.PI * 2);
      ctx.arc(e2x, e2y, 1.4, 0, Math.PI * 2);
      ctx.fill();
    }

    // z z for the sleeper
    if (b.state === "sleep") {
      ctx.globalAlpha = 0.35 + 0.2 * Math.sin(t * 1.5);
      ctx.fillStyle = b.color;
      ctx.font = "10px 'IBM Plex Mono', monospace";
      const rise = (Math.sin(t) + 1) * 2;
      ctx.fillText("z", x + 10, topY - 12 - rise);
      ctx.fillText("z", x + 16, topY - 18 - rise * 1.3);
    }
  }

  function drawFloor() {
    // isometric grid over the lower band
    ctx.save();
    ctx.beginPath();
    ctx.rect(0, bandTop, W, H - bandTop);
    ctx.clip();

    // soften the square paper grid underneath
    const g = ctx.createLinearGradient(0, bandTop, 0, H);
    g.addColorStop(0, "rgba(243,239,228,0)");
    g.addColorStop(0.35, "rgba(243,239,228,0.85)");
    ctx.fillStyle = g;
    ctx.fillRect(0, bandTop, W, H - bandTop);

    ctx.strokeStyle = "#d8d2c2";
    ctx.lineWidth = 1;
    const step = 46;
    // slope +0.5 lines
    for (let x = -H * 2; x < W + H * 2; x += step) {
      ctx.globalAlpha = 0.5;
      ctx.beginPath();
      ctx.moveTo(x, bandTop);
      ctx.lineTo(x + (H - bandTop) * 2, H);
      ctx.stroke();
      // slope -0.5 lines
      ctx.beginPath();
      ctx.moveTo(x, bandTop);
      ctx.lineTo(x - (H - bandTop) * 2, H);
      ctx.stroke();
    }
    // fade the grid in from the top of the band
    const fadeG = ctx.createLinearGradient(0, bandTop, 0, bandTop + 90);
    fadeG.addColorStop(0, PAPER);
    fadeG.addColorStop(1, "rgba(243,239,228,0)");
    ctx.globalAlpha = 1;
    ctx.fillStyle = fadeG;
    ctx.fillRect(0, bandTop, W, 90);
    ctx.restore();
  }

  let last = 0;
  function tick(ms) {
    const t = ms / 1000;
    const dt = Math.min(0.05, (t - last) || 0.016);
    last = t;

    ctx.clearRect(0, 0, W, H);
    drawFloor();

    // update
    for (const b of bots) {
      b.blinkAt -= dt;
      if (b.blinkAt <= 0) { b.blink = 0.12; b.blinkAt = rand(2, 6); }
      if (b.blink > 0) b.blink -= dt;
      if (b.state === "sleep") continue;

      b.stateT -= dt;
      if (b.stateT <= 0) {
        if (b.state === "walk") { b.state = "pause"; b.stateT = rand(1, 3); }
        else { b.state = "walk"; b.stateT = rand(3, 9); b.dir = pick(DIRS); }
      }
      if (b.state === "walk") {
        b.phase += dt * 8;
        b.x += b.dir[0] * b.speed * dt * 60;
        b.y += b.dir[1] * b.speed * dt * 60;
        if (b.x < 40 || b.x > W - 40) b.dir = [-b.dir[0], b.dir[1]];
        if (b.y < bandTop + 50) b.dir = [b.dir[0], Math.abs(b.dir[1])];
        if (b.y > H - 16) b.dir = [b.dir[0], -Math.abs(b.dir[1])];
      }
    }

    // draw back-to-front
    bots.slice().sort((a, c) => a.y - c.y).forEach(b => drawBot(b, t));

    if (!reduceMotion) requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  resize();

  if (reduceMotion) {
    for (const b of bots) if (b.state === "walk") b.state = "pause";
    tick(0);
  } else {
    requestAnimationFrame(tick);
  }
})();
