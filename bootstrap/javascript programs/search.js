var arr=[1,2,3,4,5,6,7];
var element=2;
var flage=0;
for (let num of arr){
    if(element==num){
    flag=1;
    break;
    }

}
if(flag=0){
    console.log("element not fund");
}
else {
    console.log("element found");
}