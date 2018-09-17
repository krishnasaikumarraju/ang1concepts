function Student(a,b,c,d,e,f,g,h){


    if(a==undefined)
        this.roll=0;
    else
        this.roll=a;

    if( b==undefined)
        this.name="";
    else
        this.name=b;

    console.log(this.name)
    if(  c==undefined)
        this.gender="M";
    else
        this.gender=c;

    if(  d==undefined)
        this.city="C";
    else
        this.city=d;

    if(  e==undefined)
        this.email="";
    else
        this.email=e;

    if(  f==undefined)
        this.mark1=0;
    else
        this.mark1=f;

    if(  g==undefined)
        this.mark2=0;
    else
        this.mark2=g;

    if(  h==undefined)
        this.mark3=0;
    else
        this.mark3=h;

    this.getTotal=function(){
        return this.mark1+this.mark2+this.mark3;
    }

    this.getAverage=function(){
        return this.getTotal()/3;
    }

    this.getGrade=function(){
        var avg=this.getAverage();
        if(avg>=90.0)
            return 'A+';
        else if(avg>=80.0)
            return 'A';
        else if(avg>=60.0)
            return 'B+'
        else if(avg>=40.0)
            return 'B';
        else
            return 'C';
    }


}