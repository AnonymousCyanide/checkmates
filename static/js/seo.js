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
    // alert("hello")

    // faq
    var a =document.querySelectorAll(".acess")

a.forEach(function(val){
    // val.style="background-color:white;color:black;"
    val.addEventListener("click",function(dets){
       remeve()
       if(dets.target.innerText==val.innerText){
           val.style="background-color:#EAF3FF";
            
       }
       
   })
})
function remeve(){
    a.forEach(function(val){
        val.style="background-color:#F4F5F7"
            
    })
    // console.log("running")
}
    // faq

  
   