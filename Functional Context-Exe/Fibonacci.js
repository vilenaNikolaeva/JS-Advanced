function Fibonacci(){
    let previous=0;
    let current=1;

    return (()=>{
        let result=previous+current;
        previous=current;
        current=result;
        
        return current;
    })
}
let fib=Fibonacci();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
