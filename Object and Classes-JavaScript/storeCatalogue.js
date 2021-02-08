function solve(input){
    let map=new Map();

    for(let line of input){
        let splited=line.split(" : ");
        let product=splited[0];
        let price=Number(splited[1]);

        map.set(product,price);
    }

    let initials=new Set();
    Array.from(map.keys()).forEach(k=>initials.add(k[0]));

    for(let char of Array.from(initials.keys()).sort()){
        console.log(char);

        for(let product of Array.from(map.keys()).sort()){
            if(product.startsWith(char)){
                console.log(` ${product}: ${map.get(product)}`);
            }
        }
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);