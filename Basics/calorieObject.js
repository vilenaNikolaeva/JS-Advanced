function caloriesResult(input) {

    var arr={};
    let name=null;
    let calorie=0;

    for (let i = 0; i < input.length; i+=2)
    {
        arr[input[i].toString()]=Number(input[i+1]);
    }
    console.log(arr);
}
caloriesResult(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
