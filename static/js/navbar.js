var overlay = document.querySelector ("#overlay");
  var body = document.querySelector ("body");
  
  const abc = function (e) {
    var open = overlay.style.left = "0"
    if(open) {
      console.log("hey")
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
  
  