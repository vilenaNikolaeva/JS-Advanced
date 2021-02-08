function solution(input){
    let count=0;
    let outputArr=[];

    
   for (let index = 0; index < input.length; index++) {
       
    let currentCommand=input[index];
       switch (currentCommand) {
           case "add":
               outputArr.push(index+1);
               break;
       
           case "remove":
               outputArr.pop();
               break;
       }
   }

    console.log(outputArr.length >0 ? outputArr.join('\n') : 'Empty');
}

solution(['add', 
'add', 
'remove', 
'add', 
'add']
)