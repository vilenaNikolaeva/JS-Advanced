function solve(input){

    let arr={};

    for (let i = 0; i < input.length; i+=2) {
        
        if (!arr.hasOwnProperty(input[i])) {
            arr[input[i]]=0;
        }
        arr[input[i]]+=Number(input[i+1]);
    }
    console.log(JSON.stringify(arr));
}

solve(['Sofia','20','Varna','3','Sofia','5','Varna','4'])