var students=[
    [100,'ajay','bca',140],
    [101,'vijay','bca',145],
    [102,'aju','mca',150],
    [103,'vinay','qa',160]
    
   
    
];
for(let stud of students){
    console.log(stud[1].toUpperCase());

}

// students doing bca
var count=0;
for(let stud of students){
    if(stud[2]=="bca"){
        count=count+1;

    }
}

// sum of total group by bca
var total=0;
for(let stud of students){
    if(stud[2]=="bca"){
        total=total+stud[3];
        
    }
    
}
console.log(total);
