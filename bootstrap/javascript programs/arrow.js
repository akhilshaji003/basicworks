let add=(num1,num2)=>num1+num2;
console.log(add(10,20)); 


let factorial=(n)=>{
    let fact=1;
    for(let i=1;i<n;i++)
    {
        fact=fact*i;
    }
   
    console.log(fact);
}
factorial(6);