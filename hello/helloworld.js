function student(r,name,m1,m2,m3){
    this.roll=r;
    this.name=name;
    this.mark1=m1;
    this.mark2=m2;
    this.mark3=m3;
    var gettot=function(){
        return this.mark1+this.mark2+this.mark3;
    }
}
exports.student=student;