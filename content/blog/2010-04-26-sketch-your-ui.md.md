+++
title = "Sketch your UI"
description = ""
tags = ["eclipse", "eclipse ui", "swt", "tips", "ui"]
date = "2010-04-26"
categories = [
    "Development"
]
highlight = "true"
+++

From time to time, I’m in the situation when I want to [suggest][1] a UI
change or even try to come up with a [completely][2] new UI. While I
love programming, it may be easier in these situations to just “sketch”
the idea instead of really getting your feet wet. As many people asked
me what I use for UI sketches, I thought I should share it with you –
the tool is called [WireframeSketcher][3]. It’s “just” an Eclipse plugin
to create sketches pretty easily. As most of the UIs in my life are
SWT-based, WireframeSketcher comes with one absolutely cool feature –
turn an existing dialog into a sketch. Fire up any dialog, hit the magic
“Alt+Shift+F5” and you’re done. Is it that easy? Yes – I really love it.
Here is an example of the Import Wizard which I also used in [my latest
blog][2] post to further modify it with my ideas.

![](/blog/es/import.png)

Not only is it easy to operate, it also has pretty good Eclipse
integration and you always find the things where you expect them (eg.
select and button and you can modify everything in the Properties View).

![](/blog/es/button_props.png)

As Eclipse commiter, you can get a [free licence][6] of the plugin or
you can buy the plugin from the author if you want to use it
commercially. Either way, give it a try the next time you want to mock a
new UI prototype.[^footnote]

[^footnote]: Originally published on [EclipseSource Blog](https://eclipsesource.com/blogs/2010/04/26/sketch-your-ui/)

[1]: https://bugs.eclipse.org/bugs/show_bug.cgi?id=245308
[2]: https://eclipsesource.com/blogs/2010/04/14/revamping-eclipse-examples/
[3]: https://wireframesketcher.com
[4]: https://eclipsesource.com/wp-content/uploads/2010/04/import.png
[5]: https://eclipsesource.com/wp-content/uploads/2010/04/button_props.png
[6]: https://wireframesketcher.com/buy.html

