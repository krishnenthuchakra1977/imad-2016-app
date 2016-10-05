console.log('Loaded!');
//move the image
var img = document.getElementById('copy');
var marginLeft = 0;
function moveRight() {
  marginLeft = marginLeft + 1;
  img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
var interval = setInterval(moveRight,50);
};
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
  
