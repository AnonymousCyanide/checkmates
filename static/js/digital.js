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

  //   var overlays = document.querySelector ("#hello");
  // var body = document.querySelector (".discovery-elems");

  // overlays.addEventListener('click',function(){
  //   document.querySelector(".discovery-elems").style.display='none'
  // })
  //   var overlays1 = document.querySelector ("#hello2");
  // var body = document.querySelector (".discovery-elems");

  // overlays1.addEventListener('click',function(){
  //   document.querySelector(".discovery-elems2").style.display='none'
  // })
   
    // alert("hello")

    function showDiv() {
      document.querySelecto('.all-discvery2 .discovery-elems').style.display = "none";
      document.querySelector('#hello .discovery-elems').style.display = "none";
      document.querySelector('#hello2 .discovery-elems2 ').style.display = "none";
      document.querySelector('#hello3 .discovery-elems3').style.display = "none";
      document.querySelector('#hello4 .discovery-elems4').style.display = "none";
      document.querySelector('#hello5 .discovery-elems5').style.display = "none";
   }
   
   function showDiv() {
      document.querySelecto('.').style.display = "none";
       document.querySelector('').style.display = "block";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
    }
    function showDiv1() {
      document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "block";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
    }
    function showDiv2() {
      document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "block";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
    }
    function showDiv3() {
      document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "block";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
       document.querySelector('').style.display = "none";
    }
  
  //  faq
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
  //  faq