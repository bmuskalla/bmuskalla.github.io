---
layout: post
title: "import-posts"
date: "2018-01-05 22:01:30 +0100"
categories: blog
---

Need to check whether old posts from ex blogs should be imported.

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

[Merging nested Lists or Arrays with Java 8]: https://www.tasktop.com/blog/merging-nested-lists-or-arrays-with-java-8/
