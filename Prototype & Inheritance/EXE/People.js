function solve(){

    class Employee{
        constructor(name,age){
            if(new.target===Employee){ 
                throw new Error ("Cannot instantiate directly.");
            }
            this.name=name,
            this.age=age,
            this.salary=0,
            this.tasks=[];
        }
         work(){
            let currentTack=this.tasks.shift();
            console.log(this.name+currentTack);
            this.tasks.push(currentTack);
        }
        collectSalary(){
            console.log(`${this.name} recieved ${this.getSalary()} this month`);
        }
        getSalary(){
            return this.salary;
        }
    }

    class Junior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks.push("is working on a simple task.");
        }
        
    }
    class Senior extends Employee{
        constructor(name,age){
            super(name,age);
            this.tasks.push(`is working on a cimplicated task.`);
            this.tasks.push(`is taking time off work.`);
            this.tasks.push(`is supervising junior workers.`);
        }
    }
    class Maneger extends Employee{
        constructor(name,age){
            super(name,age);
            this.divided=0;
            this.tasks.push("scheduled a meeting.");
            this.tasks.push("is preparing a quarterly report.");
        }
        getSalary(){
            return super.getSalary()+this.divided;
        }
    }

    return{
        Employee,
        Junior,
        Senior,
        Maneger
    };
}