class Parent{
    constructor(){
        console.log("inside parent class")

    }
}
class Child extends Parent{
    constructor(){
        super() // superkey used to call constructor of the parent class first
        console.log("inside child class")
    }
}
var ch=new Child()