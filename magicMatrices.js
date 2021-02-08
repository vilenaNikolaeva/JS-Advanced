function solution(input){

  let isMagicMatrix=true;
  let firstRowSum=input[0].reduce((a,b)=>a+b,0);

    for (let row = 0; row < input.length; row++) {

        var rowSum=input[row].reduce((a,b)=>a+b,0);

        if (rowSum!==firstRowSum) {
            isMagicMatrix=false;
            break;
        }

        let colSum=0;
        for (let col = 0; col < input[row].length; col++) {
            
           colSum+=input[row][col];
        }
        
        if (colSum!==firstRowSum) {
            isMagicMatrix=false;
            break;
        }
    }
    
    console.log(isMagicMatrix);
}
solution(
    [[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
)