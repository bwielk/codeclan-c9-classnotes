# Answers From a Text File

We have made our EightBall app dependent on an interface, "Answerable", great plan! Now if we want to get our Magic Eight-Ball's answers from a different source, we can simply swap a new in for our basic "Answers" class.

We're going to read a list of possible answers from a text file.

First we need to get our text file into our Android project.

```
# GUI instructions

Right-click "res" directory
Make a New > Android Resource Directory
Select Resource type: raw.
```

"raw" is another special Android directory like "layout" (for layout XML files)
It's named "raw" to show it's for storing "raw", or uncompressed, data.

Right-click your new "raw" directory and create a `New > File`
Since these are Sandy's favourite Eight Ball answers, let's call it "sandy_answers.txt"


```
# sandy_answers.txt

Yes!
That would be an ecumenical matter!
Feck Off!
Go on! Go on! Go on! Go on! Go on! Go on!
Drink! Feck! Arse! Girls!
Don't tell me I'm still on that feckin' island
Feck off cup!
I'd love a Pop Tart
Oh, that's fine, you go ahead there
Down with this sort of thing!
Careful now
As if by magic, I can create a big crowd of invisible ducks
That money was just resting in my account
Gobshite!
```

Now that we've got our answers data, Let's make our Java class that will grab them and return us a random answer.

Right-click our app's Java package, and create a `New > Java Class`
We'll call it "TextFileAnswers" - and tell it that it should implement our "Answerable" interface.

```java
// TextFileAnswers.java

public class TextFileAnswers implements Answerable {

}
```

First things first we're definitely going to need an ArrayList of Strings to put our answers in.
And let's add a constructor which initialises this ArrayList.

```java
// TextFileAnswers.java

public class TextFileAnswers implements Answerable {

  private ArrayList<String> answers; // NEW

  public TextFileAnswers() { // NEW
      answers = new ArrayList<String>();
  }

}
```

The object we're going to use to read text from our file is a Java class called `Scanner`
It is just a regular Java class, nothing to do with Android, and it lets us read (or "Scan") various input sources as pure data, and handles converting them into Java objects that we can work with.

We'll add and instance variable to store our Scanner:

```java
// TextFileAnswers.java

  private ArrayList<String> answers;
  private Scanner fileReader;     // NEW

  public TextFileAnswers() {
      answers = new ArrayList<String>();
  }
}
```

If we look up Scanner's documentation, we see we need to pass it in an "InputStream" type object to its contructor. This will be the data source (our text file) that it will read.

We're going to get this InputStream from our android "raw" folder, so we need to pass it in to our TextFileAnswers class' constructor to get access to it.
The format that we get it from the raw resource directory is an InputStream type object, luckily, our Scanner's constructor can take an InputStream. We'll take an InputStream type parameter to our class' constructor, and pass it on into the InputStream class' constructor.

```java
// TextFileAnswers.java

  // SAME ABOVE

  public TextFileAnswers(InputStream file) { // UPDATED
      answers = new ArrayList<String>();
      fileReader = new Scanner(file); // NEW
  }
}
```

Now that we've got our Scanner created, we're going to call a setup method that will handle using the Scanner and populating the ArrayList, let's call that method at the end of our constructor method, and then go and write it.

```java
// TextFileAnswers.java

  // SAME ABOVE

  public TextFileAnswers(InputStream file) {
      answers = new ArrayList<String>();
      fileReader = new Scanner(file);
      setUpAnswers(); // NEW                // NEW
  }

  private void setUpAnswers(){

  }
}
```

The Scanner has a lot of very useful but quite confusing methods. Thankfully, we're only going to need to use two of them here.
We can get the "next line" from our InputStream with the Scanner's nextLine() method, which returns a String.
We can also check if there are any unread lines remaining with the hasNextLine() method, which returns a boolean.

We're going to use a while loop to read every line in turn from the file, until there are no lines left to read, when the hasNextLine() method will return false instead of true.

```java
// TextFileAnswers.java

  // SAME ABOVE

  private void setUpAnswers(){
      boolean moreLinesToRead = fileReader.hasNextLine(); // NEW
      while(moreLinesToRead){ // NEW                       // NEW
      }
  }
}
```

Inside the while loop, we want to read the next line remaining in the InputStream, and then add it to the answers ArrayList.

```java
// TextFileAnswers.java

  // SAME ABOVE

  private void setUpAnswers(){
      boolean moreLinesToRead = fileReader.hasNextLine();
      while(moreLinesToRead){
          String lineOfText = fileReader.nextLine(); // NEW
          Log.d(getClass().toString(), "adding " + lineOfText + "to answers ArrayList"); // NEW
          answers.add(lineOfText); // NEW
      }
  }
}
```

We then need to remember to re-assign our boolean variable that we're using to manage the while loop, so that when there are no lines left to read (and the hasNextLine() method returns false) the while condition will fail, and the loop will stop running.

```java
// TextFileAnswers.java

  // SAME ABOVE

          String lineOfText = fileReader.nextLine();
          Log.d(getClass().toString(), "adding " + lineOfText + "to answers ArrayList");
          answers.add(lineOfText);
          moreLinesToRead = fileReader.hasNextLine(); // NEW
      }
  }
}
```

To finish off our new class, we need the all important getAnswer method, so that our class fulfils its contract with the Answerable interface. (This can be very similar to how we got our random answer before)

```java
// TextFileAnswers.java

  // SAME ABOVE

  public String getAnswer() {
      Random rand = new Random();
      int arrayLength = answers.size();
      int randomIndex = rand.nextInt(arrayLength);
      String randomAnswer = answers.get(randomIndex);
      return randomAnswer;
  }
}
```

That's our TextFileAnswers class all ready to go, let's head back to our main EightBallActivity and put it to work.

We can swap out our Answers class for our TextFileAnswers and put it in that same "Answerable" type variable, and then call the same .getAnswer() method on it.

```java
// EightBallActivity.java

public void onShakeButtonClicked(View button) {
  Answerable answerGenerator = new TextFileAnswers();
  // same below
}
```

Unfortunately to get access to our file from our apps resources folder, we have to add an extra line here to get the InputStream.

```java
// EightBallActivity.java

public void onShakeButtonClicked(View button) {
  InputStream input = getResources().openRawResource(R.raw.sandy_answers); // NEW
  Answerable answerGenerator = new TextFileAnswers();
  // same below
}

```

This isn't perfect, as we'd prefer to be able to swap our Answerable classes in and out more simply, but it's not too bad.

We need to put this line in an Android Activity class as we only have access to the `getResources()` method by inheriting it from `AppCompatActivity`.


So that's one of many alternative ways we could get our answers for the Eight Ball, most importantly, we can swap it in for any other options as long as we implement our Answerable interface.
