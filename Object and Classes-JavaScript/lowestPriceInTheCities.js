function solve(input){
    let map=new Map();

    for(let line of input){
        let split=line.split(/\s*\|\s*/);
        let town=split[0];
        let product=split[1];
        let price=Number(split[2]);

        if(!map.has(product)){
            map.set(product,new Map())
        }
        map.get(product).set(town,price);
    }
    for(let [product,inMap] of map){

        let lowestPrice=Number.POSITIVE_INFINITY;
        let townWithLowestPrice="";
        
        for(let [town,price] of inMap){
            if (price<lowestPrice) {
                lowestPrice=price;
                townWithLowestPrice=town;
            }
        }
    console.log(`${product} -> ${lowestPrice} (${townWithLowestPrice})`)
    }
}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);