 class Person{


    setPerson=(name,age,gender)=>{
        this.name=name;
        this.age=age;
        this.gender=gender;

    }

    printPerson=()=>{
        console.log(this.name+this.age+this.gender)

    }
 }
 var obj=new Person()
 obj.setPerson("AJAY",25,"MALE")
 obj.printPerson()
console.log(obj.name)
obj.age=26
console.log(obj.age)


 //instance variables
 //constructor initializes instance variables
 //name of constructor in javascript=constructor
var obj=new Person("arun",24,"male") //constrctor callling
obj.printPerson()