+++
title = "Refactoring towards speed reading"
description = ""
tags = [
    "java",
    "design",
    "refactoring",
    "speedreading"
]
date = "2018-06-08"
categories = [
    "Development"
]
highlight = "true"
+++

When was the last time you were in the [flow](https://en.wikipedia.org/wiki/Flow_(psychology))
while working through some code? Reading code or doing code reviews is an activity
that we do often, yet we don’t often get into the zone doing it. Too many times, we
have to slow down, check that last line again or try to figure out the structure of
the code. Even though we all follow the same principles for clean code, there is
always that gut feel which tells you that one style is better than the other. While
not conclusive, a part of this is the way we structure code for readability.

[![Photo by Fischer Twins on Unsplash](https://images.unsplash.com/photo-1506782664677-3e16d3382641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=80)](https://unsplash.com/photos/FrGYMDjdg4U)

[Speed reading](https://en.wikipedia.org/wiki/Speed_reading) is a technique many people
have heard about. The casual reader usually reaches 150–200wpm
([words per minute](https://en.wikipedia.org/wiki/Words_per_minute)) with a
good comprehension rate. Auditory readers can read approximatly 400wpm while
visual readers can reach up to 700wpm. Controversial world record holders in
speed reading claim to reach up to 4200wpm. But don’t worry, we don’t need
to set the new world record in speed reading to learn the basic concepts
and apply them to another area: our code. We’ll look at 3 areas that are
particular helpful when it comes to reading code: Skimming, meta guiding
and visual fixation.

![Simple sentence @ 400wpm](/blog/speedfactoring/sentence_400wpm.gif)

So what makes speed reading that fast? One of the first steps is to
suppress subvocalication. Subvocalization? Exactly. That voice in your head
that just tried to properly articulate that word. And yes, you’re now aware of
that voice again. But don’t worry, it will be gone soon :) Subvocalization
is something that an adult should be able to learn with relative ease as a
first step to seriously improve reading speed, not only for code.

In this post, I’m not going into the details of learning to speed read as others
do a way better job at that. Be it books, articles or software like
[spreeder](https://www.spreeder.com/cx/) or [spritz](http://spritzinc.com/).

Lets get to our first example that we want to refactor to improve readability.
Here is a simple function which takes 3 parameters.

![](/blog/speedfactoring/example_1.png)

I suspect it is not the first time for you reading code so I can safely
assume that you didn’t even try to read it word by word. The first thing
that happens when trying to read this code is that we try to skim over
it and find the relevant bits of what is happening based our previous
expierence. One likely way to read the code is to follow where and how the
input parameters are used. Using
[eye tracking](https://en.wikipedia.org/wiki/Eye_movement_in_reading), what
was likely happening when you read the code is this eye movement:

![Eye movement when tracking the parameter usage](/blog/speedfactoring/example_2.png)

After locating name, we actually have to break our visual fixation and find
the next parameter which requires us to look down and left. We can start
with a very simple refactoring to help a bit with this:

![](/blog/speedfactoring/example_3.png)

Better. But we’re not there yet. Looking at the semantic meaning of the
three lines of code here suggests that they’re in fact not too different.
We do validate all three arguments, not just age as the method name suggests.
While many people these days strive for clean code, the trigger to extract
a method is usually the number of lines that can be extracted. By extracting
methods for these cases even helps us to guide the eye, allowing future
engineers to actually skim over the code and let them decide whether they
need to stop here or actually go on depending on what they’re looking for.

By the way, were you able to read the animated sentence in orange above?
That was 400wpm. That is already very fast. The fact that we can rely on
visual fixation to avoid additional eye movement helps us to keep up.
If you’re not used to this reading speed, comprehension usually suffers
when reading a longer text in that speed. You can usually try it with
speed reading apps, [browser extensions](https://chrome.google.com/webstore/detail/sprint-reader-speed-readi/kejhpkmainjkpiablnfdppneidnkhdif?hl=en) or this [bookmarklet](https://www.spreeder.com/bookmarklet.php)
if you’re curious.

Meta guiding is another principle in speed reading that is commonly
suggested when starting to learn speed reading. Instead of trying to
read word by word in a book, you try to capture the whole line at once.
Kids usually do that by using their finger to keep track of the word
they’re reading. As adults, we usually stopped doing that at some point.
But using a finger or another device helps us to keep moving forward
and avoids jumping back a word or two. Funny enough, code itself can
act as such a device as it has an inherit structure that we can
leverage to guide our eye.

![](/blog/speedfactoring/example_4.png)

How many items are in the list? One, two, three, four! Five. Maybe more.
Oops, missed that zeros argument, too?. The structure that should actually
help us gets in our way. While we have allowed our “reader” to be guided
by the alignment of the add methods, we totally misguided the eye and
missed the constructor argument. Rewriting this to match the pattern
of the other add calls allows the reader to follow the guide easily
without missing any important information.

![Help guiding the eye of your reader](/blog/speedfactoring/example_5.png)

Now all the methods that actually add something to the list are in
line and easy to spot without looking back and forth.

What are your code snippets that you broke your flow of reading in
the past? Because most of the time, parsing the code with our eyes
is what we do. The trick is not to become a better parser or a better
reader. The goal should be to write our code in a way that it helps
guide the reader towards the important aspects of the code. A
reader needs to be able to skim over the code, ignore the boilerplate
that does not add to the semantic understanding and still have a
high comprehension. But in the end, it goes a long way to write
code that is not only readable but can actually be digested in a
really fast manner.

Next time you write some piece of code, see if you can actually speed read it.
