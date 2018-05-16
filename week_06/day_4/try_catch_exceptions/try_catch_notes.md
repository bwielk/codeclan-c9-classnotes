# try-catch & Exceptions

## Learning Objectives

- Know what Exceptions are used for
- Understand when to throw your own Exceptions
- Be able to write and handle Exceptions

## Intro

We've all seen plenty of Exceptions when running our code, `NullPointerException`, `ArrayIndexOutOfBoundsException`, maybe you tried to divide by zero and destroy all of space and time, and java saved us all by throwing an `ArithmeticException`.

When we write java classes that other developers are going to use, we might want to throw our own exceptions, to let them know when they're using our code incorrectly.

[i]: Give out start code

We've got a pet shop that stores Pet objects, Dogs, Cats or Fish, and can find them by looping through it's stock of Pets trying to find a Pet with a matching name.

What happens when we give our .findPetByName method a null instead of "Meowingtons"?

If you change this search term to null and run the code, you should get a `NullPointerException`.

This is a bit rubbish - it doesn't really give us enough information about what's gone wrong. As students to take 10 minutes to think about how we could avoid this issue.

### Creating a custom Exception

`NullPointerException` is pretty common, we're going to give more information about why our code might be failing, by instead throwing our own Exception, first we have to create it.

Create a new file called NullStringExeption.java.

``` java
// NullStringException.java

public class NullStringException extends Exception{
  public NullStringException(String message){
    super(message);
  }
}
```


Our new Exception inherits from Java's Exception class, which makes it able to behave like the Java Exceptions we've seen thrown by the language itself.

The constructor calls the superclass' constructor to create an exception with a given String as its "message".

Now we've got an exception, we can "throw" it using the throw keyword, and we'll do this in our `findPetByName` method at the point where we know we can't complete the search we're trying to do. i.e. if it's given a null as its search String.

```java
// PetShop.java

public Pet findPetByName(String searchName){
  // NEW
  if (searchName == null) {
    throw new NullStringException("Cannot search for a pet with null instead of a name String");
  }

  // SAME BELOW
}

```

Now let's try to compile our code with our new Exception being thrown.

We should get a compiler error, saying we must "declare" or "catch" our Exception before we're even allowed to throw it!


### Delcaring our Exception

Java's compiler is helpfully telling us what to do next.

Let's "declare" our Exception. This just means letting the compiler know that our method might throw this Exception.

We do this with the "throws" keyword, which we add to our method definition.

``` java
// PetShop.java
                                              // NEW
public Pet findPetByName(String searchName) throws NullStringException {
                                              // NEW
  // SAME BELOW
}  

```



### catching our Exception

Our code still shouldn't compile. We've declared the Exception might be thrown, but we've still not caught it.

We do this using try-catch blocks.

We put our try-catch block where we call the method, not where the method is defined.

So in our ExampleTryCatch.java file, where we call our findPetByName function, we wrap that function call in a "try" block.

``` java
// ExampleTryCatch.java

public class ExampleTryCatch {
  PetShop shop;

  public void run(){
    setup();

    try{ // NEW
      shop.findPetByName(null);
    }
  }
}
```

We also have to catch the Exception if it is thrown, we do this in a catch block, immediately following our try block.

catch blocks follow try blocks, kind of like else blocks follow if blocks.

``` java
// ExampleTryCatch.java

  try{
    shop.findPetByName(null);
  }
  // NEW
  catch (NullStringException ex) {
    ex.printStackTrace();
    System.out.println("Exception Message:");
    System.out.println(ex.getMessage());
  }
// SAME BELOW
```

We can do whatever we like in our catch block, and we have access to the Exception object that was thrown, by convention I've named it `ex`.

Because our Exception class extends the official java language's `Exception` class, we have access to some methods from that superclass. ex.printStackTrace() is one of them, this will make your exception's output in the console look more familiar, printing every point where your exception was thrown traced back through the execution of the code.

We can print out whatever we like however.

### finally blocks

We use try blocks to wrap things that may fail to execute properly, and may throw exceptions.

Some common examples of things that may throw exceptions are things like accessing a remote server to get data, or accessing our database.

If a problem occurs when accessing our database, our program will thrown an exception and just crash. If that connection with the database is still open, we might be blocking other people from using the database. In a big program / database, this is really not good.

We can use the "finally" block to do things that we need to happen whether the code in our try block was successful, OR threw an exception. The "finally" code will always run either way. This is perfect for clearing up after ourselves, for example by closing any open database connections.

But like with catch blocks, we can do whatever we like in finally blocks, so I'm just going to log a message to the console so that we can see that it has run.

``` java
// ExampleTryCatch.java

  try{
    shop.findPetByName(null);
  }
  catch (NullStringException ex) {
    ex.printStackTrace();
    System.out.println("Exception Message:");
    System.out.println(ex.getMessage());
  }
  // NEW
  finally{
    System.out.println("and finally...");
    System.out.println("I'm done.");
  }

```
