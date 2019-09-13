+++
title = "Eclipse RAP 1.3 M3 hits the road"
description = ""
tags = ["eclipseRT", "helios", "milestone", "new and noteworthy", "rap"]
date = "2009-11-16"
categories = [
    "Development"
]
highlight = "true"
+++

After another 6 weeks of working hard towards the [Helios][1] Release,
we’re a step closer. RAP M3 for Eclipse 3.6 is out and can be
[obtained][2] from the RAP project page. Besides another [130
bugfixes][3] and many [New and Noteworthy][4] features, here are my
personal favorites of this milestone:

**Non-shared SWT resources**

Finally, we decided to provide constructors and a dispose mechanism for
SWT resources like fonts, images, colors and cursors. While we still
recommend to use the factory-based approach, this features helps a lot
when single-sourcing applications that use the resource constructors in
a verbose manner.

[![RWT Resource constructors](/blog/es/color_ctor.png)][5]
Yay, it compiles!


**Browser History support**

You now have the possibility to interact with the client-side browser
history. This allows you to set “bookmarks” (eg. when switching tabs or
processing a particular workflow) and the user can jump back and
forward. Thanks again to Ralf Zahn from ARS who [contributed][6] this
feature.

**Dispose events on session timeout**

We also introduced new Listener support on the Display so you’re now
able to listen for Dispose events of the Display which is triggered when
the session terminates. This way you don’t need to rely on
servlet-specific API but rather use the same mechanism as in SWT to
clean up your session. In addition you can queue runnables via
Display#disposeExec that are executed once the session dies.

I hope you all enjoy the new milestone and give as feedback as fast as
possible, API and feature freeze  is approaching 😉



[1]: https://wiki.eclipse.org/Helios
[2]: https://eclipse.org/rap/downloads/
[3]: https://bugs.eclipse.org/bugs/buglist.cgi?query_format=advanced&amp;short_desc_type=allwordssubstr&amp;short_desc=&amp;classification=RT&amp;product=RAP&amp;target_milestone=1.3+M3&amp;long_desc_type=allwordssubstr&amp;long_desc=&amp;bug_file_loc_type=allwordssubstr&amp;bug_file_loc=&amp;status_whiteboard_type=allwordssubstr&amp;status_whiteboard=&amp;keywords_type=allwords&amp;keywords=&amp;bug_status=RESOLVED&amp;bug_status=VERIFIED&amp;bug_status=CLOSED&amp;emailtype1=substring&amp;email1=&amp;emailtype2=substring&amp;email2=&amp;bugidtype=include&amp;bug_id=&amp;votes=&amp;chfieldfrom=&amp;chfieldto=Now&amp;chfieldvalue=&amp;cmdtype=doit&amp;order=Reuse+same+sort+as+last+time&amp;field0-0-0=noop&amp;type0-0-0=noop&amp;value0-0-0=
[4]: https://eclipse.org/rap/
[5]: https://eclipsesource.com/wp-content/uploads/2009/11/color_ctor.png
[6]: https://bugs.eclipse.org/bugs/show_bug.cgi?id=283291

