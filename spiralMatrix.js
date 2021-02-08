function solve(input){
    
    let rows=input[0],cols=input[1];
    let sum=rows*cols;
    
    let matrix=[];

    let count=1;

    let startCol=0;
    let endCol=cols;

    let startRow=0;
    let endRow=rows;
    
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
    }
   
    while(startRow<=endRow || startCol<=endCol){
        
      

        for (let i = startCol; i <endRow; i++) {
            
            matrix[startRow][i]=count++;
        }
        if (sum==count-1){break;}
        for (let i = startRow+1; i <endRow; i++) {
        
            matrix[i][endCol-1]=count++;    
        }
        if (sum==count-1){break;}
        for (let i = endCol - 2; i >=startCol; i--) {
            
            matrix[endRow-1][i]= count++;
        }
        if (sum==count-1){break;}
        for (let i = endRow-2; i >startRow; i--) {
           
            matrix[i][startCol]=count++;
        }
        if (sum==count-1){break;}
        for (let i = startRow+1; i <=endCol-2; i++) {
            
            matrix[startRow+1][i]=count++;
        }
        if (sum==count-1){break;}
        for (let i = startRow+2; i <endCol-1; i++) {
           
            matrix[i][endCol-2]=count++;
        }
        if (sum==count-1){break;}
        for (let i = startRow+2; i > startCol; i--) {
            
            matrix[endRow-2][i]=count++;
        }
        if (sum==count-1){break;}
        for (let i = startRow+1; i <= endCol-3; i++) {
            
            matrix[endRow-3][i]=count++;
        }
        if (sum==count-1){break;}
    }
    for(let row of matrix){
        console.log(row.join(' '));
    }
    
}
function checkIdTheMatrixIsFull(sum,count){
    if(sum==count){
        return true
    }
}
solve([5, 5])
solve([3, 3])