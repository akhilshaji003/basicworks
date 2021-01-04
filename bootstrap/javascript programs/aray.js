var arr=[10,11,12,13,14];

for(let data of arr){
console.log(data);
}                // iterating from the array



arr.push(15);
arr.pop();
arr.splice(1,3); //remove elements of particular position
  
console.log(arr[0]);