# Ruby Functions

#### Learning objectives

* Understand the concept of isolating code into functions, abstraction.
* Why we use functions
* Understand local variables
* Understand parameters and arguments
* Recognise duplication in code and attempt to DRY
* Run our first tests

##### Duration

1 hour

## What are functions?

- A 'function' is a reusable chunk of code that can be called (invoked) by name to perform a specific task.
- Can think of it as a little machine that take in some things and returns something.

Let's create a little code file to play with ``` touch my_functions.rb ```

```
def greet()
   return "Hey"
end

puts greet()

```
## So what do they do?

We use them to encapsulate meaningful pieces of code into small, isolated constructs.

We've been using some functions already like `.length`. These are special kinds of functions which are associated with an object ("methods"). Try not to worry about this too much - we will cover it later in the week.

In Ruby, functions *always* return a value - whether we want them to or not.  By default, the result of the last evaluated expression is returned, but you can also use the `return` keyword to explicitly return a value. We will do this in the beginning because it makes it clearer.

## Why Do We Use Functions?
 * It's much easier to find and fix bugs if you've organised your program well.
 * Separation of concerns makes our code less redundant
 * We can 'abstract' our programs into individual parts.
 * We can 'encapsulate' data so that no other part of the program can interfere with it

## Anatomy of a Function

Defined with `def` then function name followed by (), end with `end`

  - name can't begin with a number
  - name *must* begin with a lower-case character
  - special characters are allowed and imply functionality (? for predicate, ! or 'bang', = for setters, etc)

## Scope

A function has it's own internal world and doesn't share it's variables that another function has.

```
  def greet()
  	words = "Hey"
  	return words
  end

  def greet_two()
  	return words
  end

  puts greet_two()
```
This will throw an error as the speak two function doesn't know about words.

We call variables which are solely defined in a function "local variables". They exist for the life of the function, then are lost. They cannot be seen by any other function.

## Passing variables to functions
[ Holding out hand to receive arguments ]
We can give functions the information they need using arguments which we pass into the function.  The behaviour of our function will now depend on what we pass in.  This is a very powerful concept.

```
  def greet(name)
    return "Hey " + name
  end

  puts greet('Rick')
  => "Hey Rick"

  def myFunction( parameter )
    return parameter
  end

  puts myFunction( 'argument' )
  => 'argument'
  puts myFunction( 12345 )
  => 12345
```

When we define what we need in our functions world, we call these parameters. When we provide what a function has asked for, we call these arguments.

Multiple parameters are separated with a comma:

```
   def greet(name, time_of_day)
    return "Good " + time_of_day + " " + name
   end

   puts greet('Rick', 'morning')
   => "Good Morning Rick"
```

This is getting a little messy,  there is an alternative way we can do this.

String interpolation allows us to write a string, we can tags #{} in the string.  Anything in these tags will be evaluate as code, i.e it will look for the variable.

```
   def greet(name, time_of_day)
    return "Good #{time_of_day} #{name}
   end
```

[Task:] Improve the greet method to always have a capital at the start of their name.

```
  greet('rick', 'morning')
```

```
   def greet(name, time_of_day)
    return "Good #{time_of_day} #{name.capitalize()}
   end
```

Ruby objects, such as string and fixnum come with many excellent useful methods.

[:MINI LAB]

1. Create an add function
  - this will take two parameters
  - call the first parameter a and the second b
  - use the return keyword
  - Invoke the function ```add( 2, 3 )```
2. Create a population_density function
  - this will take two parameters
  - call the first parameter population and the second area
  - calculate the population density and return it
  - invoke the function using the population and area of Mauritius:
      - population: 5373000
      - area: 77933
