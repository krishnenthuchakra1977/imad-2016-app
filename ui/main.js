//counter code 
var button = document.getElementById('counter');
button.onclick = function()
{
  // create a request object
  var request = new XMLHttpRequest();
  
  // capture the responce and store it in a variable
  request.onreadystatechange = function()
  {
  if(request.readyState === XMLHttpRequest.DONE)
  {
    //Take some action
    if(request.status === 200)
    {
      var counter = request.responceText;
      var span = document.getElementById('count');
      span.innerHTML = counter.toString();
    }
  }
    // Not done yet
  };
  // make the request
  request.open('GET','http://krishnenthuchakra1977.imad.hasura-app.io/counter',true);
  request.send(null);
};
  // submit name
var submit = document.getElementById('submit_btn');
submit.onclick = function () {
  
  // create a request object
  var request = new XMLHttpRequest();
  
  //capture the responce and storte it in a variable
  request.onreadystatechange = function () {
    if (request.readystate === XMLHttpRequest.DONE) {
      // Take some action
      if (request.status === 200) {
        //capture a list of names and render it as a list
        var names = request.responceText;
        names = JSON.parse(names);
        var list = '';
        for (var i=0;i<names.length;i++) {
          list += '<li>' + names[i] + '</li>';
        }
        var ul = document.getElementById('namelist');
        ul.innerHTMl = list;
      }
    }
    //not done yet
 }
}; 
  //make the request
  var nameInput = document.getElementById('name');
  var name = nameInput.value;
  request.open('GET','http://krishnenthuchakra1977.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
  
};
     
