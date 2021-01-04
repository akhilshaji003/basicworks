var arr=[1,2,3,4,6];
var low=0;
var upp=arr.length-1;
var element=6;

while(low<upp){
    let total=arr[low]+arr[upp];
    if(total>element){
        upp=upp-1;

    }
    else if(total<element){
        low=low+1;

    }
    else if(total==element){
        console.log("pairs are"+arr[low]+","+arr[upp]);
        break;
    }
}