console.log('Loaded!');
//move the image
var img = document.getElementById('copy');
var marginLeft = 0;
function moveRight() {
  marginLeft = marginLeft + 1;
  imge.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
var interval = setInterval(moveRight,50);
};
