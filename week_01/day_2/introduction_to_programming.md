# Intro to programming

## Learning objectives:

Students should:

- Know what a programming language is
- Know how to use IRB
- Understand the difference between a class and an object
- Be able to assign variables to objects
- Know how to call a method on an object
- Be able to use simple arithmetic methods on Fixnum objects
- Be able to call length methods on strings

## What is a programming langauge?

Programmers communicate thoughts/ideas to computers.

* Draw: communicating thoughts to a computer

In the **Bad Old Days**, programmers had to communicate with computers in binary.

- Not fun.
- Hard to write.
- Harder to read.
- Expressing high-level ideas, e.g. Bank Account, Online Shop, the latest Pokemon game, would be almost impossible

But we don't live in the Bad Old days. We live in the... good new days. And we have programming languages, and interpreters!

* Draw: Interpreter robot between person and CPU

The programmer can speak to the interpreter in a common language, and the interpreter can take that language and convert it to binary for the CPU.

Common languages are more readable & expressive, and so more maintainable. Some examples of programming languages are: Ruby, Python, JS, Java, C, C++, C#, Swift, Go, Pascal, Scala, Haskell and others.

## Ruby

We'll start with Ruby.

Created in 1995 by Yukihiro Matsumoto (Matz).

"I hope to see Ruby help every programmer in the world to be productive, and to enjoy programming, and to be happy. That is the primary purpose of Ruby language."

### Why teach in Ruby

Ruby has many traits which are transferable to other languages.

- Structure similar to many other languages (class-based object-oriented language)
- Community tends to follows best practices (TDD)
- Clean (everything is an object)
- Clear syntax - looks like written English

### Working with Ruby

We all have Ruby installed on our laptops.
```
# terminal
ruby -v
```

`irb` will open an Interactive Ruby environment in the console (we exit it by typing quit or exit).

'irb' stands for "Interactive RuBy", and typing that into a terminal launches a ruby REPL.

* REPL = Read, evaluate, print, loop => good for experimenting with short snippets of code.

`irb` allows to quickly try snippets of ruby outside of your application.

Use it frequently to test lines of code or to experiment outside of the bigger programs we will write later.

Let's write our first Ruby program
```
# irb
"hello"
=> "hello"
```
So what was going on here?

## Objects

Ruby created an object to represent text.

In Ruby "Everything Is An Object".

* Draw: Person says "hello" to interpreter

Ruby created an object to represent text for us. How did Ruby know how to do this?

Classes. A class describes how to make an object. Ruby just created an object of the String class for us.

We can find the class of an object by asking it.

```
# irb
"hello".class
=> String
```

```
# irb
"Hello"
"Good Day"
"Howdy"
```

* Draw: String class, multiple objects

* Draw: Person class => Person objects ('me')

Learning to program in an OO language like Ruby is a combination of:
  - understanding how we construct programs (grammar)
  - and how we can use the Classes it provides for us (vocabulary)

## Types

In Ruby 'type' is really just another word for 'class'.

Some of the basic types that come with Ruby are Strings, which we've already seen, and Fixnums.

Ruby gives us special syntax to create strings. Single quotes, and double quotes. (Examples).

We also have special syntax to create Fixnums (and Bignums, which are similar, but bigger). Just typing the number!

## Variables

### Assigning objects to variables

Lets create another string object
```
#irb
"This is a string object I have told Ruby to create"
```
How can I get this string back? We created the string but it was lost to us immediately. We'd need to type it again to get it back.

To hold on to a string we need to assign a variable to it.
```
#irb
my_string = "A brand new string object"
```
We create the object as before, but this time we hold a reference to it and call it my_string.

[i:] Draw on board the variable referencing the object. Show this for each example  
[i:] Can use analogy of cloakroom and ticket here.

We can then access the object using the variable we have assigned to it.
```
#irb
my_string
```
We can store values in "variables"
```
#irb
my_string = "Another String I have defined"
my_string
```
They're called variable because the values can change.
```
#irb
my_favourite_food = "chips"
my_favourite_food
my_favourite_food = "pakora"
my_favourite_food
```
The name of a variable is almost totally up to you to define. Pick a name, and tell it what value it equals:

Have a play with assigning objects to variables. Eg
```
# irb
character = ""
age = 24
```

### Naming Conventions

Ruby code is written using `snake_case_like_this` for variables and `CamelCaseLikeThis` for classes. So you'd say `my_favourite_food` is a `String`.

--- Have a break ---

## Using Objects

We've seen objects, and holding on to them with variables. We've created String objects to represent text, and FixNum objects to represent numbers.

Okay nice, but we often want to do things with our objects.

Let's create two numbers.
```
number_1 = 22
number_2 = 12
```
We can find the sum of this using the + operator
```
number_1 + number_2
```
Again we have just lost this value! What can we do with it? Yes, store it to a variable.
```
sum = number_1 + number_2
sum
```
Fixnum has many operators we can use. Try using `-`, `*`

## Strong Typing

What do you think will happen if we do this?
```
1 + "2"
```

### String

#### Combining Strings

Strings also have the + operator this will combine the strings.

```
word_1 = "hello"
word_2 = "world"
sentence = word_1 + word_2
sentence
```

#### Calling methods

The objects created by the out the box Ruby class have a bunch of 'things' we can do to them.
```
#irb
my_string = "hello"
my_string.length()
```
and...
```
my_number = "2"
my_number.to_i
```
These things are called methods. (Again what is actually going on will become clearer when we start writing our own classes next week). We call a method on an object using . and then the name of the method we want to call. Let's see useful methods on strings.

To see all the methods available on a String check out the docs.

http://ruby-doc.org/core-2.1.4/String.html

## Summary

We have learned about Classes, and how Ruby provides useful Classes out the box. How we can use Classes to create objects, and how we can assign objects to variables so we can reuse them. We have seen that objects have methods on them which we can call using dots(.)

Creating objects from classes, and calling methods on these objects is what we as Object Orientated programmers will spend most of our time doing. It may seem strange as first but it will become second nature to us.

## Further Practice

If time, practice creating objects, assigning variables, calling methods.

Create a String object, assigning a variable and call a method we haven't used yet. Create a Fixnum object, assigning a variable and call a method we haven't used yet.
