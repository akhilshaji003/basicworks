var arr=[10,11,8,9,12,13,14,7,5]
//ternary operator ?
var res=arr.reduce((no1,no2)=>no1>no2?no1:no2)
console.log(res)

//to find min num
var min=arr.reduce((no1,no2)=>no1<no2?no1:no2)
console.log(min)

//print the team who played most no of matches
var data=isl.map(team=>team.mp).reduce((t1,t2)=>t1>t2?t1:t2)
console.log(data)