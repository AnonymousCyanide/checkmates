var discovery ="Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver."
var tailor ="tailor lorem Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver."
var onboard =" onboard ipsum Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver."
var implement =" implement ipsum Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver."
var refine =" refine ipsum Through a quick 30 minute call, we go over a series of questions with your business to develop a thorough understanding of your operations and target market. Then we communicate with you to understand your goals involving digital marketing services and look to identify any additional value that we can deliver."

function display(kuchhbhi) {
    // alert(kuchhbhi)
   
    document.querySelector("#dis-elem").textContent=kuchhbhi;

}

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
