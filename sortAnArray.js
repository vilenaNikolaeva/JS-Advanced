function solution(input){

    let outputArr=input
    .sort()
    .sort((firstName,secondName)=>firstName.length-secondName.length)
    
    
    console.log(outputArr);
}

solution(
    ['Isacc', 
    'Theodor', 
    'Jack', 
    'Harrison', 
    'George']
)