function arr(arr, fn) {
    return arr.reduce(function (acc, curr) {
        return acc.concat(fn(curr));
    }, []);
}
// console.log(arr[1, 2, 3 , 4, 5],(x)=>x*2);
// console.log(arr(["a, b, c, d, e"], (x) => x.toLocaleUpperCase()));
