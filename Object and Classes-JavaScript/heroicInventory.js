function solve(input){

    let result=[];

    for (let line of input) {
        
        let splited=line.split(/\s*\/\s*/);
        let name=splited[0];
        let level=Number(splited[1]);
        let items=[];

        if(splited.length>2){
            items=splited[2].split(',');
        }
        
        let hero = {name: name,level: level, items: items};

        result.push(hero);
    }
    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);