function solution(input){
    
    let arr=[[false, false, false],
    [false, false, false],
    [false, false, false]];

    let pleyerOne='X';
    let playerTwo='O';
    
   
    let count=0;

    for(let line of input){
        
       
        var lineToSplit=line.split('');
        let rowLine= +lineToSplit[0];
        let colLine= +lineToSplit[2];
      

        if (arr[rowLine][colLine] !== false) {
            console.log('This place is already taken.Please choose another!');
            continue;
            count--;
        }
        else {
            if (count % 2 === 0) {
                arr[rowLine][colLine]=pleyerOne;
            }
            else {
                arr[rowLine][colLine]=playerTwo;
            }
        }
        //Check if there is a winner.
       var check= CheckForWinner(arr);
        count++;
        if(check){
            printMatrix(arr);
            break;
        }
        else if(count==9){
            break;
        }
    } 
    console.log('The game ended!Nobody wins :( ')
    printMatrix(arr);
   
}

solution(
    ["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
)


function printMatrix(arr) {
   
    for (let row = 0; row < arr.length; row++) {
        console.log(arr[row].join('\t'));
    }
}

function CheckForWinner(arr){

    let haveAWinner=false;
    let playerOne='X';
    let playerTwo='O';

    for (let i = 0; i < 3; i++) {

        if(arr[i][0] ==playerOne &&
        arr[i][1] == playerOne &&
        arr[i][2] == playerOne){

        console.log('Player '+ playerOne+' wins!');
        haveAWinner=true;
        break;
        }
    else if(arr[0][i]==playerOne &&
            arr[1][i]==playerOne &&
            arr[2][i]==playerOne){
        
                console.log('Player '+ playerOne+' wins!')
                haveAWinner=true;
                break;
            }
    else if(arr[0][0]==playerOne &&
            arr[1][1]==playerOne&&
            arr[2][2]==playerOne){

                console.log('Player '+ playerOne+' wins!')
                haveAWinner=true;
                break;
                
            }
    else if(arr[i][0]==playerTwo &&
            arr[i][1]==playerTwo &&
            arr[i][2]==playerTwo){
    
                console.log('Player '+ playerTwo+' wins!')
                haveAWinner=true;
                break;
            }
    else if (arr[0][i]==playerTwo &&
            arr[1][i]==playerTwo &&
            arr[2][i]==playerTwo) {
            
                console.log('Player '+ playerTwo+' wins!')
                haveAWinner=true;
                break;
            }
    else if(arr[0][0]==playerTwo &&
            arr[1][1]==playerTwo&&
            arr[2][2]==playerTwo) {

                console.log('Player '+ playerTwo+' wins!')
                haveAWinner=true;
                break;
                
            }      
        }
        return haveAWinner;
    }
 
    
