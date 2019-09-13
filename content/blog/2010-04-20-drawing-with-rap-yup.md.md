+++
title = "Drawing with RAP? Yup!"
description = ""
tags = ["canvas", "eclipseRT", "gef", "helios", "nebula", "new and noteworthy", "rap", "Single Sourcing"]
date = "2010-04-20"
categories = [
    "Development"
]
highlight = "true"
+++

I have to admit, I’m a little nervous what happens with the [RAP][1]
community after this post. At least for me, the last days were pretty
exciting. Some days ago, Ivan from the RAP team committed the initial
support for a [GC][2] (GraphicsContext) for RAP. Currently restricted to
the Canvas widget, the GC provides thousands of new use cases for RAP
applications. The work by Ivan and Tim is just gorgeous and will help
many developers to single-source their applications with even less
exceptions. In case you want to try it out in this second without
reading further, just fire up the RAP Examples demo and draw something
yourself 🙂

![RAP with Canvas](/blog/es/rap_canvas_demo1.png)

Credits for the picture above goes to [Holger][4] with the aim to come
up with a new RAP project logo 😉 After using the GC the first time in
the Examples demo, I thought about other possibilities to test the new
GC. My first thought: custom widgets? Tired of writing custom widgets in
JavaScript? Get your Canvas and single-source your custom widget with
RCP by writing an [owner-draw widget][5]. But as it was late in the
night, I decided to just reuse some existing owner-drawn widgets like
those we can find in the [Nebula][6] project. After getting the
[PShelf][7] widget from CVS, it was only a matter of seconds until I
started my first RAP application using an owner-drawn Nebula widget:

![Nebula PShelf on RAP](/blog/es/rebula_pshelf.png)

And I think I know what most of you are currently thinking – Draw2D, GEF
and GMF on RAP? To keep it and short and simple: No! While it may be
possible to single source Draw2D with the exisiting Canvas, I’m pretty
sure it will not scale. The way Draw2D is implemented will cause major
performance problems with the browser-side Canvas widget. As I said, it
may be possible but not really preferable. For supporting Draw2D the
right technology on the client-side is there. Only on the server-side we
would need APIs that entirely hide the GC. Thus we could directly
translate from one vector-based technology to the other.

I’m pretty excited to see how the community can profit from the new
Canvas implementation. Want to try it out? Either get the current RAP
runtime from [CVS][9] or wait some days until we can publish RAP M7
(which has several other cool [new &amp; noteworthy][9]
items).[^footnote]

[^footnote]: Originally published on [EclipseSource Blog](https://eclipsesource.com/blogs/2010/04/20/drawing-with-rap-yup/)



[1]: https://www.eclipse.org/rap
[2]: https://www.eclipse.org/articles/Article-SWT-graphics/SWT_graphics.html
[3]: https://eclipsesource.com/wp-content/uploads/2010/04/rap_canvas_demo1.png
[4]: https://eclipsesource.com/blogs/author/hstaudacher/
[5]: https://www.eclipse.org/articles/Article-Writing%20Your%20Own%20Widget/Writing%20Your%20Own%20Widget.htm
[6]: https://www.eclipse.org/nebula
[7]: https://www.eclipse.org/nebula/widgets/pshelf/pshelf.php
[8]: https://eclipsesource.com/wp-content/uploads/2010/04/rebula_pshelf.png
[9]: https://eclipse.org/rap/

