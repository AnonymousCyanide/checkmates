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