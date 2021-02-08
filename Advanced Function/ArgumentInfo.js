function arr(){
    const args={};

        for(let arg of arguments){
            const type=typeof arg;
            console.log(`${type}: ${arg}`);
            args[type]++;

            if(args[type]===undefined){
                args[type]=0;
            }
            args[type]++;
        }

}