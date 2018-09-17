app.constant("pi",3.14);
app.value("apptitle","circle result");
app.service("circleservice",["pi",function(pi){
    /*      this.radius=0;*/
    this.setradius=function(r){
        this.radius=r
    }
    this.getArea=function(){
        return pi*this.radius*this.radius;
    }
    this.getDiameter=function(){
        return 2*this.radius
    }
}])
app.factory("Rectservice",[function(){
    var rectobject={};
    rectobject.width=0;
    rectobject.height=0;
    rectobject.setwidth=function (w) {
        this.width=w
    }
    rectobject.setheight=function (h) {
        this.height=h
    }
    rectobject.setArea=function () {
        return this.width*this.height;
    }
    return rectobject;
}])