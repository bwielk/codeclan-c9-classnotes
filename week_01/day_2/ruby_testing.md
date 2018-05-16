#Testing

We just wrote a nice greet method.

```
   def greet(name, time_of_day)
    return "Good #{time_of_day} #{name.capitalize()}
   end
```

When we write our code we want to make sure it works. Sounds obvious but let's have a think abut it. We can craft better code if it's tested. How do we test?

There are many approaches to Testing our code but the principles are the same. What we want to do is write code which asserts an expectation and returns true or false on the outcome. Or pass or fail!

###Test Driven Development
One way of programming is to write the test first and make it fail, and then write the code to make it pass.  

TDD has been shown to result in
- Crafting better code
- It's more maintainable
- It's easier to get your head into large codebases
- It makes your code more modular
- We don't want to manually test

We are going to recreate our greet method in this way.

To setup our tests we create a separate file:

```
mkdir specs
cd specs
touch my_functions_spec.rb
```

This my_functions_spec.rb is going to be run by us manually and ensure our functionality 'passes'! Inside our my_functions_spec.rb:

There are many testing frameworks that we could use.  A simple one is MiniTest.
We can install additional classes not available by default using the gem command line tool.  It can go to the internet and grab other Ruby classes written by other people.  This is incredibly powerful and allows for us to share code with our peers. We can create our own Gems if we want.

```
  gem install minitest
```

Then we need to refresh our Ruby environment to make sure this gem is available to do this. We can do this either by closing Terminal and restarting it, or this command:
```
  rbenv rehash
```

Now we need to set up our test file. To use a gem we use the keyword 'require' and then the gem name. For this one we use a specific part of Minitest called autorun.

Then we also need to include the code we are testing, using require_relative and specifying a file path.

```
require( 'minitest/autorun' )
require_relative( '../my_functions' )
```

Next we set up our test. All our tests must be wrapped in a class which inherits from Minitest - don't worry too much about this as we'll cover classes and inheritance later.

```
class FunctionTest < MiniTest::Test
 
end
```

Now we write each test as a function. The name must start with 'test' for Minitest to realise they are tests.

We can call our function and assign its result to a variable. Then we use our 

```
class FunctionTest < MiniTest::Test
  def test_greet()
    greeting = greet('Jay', "morning")
    assert_equal( "Good morning Jay", greeting )
  end
end
```

We can run this in terminal ```ruby specs/my_functions_spec.rb```

Ruby doesn't know about this function. Let's make it.

###Fail, try again, fail better.

Let's get closer to passing test in small iterations
```
   def greet(name, time_of_day)
   end
```

And now let's make it pass
```
   def greet(name, time_of_day)
    return "Good #{time_of_day} #{name}
   end
```


We can now write another test to make sure that our code capitalizes.
[:i] Key point, we are passing in a name that doesn't start with a capital.
```
def test_capitalises_names()
  greeting = greet('jay', "morning")
  assert_equal( "Good morning Jay", greeting )
end
```

```
  ruby specs/my_functions_spec.rb
```

```
   def greet(name, time_of_day)
    return "Good #{time_of_day} #{name.capitalize()}
   end
```

We produced the same functionality we had earlier, using test driven development.  We arrived at the same situation but this time with test coverage for basic usage and capitalisation.

### Good/bad method names

It's always useful to use function names that say what the function does - use snake case.

### More functions

Let's create an add function. We want to test drive our code in our spec. What do we need to do step by step:

1. setup test
2. decide a good method name for add? Add is probably good!
3. invoke our function that we haven't created
4. use the assert_equal method which takes two arguments
  - the expected result
  - the called method
5. the end keyword

```
def test_add()
  result = add( 2, 2 )
  assert_equal( 4, result )
end

```

If we run this spec. We should get an undefined method add(). This is handy, it's telling us what to do! We need to go and define a method add().

my_functions.rb
```
  def add
  end
```

If we run our spec again, we get wrong number of arguments. This is useful - it's giving us tips of what we need to do...let's add some parameters! Let's add ``` num_1, num_2 ``` to our add parameters.

my_functions.rb

```
  def add(num_1, num_2)
  end
```

If we run our spec again we should get actual: nil. So we can then add a return to our function and should get a pass:

```
  def add(num_1, num_2)
    return num_1 + num_2
  end
```

[i]: Optional task, test drive a subtract function.
