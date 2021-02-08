function orbitMatrix(input) {

    let rows = input[0], cols = input[1], x = input[2], y = input[3];
    
    let matrix = [];
    for (let row = 0; row < rows; row++) {
        matrix.push([]);
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

   
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}

// function printMatri(matrix){
//     for(let line of matrix){
//         console.log(line.join(" "));
//     }
// }

orbitMatrix([4, 4, 0, 0])
orbitMatrix([5, 5, 2, 2])
orbitMatrix([3, 3, 2, 2])

