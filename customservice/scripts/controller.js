app.controller("circlecontroller",["circleservice","apptitle",function(circleservice,apptitle){
    this.input=0;
    this.res1=0;
    this.res2=0;
    this.title=apptitle;
    this.showresult=function () {
        circleservice.setradius(this.input)
        this.res1=circleservice.getArea();
        this.res2=circleservice.getDiameter();
    }
}])
app.controller("Restcontroller",["Rectservice",function(Rectservice) {
    this.input1=0
    this.input2=0
    this.input3=0
    this.computeresult=function () {
        Rectservice.setwidth(this.input1);
        Rectservice.setheight(this.input2);
        this.result=Rectservice.setArea();
    }
}])