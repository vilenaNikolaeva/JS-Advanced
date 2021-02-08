function solution(input){
    
   let output= input.reduce((acc,curr) => {

        debugger;
        const lastElement=acc[acc.length-1];
      
        if (curr>=lastElement || lastElement===undefined) {
            acc.push(curr);
        }

        return acc;
    }, []);

    console.log(output);
}
solution(
    [1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24])