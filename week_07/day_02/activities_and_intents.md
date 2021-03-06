#Activities and Intents

##Learning Objectives

* Learn what an activity is
* Learn how to add a new activity to an app
* Learn what an intent is
* Learn how to pass data between activities using intents

##Activities and Intents
So far we have one 'page' or 'activity' in our app and our screen is starting to look a little 'busy'. Wouldn't it be be nice if we could enter our question and then, rather than the answer being displayed in the same screen, we were taken to a new screen which displayed the answer.

So how do we do this?

As we said earlier, Android has this idea of "activities" and "intents". It is these concepts we are going to make use of.

##Activities

We will start by looking at activities. An Activity is basically an individual screen in your app which is responsible for drawing it's components. It controls particular screen of information. In our ```EightBall``` App we currently only have one Activity called ```EightBallActivity```. As we want a new screen to be displayed when we hit the button then we need to add another activity.

As this new screen is going to display the answer the computer, we can call this Activity "AnswerActivity".

###Files required
To add the new activity we need to do the following:

1) Add an xml layout file for the activity in ```res.layout```. We shall call this ```activity_answer.xml```

2) Add a java file to the ```example.codeclan.com.eightball``` package. We shall call this ```AnswerActivity.java```

3) We also need to add the new activity to the ```AndroidManifest.xml``` file.
[i]: remind students as to what happened when we forgot this step the other day.

###Create new layout file

```
Right click layout
New > Layout resource file
file name: activity_answer
Keep LinearLayout
```

This will create the ```activity_answer.xml``` file which will contain a blank linear layout. It should look something like:

```xml
<!-- activity_answer.xml -->

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:orientation="vertical"
              android:layout_width="match_parent"
              android:layout_height="match_parent">

</LinearLayout>
```

###Create java class

So now we need to create a new java class file which will include the java code for our new activity. So let's create a new Java Class called "AnswerActivity".

[i]:If we look at the route/path it will be ```example.codeclan.com.eightball.AnswerActivity```

We also need to make sure that we include ```extends AppCompatActivity```.

[i]: it might be worthwhile reminding students how to import the necessary library classes.

```java
// AnswerActivity.java

    import android.support.v7.app.AppCompatActivity;

    public class AnswerActivity extends AppCompatActivity {

    }
```

We can now add the ```onCreate()``` method, and (remembering) we need to call the onCreate of the superClass, i.e. include the line:

```java
// AnswerActivity.java

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
    }
```

In this method we also need to set the content view to what is in our new activity_answer.xml file:

```java
// AnswerActivity.java

    setContentView(R.layout.activity_answer);
```

So the AnswerActivity.java file should now look like:

```java
// AnswerActivity.java

    import android.os.Bundle;
    import android.support.v7.app.AppCompatActivity;

    public class AnswerActivity extends AppCompatActivity {

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            setContentView(R.layout.activity_answer);
        }
    }

```

[i]: if you want you can add logging to the ```onCreate``` method to display whenever it is called. All you need to do is add

```java
// AnswerActivity.java

Log.d(getClass().toString(), "AnswerActivity.onCreate called");
```

to the ```onCreate``` method i.e. :

```java
// AnswerActivity.java

    import android.os.Bundle;
    import android.support.v7.app.AppCompatActivity;
    import android.util.Log;

    public class AnswerActivity extends AppCompatActivity {

        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(savedInstanceState);
            Log.d(getClass().toString(), "AnswerActivity.onCreateCalled");
            setContentView(R.layout.activity_answer);
        }
    }

```


###Update manifest file

We now need to add our new activity to the manifest file.

```xml
<!-- AndroidManifest.xml -->
        <activity
            android:name=".AnswerActivity">

        </activity>
```

Let's give it an ```android:label attribute```, like we did with the main activity we had earlier.

```xml
<!-- AndroidManifest.xml -->

android:label="@string/answer_activity_title"
```

So now we need to add an "answer" entry to the ```strings.xml``` file so that it is properly referenced:

```xml
<!-- strings.xml -->

<string name="answer_activity_title">Computer says ...</string>

```

This activity is started by a button click on another activity. We also want (in this case) to be able to go back to the previous activity when we click the 'back' arrow at the top of the screen. This previous activity is called the ***parent*** activity. We therefore need to let the manifest know which activity is the parent activity. We do this by using the ```android:parentActivityName``` attribute. The value of this attribute is the actual parent activity. In our app the parent activity in this case is `EightBallActivity`, so let's add an ```android:parentActivityName``` attribute entry to our "AnswerActivity" activity in the manifest file. The value is the whole path/route to `EightBallActivity` as in its activity name i.e. ```example.codeclan.com.eightball.EightBallActivity```.

```xml
<!-- AndroidManifest.xml -->

    android:parentActivityName=".EightBallActivity">
```

The ```AndroidManifest.xml``` entry for our new activity should now look something like this:

```xml
<!-- AndroidManifest.xml -->

        <activity
            android:name=".AnswerActivity"
            android:label="@string/answer_activity_title"
            android:parentActivityName=".EightBallActivity">           
        </activity>
```

###Move textView to new activity

We want our new activity to include the TextView which is currently in ```activity_main.xml``` so we can simply cut and paste it from the ```activity_main.xml``` into our new ```activity_answer.xml```:

It should now look like the following:

```xml
<!-- activity_answer.xml -->

<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
              android:orientation="vertical"
              android:layout_width="match_parent"
              android:layout_height="match_parent">

    <TextView
            android:id="@+id/answer_text"
            android:text="@string/answer"
            android:textSize="30dp"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"/>

</LinearLayout>
```

In ```AnswerActivity.java``` lets add the textView control as we did in the original view, so the class needs to include the following variable:

```java
//AnswerActivity.java

TextView mAnswerText;                                   
```

In the ```onCreate``` method, we can assign to these variables as we did before using the ```findViewById``` method, so can add the following to the ```onCreate``` method:

```java
//Answer.java

mAnswerText = (TextView)findViewById(R.id.answer_text); // <-- added line
```

We can now go back to the ```EightBallActivity.java``` file and delete the references to ```answer```.

So we are now ready to try running the App, so try running the app and see what happens. You'll notice that all we have on our screen is our EditText control and our shake button. Try entering text and clicking submit. What happens? NOTHING.

If you go to our log you should see a log message stating what text was entered. But we want to go to a new screen which shows our answer.

How do we do this? How do we pass the answer to our question to a new screen so that it can be displayed?

First of all, we need to start the new Activity we wish to run, in our case the ```AnswerActivity``` activity.

The simplest way for one activity (in our case ```EightBallActivity```) to start another activity (```AnswerActivity```) is with the ```startActivity``` method:

```java
public void startActivity(Intent intent)
```

When we call ```startActivity``` then this call is actually sent to the OS, in particular, to a part of the OS called the ```ActivityManager```. When the OS receives the call to ```startActivity``` then the ```ActivityManager``` creates an instance of the ```Activity``` and then calls its ```onCreateMethod```.

So how does the ```ActivityManager``` know which ```Activity``` to start? That information is stored in the ```Intent``` parameter.

##Intents

So what are intents?

As we (briefly) mentioned before, intents sit between both the OS and activities, giving the OS actions to do and giving back information to activities but also sit in between activities passing around information.

Intents are actually objects which components can use to communicate with the OS. So far, the only component you have seen is the activity, but there are others, such as services, broadcast receivers and context providers.

Intents are multi-purpose communication tools and the ```Intent``` class provides us with different constructors depending on what we are using the intent for.

In our case, we are using an intent to tell the ```ActivityManager``` which activity we want to start, so we need to call the following constructor

```java
    public Intent(Context packageContext, Class<?> cls)
```

The ```Class``` argument specifies the activity class that the  ```ActivityManager``` should start. In our case this is our AnswerActivity class.
The ```Context``` argument tells the ```ActivityManager``` which application package the activity class can be found in. In this case, this is the ```EightBall``` package.

So, in our ```onShakeButtonClick``` method in ```EightBallActivity.java```, let's create an Intent that includes the ```AnswerActivity``` class:

```java
//EightBallActivity.java

  Intent intent = new Intent(EightBallActivity.this, AnswerActivity.class);
```

Immediately after this we can call ```startActivity```, passing it our newly created intent:

```java
//EightBallActivity.java

    startActivity(intent);
```

So our ```onShakeButtonClick``` method should now look something like this:

```java
//EightBallActivity.java

    @Override
    public void onShakeButtonClick(View v) {
        ...
        Log.d(getClass().toString(), "The question asked was '" + question + "'");
        ...
        Intent intent = new Intent(EightBallActivity.this, AnswerActivity.class);
        startActivity(intent);
    }
```


Now try running the app? Try entering some text and clicking on the shake button - what do you see?

At the moment, when you click the button, you are taken to a new screen which shows the textView, but it does not contain the answer to our question, which we would like it to do.

So what do we have to do to pass information to an activity, and to get an activity to display that information?

##Passing Data Between Activities

Android allows us to pass a value as an ***extra*** on an ```Intent``` passed into ```startActivity```. The OS passes on the intent to the receiving activity, which can then access the extras and retrieve the data

An extra is structured as a key-value pair ([i]: like in a hash(??)). In our case, we want to pass the text for the 'answer' to our question.

To add an extra to an intent, we use ```Intent.putExtra(...)```. ```putExtra``` takes two arguments: the first is a string, for the key, and the second is the value to be passed. In our case, we want to pass the string value of our ```answer``` variable for the answer, so we will use "answer" for the key and our ```answer``` string variable for the value i.e:

```java
//EightBallActivity.java

    intent.putExtra("answer", answer);
```

This line needs to go after we call the constructor for the intent, but ***BEFORE*** the call to ```startActivity``` e.g.:

```java
//EightBallActivity.java

    Intent intent = new Intent(EightBallActivity.this, AnswerActivity.class);
    intent.putExtra("answer", answer); //<-- added line
    startActivity(intent);
```


So we have now passed the value from our EightBallActivity to our AnswerActivity, but how do we access this value and use it in our AnswerActivity activity?

[i]: could possibly ask the class if they have any ideas what the function could be called, given that to pass the value we called 'putExtra'.

First of all, we have to get the intent passed into the activity. We can do this by calling ```getIntent()``` on AnswerActivity. So we can save this to an ```Intent``` object i.e.:

```java
//AnswerActivity.java

    Intent intent = getIntent();
```

We then have to get the extras for the intent. We can get these by calling ```getExtras()``` on the intent object we have just created. ```getExtras()``` returns a ```Bundle``` object, so we can save this in an object i.e.:

```java
//AnswerActivity.java

    Bundle extras = intent.getExtras();
```

Finally, we can get the string for the key, by calling ```getString(<key>)``` on ```extras```. This will get the string value for the extra matching the key "name".

NOTE: we are calling getString() but the function called depends on the type being searched for e.g. boolean, int etc.

So to get the answer we would write:

```java
//AnswerActivity.java

    String answer = extras.getString("answer");
```

We can now set the text in the control, using the value in ```answer```;

```java
//AnswerActivity.java

    String answer = extras.getString("answer");
    mAnswerText.setText(answer);
```

Now run the app and see what happens.

##Implicit and Explicit Intents

In Android, we can use an ```Intent``` to ask the device to interact with other apps. For example, you can do the following using Intents:

* Interact with the user's saved contacts
* Open a specific URL in the user's web browser
* Allow the user to navigate to a address using Google Maps
* Launch a movie on Netflix

...And much, much more.

Let's look at an example.

```java
//MainActivity.java

    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse("http://www.codeclan.com"));
    startActivity(intent);
```

In this case, we're creating an intent that will launch a URL. When we call ```startActivity```, the user's web browser will be opened. If the user has more than one app capable of handling this type of intent, they will be presented with a choice of apps.

This type of intent - where we don't have a specific target in mind for the intent - is known as an ***implicit*** intent.

For contrast, ***explicit*** intents have a target specified - for example, in our EightballActivity code above.

``` Intent intent = new Intent(EightBallActivity.this, AnswerActivity.class); ```
