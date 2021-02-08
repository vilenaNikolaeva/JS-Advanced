function arr(input, ...sort) {
    const array = input;

    if (sort == 'asc') {
        console.log(input.sort((a, b) => a - b));
    }
    else if (sort == 'desc') {
        console.log(input.sort((a, b) => b - a));
    }
}
    arr([14, 7, 17, 6, 8], 'desc')
