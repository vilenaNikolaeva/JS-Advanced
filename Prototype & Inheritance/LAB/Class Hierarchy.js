function solve(){

    class Figure{
        constructor(param='cm'){
            this.param=param;
        }
        changeUnits(newParam){
            this.param=newParam;
        }
        transformMetric(valInCm){
            return this.param==='m' ?
            valInCm/100 : this.param === 'mm' ?
            valInCm* 10 :valInCm ;
        }
    }

    class Circle extends Figure{
        constructor(param,radius){
            super(param);
            this.radius=radius;
        }
        get area(){
            const area=this.transformMetric(this.radius);
            return area;
        }
        toString(){
            return `Figure units: ${super.param} Area: ${this.area} - radius: ${this.radius}`;
        }
    }

    class Rectangle extends Figure{
        constructor(param,width,height){
            super(param);
            this.width=width;
            this.height=height;
        }
        get area(){
            const wid=this.transformMetric(this.width);
            const hei=this.transformMetric(this.height);
             return area;
        }
        toString(){
            return `Figures units: ${super.param} Area: ${this.area} - width: ${this.width}, height: ${this.height}`;
        }
    }

    return{
        Figure,
        Circle,
        Rectangle
    }


}
solve()