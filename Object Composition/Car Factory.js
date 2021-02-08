function solve(car) {

    let engines = {
        Small: {
            power: 90,
            volume: 1800
        },
        Normal: {
            power: 120,
            volume: 2400
        },
        Monster: {
            power: 200,
            volume: 3500
        }
    };

    let carriages = {
        Hatchback: {
            type: 'hatchback',
            color: '<as required>'
        },
        Coupe: {
            type: 'coupe',
            color: '<as required>'
        }
    };

    let wheels = car.wheels % 2 == 1 ? car.wheels : car.wheels - 1;

    return {
        model: car.model,
        engine: engines.filter(e => e.power >= car.power)[0],
        carriage: carriages.filter(c => c.type == car.carriage)[0],
        wheels: [wheels, wheels, wheels, wheels]
    };
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));