+++
title = "Eclipse RAP 1.3 M2 Released"
description = ""
tags = ["helios", "milestone", "new and noteworthy", "rap", "Single Sourcing"]
date = "2009-10-08"
categories = [
    "Development"
]
highlight = "true"
+++

The RAP team is proud to announce the [second milestone][1] for the
Helios release.

As Holger already mentioned in [his blog post][2], part of the milestone
is a new design option for RAP applications. You can either use it as is
or customize it depending on your needs.

[![RAP Fancy Design](/blog/es/fancy-300x194.png)][3]

Together with the new fancy design, there is also a new Configuration
dialog to enable and disable the view actions per stack. Additionally we
added an effect called [Lightbox][4] which occurs when the dialog is
open.

Another thing I’m pretty excited about – the help system. The RAP
runtime doesn’t provide everything you need for the whole help system,
we just provide the infrastructure to plug in any help system
implementation you want. Depending on your needs you can either use a
[pretty simple implementation][5] or single-source the real help system
implementation (org.eclipse.help.ui) yourself (great chance to get
involved by the way).

For those of you who are working a lot with tabular data, we now provide
cell tooltips on the TableViewer if you use a CellLabelProvider. This
enables you to provide tooltips on the fly for all of your table cells.

Looking at this milestone in numbers, we fixed 100 bugs and resolved 36
enhancements – this includes another 23 new APIs that are now available
for you. We’re pretty excited about the Helios release and looking
forward to the next milestone.

Be sure to check out the whole [New &amp; Noteworthy][6] as there are
much more details we added in M2![^footnote]

[^footnote]: Originally published on [EclipseSource Blog](https://eclipsesource.com/blogs/2009/10/08/eclipse-rap-1-3-m2-released/)



[1]: https://www.eclipse.org/rap/downloads/
[2]: https://eclipsesource.com/blogs/2009/09/02/new-fancy-rich-ajax-platform-rap-theme/
[3]: https://eclipsesource.com/wp-content/uploads/2009/10/fancy.png
[4]: https://en.wikipedia.org/wiki/Lightbox_(JavaScript)
[5]: https://wiki.eclipse.org/RAP/FAQ#How_to_integrate_the_Eclipse_Help_System_in_a_RAP_application.3F
[6]: https://eclipse.org/rap/

