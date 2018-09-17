var stu=require("./helloworld.js");
s1=new stu.student(101,"kamal",75,98,78);
s2=new stu.student(102,"praksh",57,98,78);
s3=new stu.student(103,"raja",78,82,78);
s4=new stu.student(104,"siva",55,58,78);
var students=[s1,s2,s3,s4];
exports.students=students;