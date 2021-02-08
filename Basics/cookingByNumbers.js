function result([number,...elements]){
     number=Number(number);

    for(let elm of elements){

        switch(elm){
            case 'chop': number=number/2;break;
            case 'dice': number=Math.sqrt(number);break;
            case 'spice': number=number+1;break;
            case 'bake':number=number*3; break;
            case 'fillet':(number=number*0.80).toFixed(2); break;
        }
        console.log(number)
    }
}
result(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
result(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
