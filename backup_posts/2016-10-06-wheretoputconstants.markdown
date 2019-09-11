---
layout: post
title: "WHERE_TO_PUT.CONSTANTS"
date: "2016-10-06 10:01:36 +0100"
---

When writing software, some conversations happen over and over again. Over the years, I’ve seen different solutions to the same problem that I’d like to share with you.
One of those conversations go something like this, even though the answer might differ depending on the team or component.

> **Bob:** Hey, I have some string literals here and I was told in the code review that I should extract those into constants. But where would I put those?
>
**Alice:** Ah, sure. Just put them into our MyModuleConstants class. We put all constants into that class so they are easy to find.


{% highlight java %}
public class MyConstants {

  public static final String V0 = "v0";

  public static final String LABEL_STATUS_OPEN = "Open";

  public static final String UNUSED = "butNobodyWillKnow";

  public static final Long MAX_SIZE = 13498368L;

}
{% endhighlight %}

Soooo. Constant classes, eh? Let me share some of the patterns I’ve found (and used myself) over the years and see if we can somehow adapt or improve existing patterns when and how to use constants…and when not to. Take it a bit like “Refactoring away from constants”. First things first, I’m not going to talk about constant interfaces here. Please refer to [Item 17: Use interfaces only to define types](https://www.amazon.com/Effective-Java-2nd-Joshua-Bloch/dp/0321356683) why that’s a bad idea.

First up, naming constants. Easy, right? Not at all. It’s as hard as naming classes and methods to make the intention really clear. Otherwise, Bad Things™ will happen. Let’s take a look at our first constant.

{% highlight java %}
public static final String V0 = "v0";
{% endhighlight %}

It seems to be defining some kind of version number. Let’s assume our project is interacting with a 3rd party API, this seems to be the version number of their REST API. Now, taking a step back, why do we extract constants in the first place? Usually, it’s for two reasons:

* To make the intention of a value clear ([magic numbers][1] as one example)
* To make the code easier to maintain by factoring out common constants so they can be easily changed in the future

[1]: https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constants

![https://xkcd.com/1275/](http://imgs.xkcd.com/comics/int_pi.png)

For the above example, the intention is not clear at all. While we can guess it’s a version string, we don’t know how it is supposed to be used. Is it so all API calls use the same version of the REST API? Or is it to determine whether we’re working with the v0 version which requires some special handling? If we now want to upgrade to v1 of the REST API, it’s not as easy as just changing the constant as other code might rely on this exact version. Without proper naming, people tend to reuse constants for different scenarios that actually require two different constructs (which might happen to have the same value for now). Assuming we had the two scenarios above, we slightly better way would be

{% highlight java %}
public static final String REST_API_V0 = "v0";

public static final String REST_API_CURRENT = V0;
{% endhighlight %}

Not really great either. We still try to group out constants together using a common prefix (REST_API). Usually when you start using common prefixes, that group usually shares some kind of responsibility (see also this [paper](http://www.cse.ohio-state.edu/~rountev/presto/pubs/icsm07.pdf) and a [research prototype](https://github.com/khatchad/Constants-to-Enum-Eclipse-Plugin) for an automated refactoring). Let’s try and extract these constants out into their own entity.

{% highlight java %}
public enum RestApiVersion {

  V0("v0"),

  V1("v1");

  private String apiPath;

  public static RestApiVersion getCurrentApiVersion() {
    return V1;
  }

  private RestApiVersion(String version) {
    this.apiPath = version;
  }

  private String getApiPath() {
    return apiPath;
  }

}
{% endhighlight %}

I think the main takeaway from this is that people tend to mix up literals and magic numbers. While everyone is trying to follow the “Extract magic numbers into constants” refactoring, they tend to see every literal as “magic number”. Be aware of the fact that constants usually have no context and thus may form cohesion where none exists. The example doesn’t cover the full story though. One nice side-effect is that we gain compile-safety by using a proper type (be it an enum or a class with the strategy pattern). While enums are usually preferred over constants, take a step back and see if there is even a need for a “list of constant things” or if a higher abstraction actually makes more sense. For example, if there is a need to dynamically influence the current version (e.g. for testing/mocking) or if there is more to handling different versions, I recommend to check out the [Strategy design pattern](https://en.wikipedia.org/wiki/Strategy_pattern) which I’ll leave as an exercise for the reader.

---------------

Defining constants by constants is another pattern I’ve seen quite a few times. Take the example above of the RestApiVersion. A slightly different incarnation I’ve seen many times is the following:

{% highlight java %}
public enum RestApiVersion {

  V0(MyConstants.REST_VERSION_V0), // no, no, no

  ....
}
{% endhighlight %}

This again goes back to treating every literal as a magic string. There is no additional value gained by defining `REST_VERSION_V0` as a separate constant. The opposite is actually true. How do consumers decide when to use the proper facade like `RestApiVersion` and when to use the “backdoor” by just using the `REST_VERSION_V0` constant itself. With the constant exposed as a constant value, there is also no chance for the maintainer of RestApiVersion to dynamically adapt to future needs. With the whole concept modeled with a proper API, we do have a chance to change the implementation without breaking consumers.

---------------

Whenever you’re about to create a \*Constants class, take a step back, go for a walk, or grab a coffee with a fellow engineer. Try to explain why you want to create such a class and if that is really the right abstraction or if the next engineers on your component might be able to see the patterns easier with another abstraction. There are a lot topics we haven’t touched on yet. When should we actually use constants? What about literals with placeholders (I look at you [MessageFormat](https://docs.oracle.com/javase/8/docs/api/java/text/MessageFormat.html)). And are there any tools to detect unused constants? Let me know in the comments.[^footnote]

[^footnote]: Originally published on [Tasktop Blog](https://www.tasktop.com/blog/where_to_put-constants/)
