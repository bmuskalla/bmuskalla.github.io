---
layout: post
title: "Merging nested Lists or Arrays with Java 8"
date: "2016-11-15 22:28:12 +0100"
---

When accessing 3rd party APIs with pagination, we tend to see the same pattern
over and over again. Usually, a response (represented as POJO) looks something
like this:

{% highlight java %}
class Result {
  public List<Item> getItems() {
    ...
  }
}
{% endhighlight %}

Be it from a third party service or your own APIs, after retrieving all results
of the API call, we end up with something like a `List<Result>`. Great. We don’t
really care about the response itself, we’re actually interested in all the
items of the responses. Let’s say we want all the items, filter some of them out
and transform them into a `TransformedItem`. People usually start writing
something like the following:

{% highlight java %}
List<Result> results = ...
List<TransformedItem> newItems = results.stream()
     .map(result -> result.getItems())
     .filter(item -> item.isValid())
     .map(TransformedItem::new)
     .collect(toList());
{% endhighlight %}

Ooops, this doesn’t even compile. The problem is that the first map doesn’t
return a `Stream<Item>` but actually a `Stream<List<Item>>`. In order to
actually merge/flatten all those nested lists, you can use [Stream#flatMap]( https://docs.oracle.com/javase/8/docs/api/java/util/stream/Stream.html#flatMap-java.util.function.Function-).
The difference is quite simple. `#map` allows you to transform an element in
the stream into another element. On the other hand, `#flatMap` allows you to
convert a single element to many (or no) elements.

{% highlight java %}
List<Result> results = ...
List<TransformedItem> newItems = results.stream()
     .map(result -> result.getItems())
     .flatMap(List::stream)
     .map(TransformedItem::new)
     .collect(toList());
{% endhighlight %}

Just in case you’re working with a 3rd party API that returns something ugly as `List<Item[]>`, you can use the same pattern, just choose the corresponding the flatMap function.

{% highlight java %}
class QueryResponse {
  public Item[] getItems() {
    ...
  }
}

...

List<TransformedItem> newItems = results.stream()
     .map(result -> result.getItems())
     .flatMap(Arrays::stream)
     .map(TransformedItem::new)
     .collect(toList());
{% endhighlight %}

Have fun with `#flatMap` and let me know in the comments about how you used `#flatMap` in your scenarios. A great explanation of how to compose streams and some concepts behind streams can be found in Martin Fowler [Collection Pipeline](http://martinfowler.com/articles/collection-pipeline/).[^footnote]

[^footnote]: Originally published on [Tasktop Blog](https://www.tasktop.com/blog/merging-nested-lists-or-arrays-with-java-8/)
