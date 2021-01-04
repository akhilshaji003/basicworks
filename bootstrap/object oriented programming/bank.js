class Bank{
static bankname=()=>{
    console.log("south indian bank")
}

createAccount=(accno,name,minimum_balance)=>
{
    this.accno=accno;
    this.name=name;
    this.minimum_balance=minimum_balance;


}

deposit=(amount)=>{
    this.minimum_balance +=amount
    console.log("your account"+this.accno+"has been debited with the amount"+amount+"available balance="+this.minimum_balance)

}

withdrawal=(amount)=>{
    if(amount>this.minimum_balance){
        console.log("insufficient balance")
    }
    else{
        this.minimum_balance +=amount
        console.log("your account no"+this.accno+"has been debited with"+amount)
    }
}

 balenq=()=>
 {
     console.log("your available balance is"+this.minimum_balance)
 }

}

 var obj=new Bank()
obj.createAccount(101,"akhil",7900)
obj.deposit(500)
obj.balenq()
obj.withdrawal(700)
Bank.bankname()
