var  a = document.querySelector('#servicess');
var  b = document.querySelector('#about');
var  bulb = document.querySelector('#srb');
var  abcd = document.querySelector('#abc');

var on = true;

a.addEventListener('click',function(){
    if(on){
      bulb.style.display="initial" 
      // bulb.style.backgroundColor="red"
      // bulb.style.border = "none"
      on = false;
      
    }
    else{

      bulb.style.display="none" 
      abcd.style.display="none" 
        // bulb.style.backgroundColor = "#fff";
        // bulb.style.border = "2px solid black"
        on = true;
    }
  
    // bulb.style.backgroundColor = "red";
});
b.addEventListener('click',function(){
    if(on){

      abcd.style.display="initial" 
      // bulb.style.backgroundColor="red"
      // bulb.style.border = "none"
      on = false;
      
    }
    else{
      abcd.style.display="none" 
      bulb.style.display="none" 
        // bulb.style.backgroundColor = "#fff";
        // bulb.style.border = "2px solid black"
        on = true;
    }
  
    // bulb.style.backgroundColor = "red";
});
  //  ....................