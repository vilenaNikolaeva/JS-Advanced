class Person{
    constructor(firstName,lastName){
    this.firstName=firstName;
    this.lastName=lastName;

    Object.defineProperty(this,'fullName',{
        set(newFullName){
            const nameArr=newFullName.split(' ');
            if(nameArr.length>2){new Error("Incorrect name!")}
            const fn=nameArr[0];
            const ln=nameArr[1];
        },
        get(){
            return this.firstName+' '+this.lastName;
        }
    });
}
}