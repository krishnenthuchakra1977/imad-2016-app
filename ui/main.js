console.log('Loaded!');
//move the image
var img = document.getElementById('agent');
var marginleft = 0;
function moveRight() {
  marginLeft = marginLeft + 1;
  imge.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
var interval = setInterval(moveRight,50);
};
