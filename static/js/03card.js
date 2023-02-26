// alert("hello")
var con =document.querySelector("#content01");
var web =document.querySelector("#web03");
var ads =document.querySelector("#ads03");
var con01 =document.querySelector("#content001");
var con02 =document.querySelector("#content002");
var ads01 =document.querySelector("#ads002");
con01.style= "z-index:1;"//edited
con02.style= "z-index:3;"//monis
ads01.style= "z-index:2;"//default

con.addEventListener("click",function(dets) {
    con01.style= "z-index:1;";//edited
    con02.style= "z-index:3;";//monis
    ads01.style= "z-index:2;";//default
});

web.addEventListener("click",function(dets) {
    con01.style= "z-index:3;";//edited
    con02.style= "z-index:1;";//monis
    ads01.style= "z-index:2;";//default
});
ads.addEventListener("click",function(dets) {
    con01.style= "z-index:1;";//edited
    con02.style= "z-index:2;";//monis
    ads01.style= "z-index:3;";//default
});
