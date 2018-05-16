var app = function(){
  var url = 'https://api.spotify.com/v1/search?q=christmas&type=album';
  bindEvents();
  makeRequest("GET", url, requestComplete);
}

var bindEvents = function(){
  var searchQuery = document.getElementById('search-query');
  var albumsDiv = document.getElementById('albums');

  searchQuery.onkeyup = function(){
    albumsDiv.innerHTML = '';
    var url = 'https://api.spotify.com/v1/search?q=' + this.value + '&type=album';
    makeRequest("GET", url, requestComplete);
  }
}

var makeRequest = function(method, url, callback){
  var request = new XMLHttpRequest();
  request.open(method, url);
  request.onload = callback;
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var data = JSON.parse(jsonString);
  display(data);
}

var display = function(data){
  console.log(data);
  var albumsContainer = document.getElementById('albums');

  data.albums.items.forEach(function(album){
    var div = document.createElement('div');
    div.className = "album";
    div.innerHTML = "<a href='" + album.external_urls.spotify + "'>" + album.name + "</a>";
    albumsContainer.appendChild(div);
  })
}

window.onload = app;