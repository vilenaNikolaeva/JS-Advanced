function solve(input){
    let arr=new Map();
    
   for(let line of input){

    let split=line.split("<->");
    let town=split[0];
    let population=Number(split[1]);

    if(!arr.has(town)){
        arr.set(town,0);
    }
    arr.set(town,arr.get(town)+population);
   }

    for(let city of arr){
        console.log(`${city[0]}: ${city[1]}`);
    }
}
solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000'])