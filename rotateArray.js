function solution(input) {

    let rotations = +input.slice(input.length - 1)[0];
    var arr= input.slice(0,input.length-1);

    for (let index = 0; index < rotations; index++) {
        arr.unshift(arr.pop());
    }
    console.log(arr);
}
solution(
    ['1',
        '2',
        '3',
        '4',
        '2']
)