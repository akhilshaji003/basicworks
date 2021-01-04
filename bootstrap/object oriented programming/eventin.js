var clk=document.querySelector("#clk")
clk.addEventListener("click",()=>{
    clk.textContent="clicked";
    clk.style.color="red";
})
//two arguements: which event/function

var dbc=document.querySelector("#dob")
dbc.addEventListener("dblclick",()=>{
    dbc.textContent="doubleclicked"
    dbc.style.color="green"
})

var hov=document.querySelector("#ove")
hov.addEventListener("mouseover",()=>{
    hov.style.color="cyan"
    hov.textContent="mouse over me"
})
hov.addEventListener("mouseout",()=>{
    hov.textContent="mouse not over me"
    hov.style.color="blue"
})