//var tags=document.getElementsByTagName("h1")
//for(tg of tags){
  //  tg.style.color="red"
//}

//var ds=document.getElementById("one")
//ds.style.color="blue"

//var don=getElementsByClassName("cls")
//for(tm of don){
//tm.style.color="cyan"
//}


var hd=document.querySelector("#one")
hd.style.color="cyan"
var lis=document.querySelectorAll(".cls")
lis.forEach(li=>li.style.color="green")
var tg=document.querySelectorAll("li")
tg.forEach(t=>t.style.color="yellow")
var dom=document.querySelector("#dom")
dom.innerHTML="<em>DocumentObjectMethods</em>"