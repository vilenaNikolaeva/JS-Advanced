
function Spy(target, method) {
    let original = target[method];

    let result = {
        count: 0
    }
    target[method] = function () {
        // let arg = arguments;
        // let self = this;
        result.count++;
        return original.apply(this, arguments);
    }
    return result;
}

let spy = Spy(console, 'log');
console.log(spy);