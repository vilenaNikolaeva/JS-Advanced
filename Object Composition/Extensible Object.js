function extensibleObj(){
    let obj={
        extend: function(template){
            for(let parentProp of Object.keys(template)){
                if(typeof(template[parentProp])=='function'){
                    Object.getPrototypeOf(obj)[parentProp]=template[parentProp];
                }
                else{
                    obj[parentProp]=template[parentProp];
                }
            }
        }
    }
    return obj;
}

const instance=extensibleObj();
instance.extend({
    extensionMethod: function () {/* do something */},
    extensionProperty: 'someString'
});

console.log(instance);