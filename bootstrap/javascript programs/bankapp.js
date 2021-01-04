var accountDetails={

    userone: {acno:1000,balance:1000,username:"userone",password:"testuser"}
    usertwo: {acno:1001,balance:12000,username:"usertwo",password:"testuser1"}
    userthree: {acno:1002,balance:13000,username:"userthree",password:"testuser2"}
    
    }
    var username="userone"
    var password="testuser"
    
    if(username in acountDetails){
        let pwd=accountDetails[username].password;
       if (password===pwd){
           console.log("succcessfull login")
       } 
       else{
           console.log("invalid password")
       }
       else{
           console.log("invalid username")
       }
    }