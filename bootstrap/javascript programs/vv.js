var sum=0;
var num=123;
while(num!=0)
{
    sum=num%10;
    console.log(sum);
   var res=res+String(sum);
    num=Math.floor(num/10)
}
console.log(res)
