//method overloading
class Maths{
    add=()=>{
             console.log("no arg method")
    }
    add=(no1)=>{
        console.log("one arg method")
}
add=(no1,no2)=>{
    console.log("two arg method")
}
}
var math=new Maths()
math.add(10) // will execute only recently implemented method



//method overriding
class Parent{
phone=()=>{
    console.log("have nokia 5310")
}

}
class Child extends Parent{

phone=()=>{
    console.log("have iphone12")
}
}
var ch=new Child()
ch.phone()