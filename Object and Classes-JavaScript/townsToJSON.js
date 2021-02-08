function solve(input){

    let townsArr=[];
    
    for(let town of input.slice(1)){
        let line=town.split(/\s*\|\s*/);
        let townObj={Town: line[1],
            Latitude:JSON.parse(Number(line[2]).toFixed(2)),
            Longitude:JSON.parse(Number(line[3]).toFixed(2))};
        townsArr.push(townObj);
    }

    console.log(JSON.stringify(townsArr));
}

solve(['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |'])
