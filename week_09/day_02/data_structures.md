# Data Structures

## Learning Objectives

* Know what a data structure is
* Understand how choosing different data structures can impact our code's performance
* Be able to describe common data structures: arrays, hashes, linked lists

## Introduction

When we save an object to a variable in our program, that object is stored in
our computer's memory. In the course so far we've not had to think about that
too much, but today we're going to take a slight detour into the world of
data structures. The study of data structures looks at the way we structure
the data we save in memory, and the effect that this has on how well our program
runs.

You might be thinking at this point that you don't really know what a data
structure is, but you do. You just don't realise that you do. In fact, over
the last few weeks you've all become experts in a few data structures without
even realising it.

[i]: Ask students to name data structures they've used.

Arrays and hashes are both really common examples of data structures, which
programmers use every day. Other examples, which you might have heard of, include
queues, stacks, lists, trees, maps, sets and tables. They all solve very similar
problems in slightly different ways.

Today we're going to look at how effective these data structures are, as well
as considering a new type of structure: the linked list.

## What is a data structure?

So, without further ado, let's dive right in. What actually *is* a data structure?

It's actually really simple. A data structure is just a collection of data,
held together in a certain way. They allow the programer to think more about
the data they are storing, and less about its precise location in memory. Can
you imagine how annoying programming would be if you had to work out exactly
where in memory an object was stored before using it? (Hint: really annoying).

We can put it even more simply, though. Really a data structure is just an object
that allows us to put data in, and then later on to get data out. It's pretty
easy to see how arrays and hashes meet this criteria.

## Comparing Data Structures

The main way we will compare these data structures is using our old friend
time complexity from our lesson on algorithms. We will look at the time
complexity of a few important operations for each data structure, and in doing
this will hopefully be able to better choose between different data structures
for different use cases.

The operations we will look at are:
* storing data (i.e. adding something to the collection)
* finding the size of the structure (i.e. how many items are in the collection)
* retrieving an item (i.e. reading information back out of the collection)

There are other operations you might want to measure, such as making a copy of
the data structure, or searching to see if a value is included. We won't be
covering these today, but they are worth being aware of.

The best way to understand these different criteria are to look at an example.

## Arrays

[i]: Quick reminder here. We are talking about arrays as a general concept, rather than a specific implementation. In particular, the information here might not pertain to Ruby's `Array` class.

We've seen arrays loads already. We've used them to death. They're about as
simple as a data structure can be. You chuck some objects into them, and they
sit there, in the order you chucked them in, until you want them back.

But what's going on under the hood when we do this? To simplify things, we'll
look at Java's arrays, i.e., the sort of array you'd get if you declared a variable
of type `String[]` or `int[]`. This is because in languages that support dynamically
sized arrays (like Ruby) some of the things we'll talk about work slightly differently.

When we create an array in Java, we do the following:

```java
String[] myStrings = new String[5];
```

In particular here, we specify the size of the array at the time we create it.
Ever wondered why we have to do that?

[i]: Give students some time to think about it.

Let's break it down:
* We tell Java to create a new array which will have 5 Strings in it
* Java knows that really we're going to be storing *pointers* to String objects
* Java also knows how big those pointers are going to be
* So Java picks a spot in memory which is big enough to store 5 of those pointers in a row

[i]: You'll probably have to explain pointers here. Super short version: passing
whole objects around is super inefficient so we just pass around the location that
those objects can be found in memory. Thus most of the time Java isn't really passing
`String`s or `ArrayList`s around, it's passing a pointer to their location.

[i]: You probably won't have to mention, but might want to anyway, that primitive
types in Java don't get passed around this way.

Now when we ask for item `0` in the array, Java knows the location where the array
starts, and it goes to see what pointer is sitting there, and then it goes to
that pointer's memory address and brings us back the object.

Equally, if we ask for item `4`, Java knows the location where the array starts
and, vitally, how big each item of the array is, so it just adds that on to the
memory address and jumps directly to the item. This means it doesn't have to
go through the whole array one by one!

So how does this impact performance? Remember we're looking at getting data back,
finding the structure's size, and storing new data.

**Getting elements**: `O(1)` - we know the element's position in memory, so we just go
there and grab it. Simple.

**Length**: `O(1)` - the length is predetermined, so we can do this immediately.
Even in languages with dynamic arrays, the length is *normally* tracked in a
separate variable so that we don't have to recalculate it. (This is how Java's
`ArrayList` works).

**Insertion**: actually, in Java arrays, we can't insert new objects whenever
we please. We need to either replace something which is already there (which would be `O(1)`)
or use an `ArrayList`. Generally, in languages which allow for dynamically sized
arrays, appending a new item to the end of the array is `O(n)`. This is because
we first need to *find* the end of the array, before adding the new item.

[i]: If students are curious about how `ArrayList` avoids the `O(n)` appending
time complexity, it's actually pretty simple. The `ArrayList` implementation
simply hides a standard Java array, and wraps some nice methods around it. Most
importantly, it also resizes as necessary, which means that, when you hit the
current size limit of the array and try to add a new item, it will extend the
length of the current array, usually resulting in quite an expensive full copy
of the entire structure.

## Linked Lists

Much like arrays, linked lists are ordered data structures. Unlike arrays (or
standard Java arrays, at least), however, they are intended to be dynamically
sized by default. This means that we never have to worry about resizing the array
when new data is added. However it also means we need to make some sacrifices
when it comes to accessing our data.

Remember when we discussed arrays, we said all their items were arranged in a
sequence in memory? Well LinkedLists scatter their objects around in memory. This
means that as well as knowing the value of an element at a given index, we also
have to maintain a pointer to the next item in the list.

This can be pretty hard to visualise just from talking, so let's try drawing it.

[i]: Draw a linked list, with the pointer from the final node to its next element
pointing to `null`.

Now, when we add an element, we can simply stick it on the front, and give it a
reference to the item that was previously at the front of the list. Easy!

[i]: Draw a new item at the front of the list, pointing back to the old head.

Let's look at some implementations of a linked list, to see what's going on.

[i]: Hand out Java or Swift linked list code. N.b. Swift code is a generic implementation
of a basic linked list which might be a complete pain to explain fully. The Java
implementation can only store `String`s which is obviously simpler to explain, but
obviously isn't a full-featured implementation. It also exposes the `Node` implementation
detail to users, which isn't ideal, but is fine for understanding.

[i]: Point out important parts of the code. Specifically: how do we get the length
of the list? How do we add new objects?

Okay, let's look at the performance of the key methods we've talked about.

**Getting elements**: `O(n)`. We need to loop through the list items to get to
a given index. Clearly the more elements we have, the more we have to loop through.

**Length**: `O(n)`. In its most basic form, we need to loop through all the items
and count them up. Technically this could be avoided by keeping track of the number
of items as we add them, which should reduce it to `O(1)`.

**Insertion**: `O(1)`. This is where linked lists really come into their own. We
can add new items at the beginning of the list, rather than the end, and thus
avoid the requirement to loop through to find the next empty space.

Although it's not one of our three measurements in this lesson, deleting items
is also easy, as we can simply point an element's `next` reference at the `next`
node of the one we want to delete.

[i]: Why wouldn't adding items to the beginning make any difference to an array?
A: we'd have to shift every item in memory which would end up being worse than
just looping through to the end and adding it there.

## Hashes

When we say "Hashes", we're really talking about a family of data structures.
Ruby's `Hash` is one example, as are Java's `HashMap`, Python's `Dictionary`,
Swift's `Dict`, and others. In the rest of this section we'll use the term
`Hash` to refer broadly to all of the above.

[i]: Ask students to describe a `Hash`/`HashMap`.

We know `Hash` lets us take a value, and a key, and create a "map" between the
key and the values. (Hence the word "Map" in Java's `HashMap`). We also know
that they're unordered. That is, if we loop through a `Hash` using, for example,
Ruby's `each` method, we aren't guaranteed that elements will be in any specific
order.

### How do they work?

So how does it actually work? Well let's say we do the following in Ruby:

```ruby
phone_numbers = {}
phone_numbers[:pizza] = '07777777777'
puts phone_numbers[:pizza] # 07777777777
puts phone_numbers[:chippy] # nil
```

First things first: we create a new `Hash`. This works very similarly to creating
a new array, in that the language reserves some fixed space in memory, starting
at a known address. We don't really know how much space is reserved without looking
at the source code, so let's not worry too much about it.

So we've reserved our space. Next up we go to add an item to the `Hash`. In
Ruby we'll often use `Symbol`s for this, though `String`s, `Int`s and even other
`Hash`es (ugh) will also work.

At this point we've got:
* a `Symbol` we want to refer to the value by
* a load of memory addresses (or buckets) we know are reserved for us

Getting from one to the other isn't entirely easy. To do it we use what's called
a "hash function." Basically, it's just some code that takes our arbitrarily-large
key object and squashes it down into a fixed-size string of characters.

[i]: This is similar to what happens to passwords when you enter them on a website?

In an ideal world, the hash we create is unique, and we are able to match that to
a location in memory just like using an array index. Unfortunately, as we'll see
in a moment, that's not always the case.

Once we've matched the key to a location in memory, we simply save the value
in that memory location.

Retrieving the object works identically, except rather than saving we just
return the value that was stored at that location (or `nil`, or a default value,
or whatever).

### Performance

We're going to go back to considering both the average and worst case scenarios
with `Hash`es, because in this case it actually makes a pretty big difference.

#### Average Case

Let's do the average case first. In the majority of cases our keys are going
to produce a unique hash value, and in those cases performance works like this:

**Getting elements**: `O(1)`. You might think that the hash function would change
the performance characteristics of our get method, right? But it doesn't! Our
hash function is really just one operation per element we have to get, so it's just
constant.

**Length**: `O(1)`. This would take longer if it was recalculated every time we
needed to know the size (in which case it would clearly be `O(n)`). However, in
most `Hash` implementations this is tracked in a separate counter variable, which
is incremented and decremented as necessary.

**Insertion**: `O(1)`. This is true for exactly the same reason that getting
an element out is `O(1)`. We hash the key and are given a memory location in which
to store the value, which clearly doesn't depend on the number of key-value
pairs in the `Hash`.

#### Worst Case

The worst case is pretty different. It will help to think about when this case arises.
We said earlier that it's convenient to assume that our hash functions always
return unique values, but consider the following case: we have usernames we wish
to use as keys in a hash. Let's say for the sake of argument that a username is
always 10 characters. What if the hash function tries to hash all the keys
to only 8 character hashes? In this cases, and cases like this, it is impossible
to avoid clashes (by the Pigeonhole Principle, fellow maths nerds).

That means there must be at least one case where two usernames will hash to the
same value, and therefore technically point to the same memory location.

In these cases, we have to make some adjustments to the data structure. There
are many possible adjustments, and the best place to get an overview is probably
[the Wikipedia page for hash tables](https://en.wikipedia.org/wiki/Hash_table).

In these worst cases, we have the following measurements:

**Getting elements**: `O(n)`.

**Length**: `O(1)`. (Unchanged, as we can still track count separately).

**Insertion**: `O(n)`.
