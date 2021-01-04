function factorial(n){
    var fact=1;
    for(let i=1;i<n;i++)
    {
        fact=fact*i;
    }
   
    console.log(fact);
}
factorial(6);