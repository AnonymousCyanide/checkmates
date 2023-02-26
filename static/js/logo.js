var  g =document.querySelector('.lk')
var h =document.querySelector('#formation')

var on =true;
g.addEventListener('click',function(){
    if(on){
        document.querySelector("#formation").style.display="initial"
        on=false
        
    }
    else{
        document.querySelector("#formation").style.display="none"
        on=true
    }
})

// var  logo =document.querySelector('#logos')
// var h =document.querySelector('#logoformation')

// logo.addEventListener("click",function(){
//   document.querySelector("#logoformation").style.display='initial'
  
// })

// var  lk =document.querySelector('.lk')
// var div =document.querySelector('#formation')

// lk.addEventListener("click",function(){
//   document.querySelector("#formation").style.display="none"
// })
// div.addEventListener("click",function(){
//     document.querySelector("#formation").style.display="initial"
//   })