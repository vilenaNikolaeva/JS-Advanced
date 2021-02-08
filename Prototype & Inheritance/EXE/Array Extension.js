function solve(arr) {
    // const newArr = [];
    arr.last = function () {
        return arr.pop();
    }

    arr.skip = function (n) {
        newArr = arr.map(e => e !== n);
        return newArr;
    }

    arr.take = function (n) {
        return arr.slice(0, n);
        
    }

    arr.sum = function () {
        return arr.sum();
    }

    arr.avarage = function () {
        const sum = arr.reduce((a, b) => a + b, 0);
        const avrg = (sum / arr.length);
        return avrg;
    }

    return{

    }
}
