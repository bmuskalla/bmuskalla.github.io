+++
title = "Using Equinox Security in RCP and RAP"
description = ""
tags = ["eclipseRT", "equinox", "rap", "rcp", "Single Sourcing"]
date = "2010-05-13"
categories = [
    "Development"
]
highlight = "true"
+++

I finally had the time to care about one of my outstanding tasks –
**provide a tutorial and example how to use [Equinox Security][1].**
While the tutorial was initially targeted for RAP users, I also added a
launch config and a target definition for RCP as the code is the same
for both runtimes. The tutorial will provide some hints and pointers how
to setup your login procedure, like shown below:

[![](/blog/es/rapsec_login.png)][2]

After logging in (hint, hint), you’re able to inspect the currently
active Subject. I made up this example to be as **simple** as possible
to demonstrate the key concepts of Equinox Security, and not the ones
from RAP/RCP.

[![](https://eclipsesource.com/wp-content/uploads/2010/05/rapsec_subject.png)][3]

As I said, you can either choose between RAP as runtime (above) or RCP
(below).

[![](https://eclipsesource.com/wp-content/uploads/2010/05/rcpsec_subject.png)][4]

In addition to the authentication mechanism, I wrote a pretty simple
LoginModule to show how to connect your authentication process to an
alternative backend (eg. LDAP, Kerberos, …).

As I put the [tutorial][5] into the Eclipse wiki, I [encourage][6]
everyone to extend the tutorial with hints, tricks or ideas what you can
do with Equinox Security. Hope the tutorial helps to get up to speed how
to use secure your RCP/RAP applications.</div></div></div>



[1]: https://www.eclipse.org/equinox/security/
[2]: https://eclipsesource.com/wp-content/uploads/2010/05/rapsec_login.png
[3]: https://eclipsesource.com/wp-content/uploads/2010/05/rapsec_subject.png
[4]: https://eclipsesource.com/wp-content/uploads/2010/05/rcpsec_subject.png
[5]: https://wiki.eclipse.org/RAP/Equinox_Security_Integration
[6]: https://eclipsesource.com/blogs/2009/07/13/crowdsourcing-documentation-at-eclipse/

