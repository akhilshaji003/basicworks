class Parent{
    m1=()=>{
        console.log("inside parent")

    }
}
class Child extends Parent{
    m2=()=>{
        console.log("inside child")

    }
}

class Subchild extends Child{
    m3=()=>{
        console.log("inside subchild")

    }
}
var sb=new Subchild();
sb.m3()
sb.m2()
sb.m1()

var ch=new Child();
ch.m2()
//ch.m3() error
ch.m1()
 var p=new Parent();
 p.m1()
    
 
