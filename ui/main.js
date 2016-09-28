console.log('Loaded!');
//move the image
var img = document.getElementById('agent');
var marginleft = 0;
function moveRight() {
  marginleft = marginleft + 10;
  imge.style.marginleft = marginleft + 'px';
}
img.onclick = function(){
var interval = setInterval(moveRight,100);
};
