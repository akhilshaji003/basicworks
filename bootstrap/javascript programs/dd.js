var num1=40;
var num2=50;
var num3=60;
if (num1>=num2 && num1>=num3) 
{
    if (num2>num3)
    {
        console.log("num2 is sec large number");
    }
    else{
        console.log("num3 is sec largest");
    }
}
else if (num3>num2 && num3>num1)
{
    if (num2>num1) {
console.log("num2 is sec large");
    }
    else
    {
        console.log("num1 is second largest");
    }
}