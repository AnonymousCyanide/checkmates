var flag = true;

document.querySelector ("#f-top #down-arrow").addEventListener ("click", function () {
  if (flag === true) {
    document.querySelector ("#f-btm").style.display = "initial";
    document.querySelector ("#down-arrow").style.transform = "rotate(180deg)";
    flag = false;
  }
  else {
    document.querySelector ("#down-arrow").style.transform = "rotate(360deg)";
    document.querySelector ("#f-btm").style.display = "none";
    flag = true;
  }
})

var overlay = document.querySelector ("#overlay");
var body = document.querySelector ("body");


var overlay = document.querySelector ("#overlay");
var body = document.querySelector ("body");

const abc = function (e) {
  var open = overlay.style.left = "0"
  if(open) {
    body.style.overflow = "hidden";
  }
  else {
    body.style.overflow = "auto";
  }
  }
  
  document.querySelector ("#overlay #close").addEventListener ("click", function () {
  var close = overlay.style.left = "-100%";
  if (close) {
    body.style.overflow = "initial";
  }
  })