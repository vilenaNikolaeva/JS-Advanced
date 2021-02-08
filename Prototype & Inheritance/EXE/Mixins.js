function solve() {
    function computerQualityMixin(classToExtend) {
        classToExtend.propertytype.getQuality = function () {
            return (this.processorSpeed + this.ram + this.hardDiskSpace) / 3;
        }
        classToExtend.propertytype.isFast= function () {
            if(this.processorSpeed> (this.ram /4)){
                return true;
            }
            return false;
        }
        classToExtend.propertytype.isRoomy= function(){
            if(this.hardDiskSpace> Math.floor(this.ram * this.processorSpeed)){
                return true;
            }
            return false;
        }
    }

    function styleMixin(classToExtend){
        classToExtend.propertytype.isFullSet= function () {
            if(this.manufacturer==this.keyboard.manufacturer &&
                this.manufacturer==this.monitor.manufacturer){
                    return true;
                }
            return false;
        }
        classToExtend.propertytype.isClass=function(){
            return this.battery.expectedLife>=3 &&
             (this.color=='Silver' || this.color=='Black') 
             && this.weight<3; 
        }
    }
    return{
        computerQualityMixin,
        styleMixin
    }
}