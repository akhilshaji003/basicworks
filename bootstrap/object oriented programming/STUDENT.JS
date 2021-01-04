class Student{

constructor(rol,name,course,total){
    this.rol=rol;
    this.name=name;
    this.course=course;
    this.total=total;
}
printStudent=()=>{
    console.log("name="+this.name)
    console.log("rol="+this.rol)
    console.log("course="+this.course)

}
}

 var obj=new Student(100,"akhil","mca",145)
 obj.printStudent()

 var obj1=new Student(101,"akshay","bca",135)

 var obj2=new Student(102,"binish","bca",147)

 var obj3=new Student(103,"cinto","mca",130)

 var obj4=new Student(104,"dinil","bca",140)


 var students=[]
     students.push(obj)
     students.push(obj1)
     students.push(obj2)
     students.push(obj3)
     students.push(obj4)
 

//print all student names
students.forEach(obj=>console.log(obj.name))
 //print details where course=mca
 students.filter(obj=>obj.course="mca").forEach(obj=>console.log(obj.name))

 //print highest student total
 var total=students.map(obj=>obj.total).reduce((total1,total2)=>total1>total2?total1:total2)
 console.log(total)
    
 //sort students according to their total
 var sorted=students.sort((t1,t2)=>t1.total>t2.total?-1:1)
console.log(sorted)