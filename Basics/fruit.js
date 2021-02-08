function solve(fruit,weightInGrams,price){
    const weightInKg=weightInGrams/1000;
    const total=(weightInKg*price);

    console.log('I need $ '+ total.toFixed(2)+' to buy '+ weightInKg.toFixed(2)+' kilograms '+fruit+'.');
}

solve('Orange',2500,1.80);
solve('apple', 1563, 2.35);