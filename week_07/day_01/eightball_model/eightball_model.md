#EightBall App - Models

##Learning Objectives
* More practice in creating/testing Java class in Android Studio

## Your first Android App

Over the next couple of days we're going to create a simple Android App for a Magic 8 Ball.

[i]: Ask the class if they know what a Magic 8-Ball does?
Basically we ask it a random question, shake the ball, and get a 'random' answer in return.

For our answers, we're going to create a model in Java which stores the answers and will return a random answer when the user enters a question. This afternoon we are just going to create the Java class for our answers and make some tests for them. We'll leave the Androidy magic for tomorrow.

First of all though, we need to create a project:

```
// setup

launchpad > android studio

Start a new android project

// application settings

Application name: EightBall
Company Domain: com.codeclan.example

Select the sdk version version 16 (Jelly Bean)
```

Note: there are many many sdk version of android, since it's always changing and improving. Different devices will have different versions - you've probably seen this when you have tried to install an app from the app store or google play and it says your device is not supported. In our case, we are going to target a version of Android which isn't the newest but can be run on all devices with that version of Android and later.

```
Click next

//Form factors

Don't change

// Activity

No activity > next

Activity name: Keep it as main activity

Click finish

```

###Models/Classes

So let's get on with creating a model for our answers. Again, this is just a review of some of the stuff you covered last week in Java. We are going to need a model to store our answers and to get back an answer when we shake the ball.

##Create an Interface

There are many different ways we can get the answers. We may have a simple list of answers, or we may get them from an API. But whatever way we get them, and in whatever type of model they are stored, and however we set up our answers, we need to be able to do the following:

* get an answer to display

[i]: possibly write this on the board as a reminder for later

This forms a 'contract' for the model we use to store our answers. Thinking back to last week's Java lessons, what can we use to describe this 'contract' in our code? An ***interface***.

This interface will be implemented by whatever model(s) we use to store our answers and get them from, and so any model we use ***MUST*** implement the method(s) declared in the interface.  

So lets create our interface. We do this by right-clicking on our package (example.codeclan.com.eightball) directory and selecting ```New->Java Class```.

From the ```Kind``` dropdown menu, select 'Interface'

Now we need to supply an name for our new interface. Our interface concerns the answer we get, so we could call it ```Answer```, but we'll follow the Java coding convention, which uses the ```...able``` , so we'll call this interface ```Answerable```.

This should give us the following:

```
//Answerable.java

public interface Answerable {
}
```


[i]: note that in the Android Studio project window, the icon for the file is not a 'C' but an 'I'.

So what method(s) do we want to declare in our interface? ([i]:Going back to our list on the board) we need to get answer to display. Let's call this method ```getAnswer()```. Do we want it to return anything? Yes - we just want it to return a ```String``` containing our answer i.e.:

```
    String getAnswer();
```

So now we have an interface which declares one functions:

```
//Answerable.java

public interface Answerable {

    String getAnswer();
}
```

##Creating a Class

So now that we've got an interface, we need to implement its method(s) in a class. So thinking about our app, how do we want to store our answers? What about a list of strings. So we could create a class which has an ArrayList of strings and implement the required methods.

[i]: Perhaps mention that there are various ways in which we could set up our list of strings. We might populate it from a simple array of strings, or we might be parsing JSON we get from an API call.

[i]: draw diagram on the board and keep referring back to it

So lets create our class. Right-click on our package (example.codeclan.com.eightball) directory and selecting ```New->Java Class```. Let's call it ```Answers```.

We need to state that it implements the ```Answerable``` interface:

```
//Answers.java

public class Answers implements Answerable {

}
```

Add an ArrayList of strings to store all our answers
```
//Answers.java

public class Answers implements Answerable {
    protected ArrayList<String> answers;
}
```

Add a default constructor.

```
//Answers.java

public class Answers implements Answerable {
    protected ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String>();
    }

}
```

[i]: Show how to import the class ```ArrayList``` class using ```alt``` + ```return```

Add a second constructor which allows us to create a new instance and passes in an ArrayList of strings:

```
//Answers.java

public class Answers implements Answerable {
    protected ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String>();
    }

    public Answers(ArrayList<String> answers) {
        answers = new ArrayList<String>(answers);
    }
}
```

Add a method to get all the answers. It should return an ArrayList of type ```String```. All this function needs to do is return whatever is stored in the ```answers``` member of the Answer class so we could write it like this:

```
public ArrayList<String> getAnswers() {

    return answers;
}
```

But this is not really good practice. Because ArrayLists are always mutable i.e. changeable, so if you simply return ```answers``` then you're really giving the calling function full access to it and so you're actually letting it change a private class member (oh no, no, no!)

So, to prevent this, rather than returning the list, we return a ***copy*** of the list. We can do this quite easily by simply calling the ArrayList constructor and pass in an existing list, in our case, ```answers```

```
//Answers.java

    public ArrayList<String> getAnswers() {
        return new ArrayList<String>(answers);
    }
```

Next add a method to add an answer to the list. We can use the ArrayList ```add``` method:

```
//Answers.java

    public void add(String answer) {
        answers.add(answer);
    }
```

Add a method to get the size of the list:

```
//Answers.java

  public int getLength() {
    return answers.size();
  }
```

We want to get a particular answer in the list. We can use it's position in the list, like an array index. So we can use the ArrayList ```get``` method, passing it in a number.

```
//Answers.java

    public String getAnswerAtIndex(int index) {
        return answers.get(index);
    }

```

Finally, we can add a method to actually get a random answer from the list. This will implement the ```getAnswer``` method declared in our interface.

```
//Answers.java

    public String getAnswer() {
        //code goes here
    }
```

So how do we want to get our random answer:

* get a random number between 0 and the size of the list
* get the entry in the list at that position in the list and return it

So first of all, we want to generate a random number. We begin by creating an object of the Java ```Random``` class.

```
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
    }
```

Next, we need to get the size of the list, by calling the ```getLength``` method we added earlier:

```
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
    }
```

We then need to get a random number between 0 and the size of the array. We can do this using the ```nextInt``` method from the ```Random``` class. We pass in the size of the list:

```
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);      
    }
```

Now that we have a random number we can get the item in the list at our 'random' position by calling the ```getAnswerAtIndex``` we implemented earlier. The string returned by ```getAnswerAtIndex```is what our ```getAnswer``` method will return i.e.:

```
//Answers.java

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        String answer = getAnswerAtIndex(index);
        return answer;
    }
```

At the moment we still don't have any answers to display. If we were to create an ```Answers``` object using the default constructor, then we'd simply have an empty array list of strings. What we could do is create a small method, called ```setUpAnswers``` which adds a couple of answers to this empty array list. We can call this method from within the default constructor after the empty array list has been initiated.

###Task (10-15 minutes) -***IF TIME*** - otherwise do it in class.

* Complete the implementation of the ```setupAnswers``` method

####Possible Solution

Make this method ```private``` since it will only be called from within the default constructor.

First of all, let's add a simple array of strings, containing only two answers (can you guess where they come from?):

```
//Answers.java

    private void setupAnswers() {
        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!"
        };
    }
```

Now we need to add these answers to the ArrayList ```answers``` in our class. We can do this by looping through the array and calling the ```add``` method we declared in the ```Answer``` class i.e.:

```
//Answers.java

    private void setupAnswers() {

        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!"
        };

        for(String answer : answersToAdd) {
            add(answer);
        }
    }
```

We can now call this method from within the default constructor, immediately after newing up the ArrayList e.g.:

```
//Answers.java

    public Answers() {
        answers = new ArrayList<String >();
        setupAnswers();  // ADDED
    }
```

So the completed class would now look something like:

```
//Answers.java

public class Answers implements Answerable {

    protected ArrayList<String> answers;

    public Answers() {
        answers = new ArrayList<String >();
        setupAnswers();  
    }

    public ArrayList<String> getAnswers() {
        return new ArrayList<String>(answers);
    }

    public String getAnswerAtIndex(int index) {
        return answers.get(index);
    }

    public int getLength() {
        return answers.size();
    }

    public void add(String answer) {
        answers.add(answer);
    }

    public String getAnswer() {
        Random rand = new Random();
        int listSize = getLength();
        int index = rand.nextInt(listSize);
        String answer = getAnswerAtIndex(index);
        return answer;
    }

    private void setupAnswers() {
        String[] answersToAdd = {
                "Yes!",
                "That would be an ecumenical matter!"
        };

        for(String answer : answersToAdd) {
            add(answer);
        }
    }
}
```


##Creating Unit Tests

Let's now write some unit tests for our model.

```
Build variants (left hand tab) -> unit tests
```

So, first of all, we need to add a new class to run the tests.

```
Right click test package > new class > AnswersTest
```

This gives us an empty class. In order to be able to run tests we need to add the following two imports:

```
import org.junit.Test;
import static org.junit.Assert.*;
```

So our class will look like:

```
//AnswersTest.java

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AnswersTest {
}
```

Now we need to add a test. Let's write a test to test the ```getAnswers``` method defined by ```Answers```:

```
//AnswersTest.java

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AnswersTest {
    @Test
    public void getAnswersTest()
    {
        Answers answers = new Answers();
        assertNotNull(answers.getAnswers());
    }
}
```

Right click on AnswersTest and it will allow us to run it.

###Task
Go and write tests for the rest of the methods in the ```Answers``` class:

* getLength()
* getAnswerAtIndex()
* add()
* getAnswer() [Hint: you might want to print out the answer returned]

Possible Solution:

Our test class could look something like:

```
//AnswersTest.java

public class AnswersTest {

    ArrayList<String> testAnswers;

    @Before
    public void before() {
        testAnswers = new ArrayList<String>();
        testAnswers.add("Yes!");
        testAnswers.add("That would be an ecumenical matter!");
    }


    @Test
    public void getAnswersTest() {
        Answers answers = new Answers();
        assertNotNull(answers.getAnswers());
    }

    @Test
    public void createAnswersWithListTest()
    {
        Answers answers = new Answers(testAnswers);
        assertEquals(2, answers.getLength());
    }

    @Test
    public void getAnswerAtIndexTest()
    {
        Answers answers = new Answers(testAnswers);
        String result = answers.getAnswerAtIndex(1);
        assertEquals("That would be an ecumenical matter!", result);
    }

    @Test
    public void getAnswerTest() {
        Answers answers = new Answers(testAnswers);

        String answer = answers.getAnswer();

        System.out.println("The answer is... " + answer);
        assertNotNull(answer);
    }


    @Test
    public void addTest() {
        Answers answers = new Answers();

        int originalNumberOfAnswers = answers.getLength();
        answers.add("Yes");

        assertEquals(originalNumberOfAnswers + 1, answers.getLength());
    }

}

```
