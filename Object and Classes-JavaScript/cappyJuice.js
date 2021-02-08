function solve(input) {

    let arr=[];
    let quantities=[];


    for (let line of input) {
        let splited = line.split(' => ');
         juice = splited[0];
         quantity = Number(splited[1]);

        if(!quantities.hasOwnProperty(juice)){
            quantities[juice]=0;
        }

        quantities[juice]+=quantity;

        if(quantities[juice]>=1000){
            arr[juice]=parseInt(quantities[juice]/1000);
        }
     }

     for(let [key,value] of Object.entries(arr)){
         if(value>0){
             console.log(`${key} => ${value}`);
         }
     }
}


solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'])