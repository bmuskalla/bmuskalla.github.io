+++
title = "Revamping Eclipse Examples?"
description = ""
tags = ["eclipseRT", "equinox", "p2", "pde", "Planet OSGi", "rap"]
date = "2010-04-14"
categories = [
    "Development"
]
highlight = "true"
+++

Even though I’ve been involved in the Eclipse community for around 5
years, I’m still amazed by the projects that are hosted under the
Eclipse umbrella. As an “insider”, I have a pretty good overview of many
projects and at least a rough picture of all the other cool stuff. While
I love working with [EclipseRT][1] technologies like Equinox, RAP,
EclipseLink, ECF or &lt;insert your project here&gt;, I always find
myself in the same situation.  This stuff is awesome but do users really
get the point of what’s possible? Learning a new technology is always
hard, but if you want to develop enterprise-ready, scalable and vibrant
platforms using Eclipse components, there are so many obstacles to
overcome. You need to have at least a clue about OSGi/Equinox,
Extensions and their corresponding Extension points (for each for your
consumed modules) and many other things. I don’t want to say that
Eclipse is too complicated (which is a topic for another post anyway),
but what I would really like to see is a better way to get our future
consumers up to speed. As [Esther Dyson][2] once said:

> *A worker’s paradise is a consumer’s hell.*

With the [Eclipse Examples][3] project we wanted to provide a few
exemplary projects to show how to use different projects. In theory a
nice idea, but practically I don’t see that this effort was very
successful. Wayne and me discussed some ideas back in [2008][4] but
without a concrete outcome.  Thinking about this topic after EclipseCon,
my current thought was to provide easy ways for our consumers to try out
the bits and pieces of all the projects. What I constantly run into
though, is that you need to do so many things  before you can get
started, like setting up a target platform, making your examples depend
on the right bundles, using the right extension points/services/etc,
creating launch configurations. Many projects already helped themselves
by providing examples using PDE [templates][5]. That’s the way I’d like
to tell newcomers how to get started and would push this even a little
further – the idea is to provide some infrastructure in the Examples
project to help others setting up their examples. The projects just
provide example bundles, maybe a target definition, a launch
configuration and a cheatsheet or something. In the end, the user should
be able to try out another Eclipse technology within 2 clicks: New
Example &gt; That technology, run!

![](https://eclipsesource.com/wp-content/uploads/2010/04/examples_wizard.png
"examples_wizard")

Basically PDE already provides many of these things but it’s not yet at
the point I would love to see it. It’s still too complex for consumers
to create target platforms (I know what I’m talking about), create their
launch configs and get started with the examples. While there are still
[some][7] [hurdles][8] to jump, I think our users and consumers would
thank us for getting them up to speed in seconds. It should even be
interesting for non-OSGi related examples as other projects thought
about [something like this][9] for years. I don’t see a chance to have
this ready for Helios, but I’m pretty confident that we could do
something like this in the timeframe for the [I…][10] release train.
Would other projects be interested in such an approach to distribute
their examples? Please leave a comment on [this bug][11] if you do so to
collect ideas, wishes and requirements.</div></div></div>



[1]: https://eclipse.org/rt/
[2]: https://en.wikipedia.org/wiki/Esther_Dyson
[3]: https://www.eclipse.org/examples
[4]: https://dev.eclipse.org/mhonarc/lists/examples-dev/msg00010.html
[5]: https://help.eclipse.org/galileo/topic/org.eclipse.pde.doc.user/reference/extension-points/org_eclipse_pde_ui_templates.html
[6]: https://eclipsesource.com/wp-content/uploads/2010/04/examples_wizard.png
[7]: https://bugs.eclipse.org/bugs/show_bug.cgi?id=276000
[8]: https://bugs.eclipse.org/bugs/show_bug.cgi?id=169340
[9]: https://bugs.eclipse.org/bugs/show_bug.cgi?id=238144
[10]: https://eclipsesource.com/blogs/2010/04/08/helios-1-name-vote-for-your-favorite/
[11]: https://bugs.eclipse.org/bugs/show_bug.cgi?id=309081

