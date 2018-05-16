#Lab/Homework - Practice

Your task is to revise what we've done today by creating Java classes and testing them in Android Studio. What we'd like you to do is use TDD to implement a couple of classes to maintain a list of the top 10 movies of all time. You will need to create two classes (and tests), one for a movie, the other for maintaining the rankings.

A Movie will have the following attributes:

* Title
* Genre
* Current Ranking

You should be able to perform the following methods on a movie:

* Get/Set Title
* Get/Set Genre
* Get/Set Ranking
* Override the default toString() method so that it returns a string containing the Movie's details e.g. "Title: 'Lord of the Rings', Genre: 'Adventure', Ranking: 1"

The rankings will contain an array of Movie objects. Each Movie's position in the array will correspond to their current ranking e.g. the movie with ranking 2 will be at index 1 in the array

You should be able to perform the following methods on the rankings list:

* Get the movie with a specified ranking
* Replace the movie at the end of the list with a new one 

###REMEMBER - Write Tests!!

##Extensions

If you want to, and have time, you can implement the following methods:

* Find a specific movie in the list by title
* Move a title up/down one place in the rankings
  * NOTE - doing this will also need to update the movie's ranking

