function solve(input){
    let cars=new Map();

    for(let line of input){
        let splited=line.split(' | ');
        let carBrand=splited[0];
        let carModel=splited[1];
        let produceCar=Number(splited[2]);

        if(!cars.get(carBrand)){
            cars.set(carBrand,new Map());
        }
        if(! cars.get(carBrand).get(carModel)){
            cars.get(carBrand).set(carModel,0);
        }

        cars.get(carBrand).set(carModel,cars.get(carBrand).get(carModel)+produceCar);

    }

    for(let [brand,modelCount] of cars){
        console.log(brand);

        for(let [model,count] of modelCount){
            console.log(`###${model} -> ${count}`);
        }
    }

}

solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']);