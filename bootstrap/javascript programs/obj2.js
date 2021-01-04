var employee={
    eid:100,
    name:"john",
    desig:"developer",
    salary:25000
}
//print emp name
console.log(employee["name"]);
//check for gender key is there
console.log("gender" in employee);
//add gender :male value pair
employee["gender"]="male";
//add 5000 to salary
employee["salary"]+=5000;
//print  all key value pairs
for(let k in employee){
    console.log(k,employee[k]);
}