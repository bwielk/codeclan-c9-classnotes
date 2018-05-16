var init = function(){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;

  populate(list, state);
}

var populate = function(list, state){
  state.forEach(function(item){
    addItem(list, item);
  });
}

var addItem = function(list, item){
  var newItem = document.createElement('li');
  newItem.innerText = item;
  list.appendChild(newItem);
}

var handleClick = function(){
  var newItem = document.querySelector('#new-item');
  var list = document.querySelector('#todo-list');
  addItem(list, newItem.value);
  save(newItem.value);
}

var save = function(item){
  var state = JSON.parse(localStorage.getItem('todoList')) || [];
  state.push(item);
  localStorage.setItem('todoList', JSON.stringify(state));
}

window.onload = init;
