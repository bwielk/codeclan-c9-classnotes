## Learning Objectives

1. Create your own class
2. Create multiple objects
3. Add some properties
4. Use accessors
5. Add some methods and behaviours
6. Get methods and behaviours to interact with properties

### Duration



# Classes Lab

In this lab, we'd like you to make some classes of your own. Below we've outlined a few scenarios to be modelled as Classes. Throughout each part stick to using our Test Driven Development process of writing our tests first then writing our methods and refactoring until they pass.

###Part A

For this part we want you to make a class that represents a Codeclan student. 

* Create a Class called Student that takes in a name (String) and a cohort (integer) when an new instance is created.
* Create a couple of Getter methods, one that returns the name property and one that returns the cohort property of the student.
* Create a method that gets the student to talk (eg. Returns "I can talk!).
* Create a method that takes in a students favourite programming language and returns it as part of a string (eg. student1.say_favourite_language("Ruby") -> "I love Ruby").
* Add in Setter methods to update the students name and what cohort they are in.

###Part B

Now we would like you to make a Class that represents Team.

* Make a class to represent a Team that has the properties Team name (String), Players (Array of strings) and a Coach (String).
* For each property in the class make a Getter method than can return them.
* Create a setter method to allow the coach's name to be updated.
* Create a method that adds a new player to the player's array.
* Add a method that takes in a string of a player's name and checks to see if they are in the players array.
* Add a points property into your class that starts at 0.
* Create a method that takes in whether the team has won or lost and updates the points property for a win.

###Part C 

Finally, we would like you to model out a Library as a Class.

* Create a Class for Library that has a hash with book names as a key and a value that is a hash. The value hash should have two inner keys a student name and date which both have values that are strings. (Should look something like `{"lord_of_the_rings" => {:student_name => "Jeff", :date => "01/12/16"}}` )
* Create a method that list all the books and their corresponding details. 
* Create a method that takes in a book name and returns the student name and date. 
* Create a method that take in a book name and adds it to our book list (Just add the book with the student name and date being left as empty strings)
* Create a method that takes rents out a book by taking in the name of the book, the student renting it and the date its due to be returned. 
