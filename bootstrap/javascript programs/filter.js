//filter function
//var arr=[10,11,9,8,5,2]
//find even numbers from the array

//var evens=arr.filter(num=>num%2==0)
//console.log(evens)











var names=["sachin","sehwag","dravid","laxman","yuvaraj","kaif"]
var name=names.map(na=>na.toUpperCase())
console.log(name)



var sname=names.filter(na=>na[0]=='s').map(na=>na.toUpperCase())

console.log(sname)






