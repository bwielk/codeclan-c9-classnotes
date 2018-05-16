# Local Storage

## Learning Objectives
- Undertstand how to add an item to local storage
- Understand how to retrieve an item from local storage

## Duration
40 mins

# Intro

So far, we've been losing our state after ever page load. When we update text, click buttons etc anything we do is gone. Wouldn't it be nice if we could save some state easily in the browser?

> Give out starter code

## Saving to local storage

Local storage is just a bit of memory we can access in the browser that we can use to store state. It acts just like a hash, with key value pairs.

If we run our little example app, we have a wee text box that we can type a favourite food in, and a button that updated the text to show it when we click it. However, this is all lost when we refresh the page. 

We're going to use local storage to persist our favourite food between requests. First, we need to store the data about the favourite food.

```js
//index.js

var handleButtonClick = function() {
  var input = document.querySelector('input');
  setSpanText(input.value);
  localStorage.setItem("selection", input.value); //UPDATED
  input.value = "";
};
```

Next we want to set this on page load.

```js
//index.js

var app = function() {
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var saved = localStorage.getItem("selection"); //UPDATED
  setSpanText(saved);
};
```

Whee! It saves our selection, super cool.

## Dev Tools

If we click on the Application tab -> local storage we can see our stored data! Neat right?

##Storing/Retrieving more complex data

So far, we've only saved/retrieved simple strings to/from the local storage. But what if we wanted to save more complex data, for example an object, or an array? 

###Saving an array

Let's say that every time we click the button on our page, rather than just saving our favourite food, it adds it to an array and it is that array we want to store. 

First of all let's add an empty array to our JS to store our favourite foods

```js
//index.js

var faveFoods = [];    //ADDED

var app = function() {
  ...
}
```

When we click the button, we can add the text entered as a new value in the array:

```js
//index.js 

var handleButtonClick = function() {
  var input = document.querySelector('input');
  setSpanText(input.value);
  localStorage.setItem("selection", input.value); 
  faveFoods.push(input.value);  //ADDED
  input.value = "";
};
```

We now want to store the ___array___ in local storage, __NOT__ the single string entered. Before we were just saving strings, but now we are saving something more complex. For this we need to convert the array into a string format so that it can be stored like our string. Luckily there is a helper method we can use, ```JSON.stringify```. We convert the array into a string then save the converted array in local storage.


```js
//index.js 

var handleButtonClick = function() {
  var input = document.querySelector('input');
  setSpanText(input.value);
  localStorage.setItem("selection", input.value); 
  
  faveFoods.push(input.value);  
  var data = JSON.stringify(faveFoods);  //ADDED
  localStorage.setItem("faveFoods", data); //ADDED
  input.value = "";
};
```

> show this working by looking at Application tab -> local storage

###Getting the array back

Now that we've successfully saved the array to local storage we need to be able to get it back. 

We could do the following:

```js

var savedFoods = localStorage.getItem("faveFoods")
```

But this would simply give us a string 

```js
//js console

localStorage.getItem("faveFoods")
"["bread","cakes","chips"]"
```

We want to get an array back, but what if, for some reason, we get nothing back from local storage. We can force the call to getItem to create an empty array if it gets nothing back by doing the following:

```js
//index.js

var app = function() {
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var saved = localStorage.getItem("selection"); 
  setSpanText(saved);

  var savedFoods = localStorage.getItem("faveFoods") || []; //ADDED
};

```

So now we have savedFoods as a string, but we want to convert it back to an array. Luckily, there is another helper function we can use ```JSON.parse(string)```. We can call this function, passing in the string we get back from local storage. This will give us our array of strings:

```js
//index.js

var app = function() {
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var saved = localStorage.getItem("selection"); 
  setSpanText(saved);

  var savedFoods = localStorage.getItem("faveFoods") || []; 
  faveFoods = JSON.parse(savedFoods); //ADDED
};

```

We can now treat our data as we would with any other array. 
For example, we could create a single string containing all our favourite foods so that we can display it on the page:

```js
//index.js

var allFavFoods = "";  //ADDED

var app = function() {
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var saved = localStorage.getItem("selection"); //UPDATED
  setSpanText(saved);

  var savedFoods = localStorage.getItem("faveFoods") || [];
  
  faveFoods = JSON.parse(savedFoods);
                                  
  faveFoods.forEach(function(item) { //ADDED
       allFavFoods += (" " + item);  //ADDED
  });                                //ADDED
  console.log(allFavFoods);          //ADDED
};
```

####TASK

Add another span to display the string containing all the favourite foods saved. 
(NOTE - at the moment the span is only updated when the page is reloaded, you'll need to add code so that it is also updated on the button click)

###Saving Objects

> this next part is for info only. Can show the following in the console. Students don't need to code along.

We can use JSON.stringify() and JSON.parse() for other complex types, including objects. For instance if we had the following JS object:

```js

var harry = {
name: "Harry",
  age: 20,
  friends : ["Ron", "Hermione"]
};
```

Then 
```js

var dataToSave = JSON.stringify(harry);
```

would give us:

```js

"{"name":"Harry","age":20,"friends":["Ron","Hermione"]}";
```

We could then store this string in localStorage. 

```js

localStorage.setItem("harry", dataToSave);
```

To get this string back we would then use localStorage.getItem like before:

```js

var retrievedData = localStorage.getItem("harry");
```

This would give us the string we saved:
```js

"{"name":"Harry","age":20,"friends":["Ron","Hermione"]}";
```

To get our object back we would then call JSON.parse:

```js

var wizard = JSON.parse(retrievedData);
```

This would give us a regular JavaScript object which we can access as normal e.g.

```js

var friends = wizard.friends;
```