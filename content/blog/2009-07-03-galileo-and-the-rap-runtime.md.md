+++
title = "Eclipse Galileo and RAP"
description = ""
tags = ["api", "galileo", "new and noteworthy", "performance", "rap"]
date = "2009-07-03"
categories = [
    "Development"
]
highlight = "true"
+++

As Galileo is out in the wild and we are all already working on Helios…
I thought it would be handy to give a quick overview of the [New and
Noteworthy][1] features the RAP team worked on for Galileo. Besides
many, many bug fixes… we still found time to provide several new
features. On top of the new features, we focused on making single
sourcing even easier to do.

#### New Look and Feel

![rap\_addressbook\_business](/blog/es/rap_addressbook_business-300x258.png)

This is one of the biggest features of RAP released as part of the
train. As [Ian][3] already pointed out correctly:

> <span style="font-family: arial, helvetica, sans-serif; line-height:
> normal; font-size: 12px; color: #4d4d4d;">One of the common complaints
> about RAP was that it doesn’t look like a **web application**.</span>

While this was true in the past, we worked really hard to provide the
community a clean and easy way [how to][4] customize the whole workbench
styling.

#### Cell Editors

It’s finally done – RAP supports cell editors in the Table. As this was
a really long-standing issue we’re more than happy to have it in 1.2.

![Celleditors in
RAP](/blog/es/celleditors-300x199.png
"Celleditors in RAP")

Ed, now it’s time to give the whole “[generated EMF editor on RAP][6]”
idea a new spin! For anybody interested in this story, please CC
yourself on [this bug][7].

#### Performance &amp; Memory

The RAP team really had a great time for this release – we just sat
there and waited for the browsers to become even faster…as this was a
really silly task we decided to do something:

**Improvement of Session Startup Performance**

First the creating of the startup page is less CPU intensive. Second the
javascript library content is not embedded in the startup page anymore
and will be delivered separately. As the library content doesn’t change
after server start it can be zipped once and buffered. This reduces CPU
usage significantly. The library is stored in the browser’s cache and
need not to be reloaded on subsequent application visits.

**Client-side memory improvements**

Included is also a new version of the Javascript library [qooxdoo][8].
Thanks to the great support by the RAP
community, most notably from Stefan Hansel who tracked down a number of
significant memory leaks in qooxdoo and provided patches to the qooxdoo
developers, this version now brings a major improvement in client memory
consumption. With this qooxdoo version, the long-standing memory leakage
problems of RAP especially in Internet Explorer are resolved. Thanks to
everyone who helped making this possible!

#### New API &amp; Widgets

With the idea of [single sourcing][1] in mind we concentrated on adding
new API to allow even more reuse of existing SWT/RCP code. Besides many
small things like Display#timerExec() we also tried to complete the set
of widgets. With 8 (yes, eight) new widgets in this release, these two
are my personal favorites and often requested by the community.

#### DateTime

![RAPDateTime](/blog/es/RAPDateTime.png
"RAPDateTime")

#### FormText (Forms)

![RAPFormText](/blog/es/RAPFormText-300x148.png
"RAPFormText")

#### Cursor Support

![RAPCustomCursor](/blog/es/RAPCustomCursor.png
"RAPCustomCursor")

#### Summary

In case you’re not yet sure how “single sourcing” works – Ralf and
Rüdiger would be happy to explain it to you step-by-step in their
upcoming [webinar][12].

In summary, we’re quite happy with the current 1.2 release but are
already looking forward to the Helios release train.

If you have anything you want to see in 1.3, don’t hesitate and drop us
a [note][1].[^footnote]

[^footnote]: Originally published on [EclipseSource Blog](https://eclipsesource.com/blogs/2009/07/03/galileo-and-the-rap-runtime/)

[1]: https://eclipse.org/rap/
[2]: https://eclipsesource.com/wp-content/uploads/2009/06/rap_addressbook_business.png
[3]: https://eclipsesource.com/blogs/2009/06/17/eclipse-galileo-feature-top-10-list-number-8/
[4]: https://help.eclipse.org/galileo/index.jsp?topic=/org.eclipse.rap.help/help/html/advanced/look-and-feel.html
[5]: https://eclipsesource.com/wp-content/uploads/2009/07/celleditors.png
[6]: https://ed-merks.blogspot.com/2008/01/emf-and-rap-go-great-together-too.html
[7]: https://bugs.eclipse.org/bugs/show_bug.cgi?id=213988
[8]: https://qooxdoo.org
[9]: https://eclipsesource.com/wp-content/uploads/2009/07/RAPDateTime.png
[10]: https://eclipsesource.com/wp-content/uploads/2009/07/RAPFormText.png
[11]: https://eclipsesource.com/wp-content/uploads/2009/07/RAPCustomCursor.png
[12]: https://live.eclipse.org/node/718

