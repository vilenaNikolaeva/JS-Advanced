function attachEventsListeners() {
    let buttons = document.querySelectorAll('div input:last-child');
    
    let timeObject={
        'days':1,
        'hours': 24,
        'minutes':1440,
        'seconds': 86400
    }


    for(let button of buttons){
        button.addEventListener('click',(e)=>{
            let input=e.target.parentNode.children[1];
            let text=input.value;
            let id=input.id;

            let newValues={};

            let converter={
                days:(value)=>{
                    newValues.days=value;
                    newValues.hours=value*24;
                    newValues.minutes=value*1440;
                    newValues.seconds=value*86400;
                    return newValues;
                },
                hours:(value)=>{
                    newValues.days=value/24;
                    newValues.hours=value;
                    newValues.minutes=value*60;
                    newValues=seconds=value*3600;
                    return newValues;
                },
                minutes:(value)=>{
                    newValues.days=value/1440;
                    newValues.hours=value/60;
                    newValues.minutes=value;
                    newValues.seconds=value*60;
                    return newValues;
                },
                seconds:(value)=>{
                    newValues.days=value/86400;
                    newValues.hours=value/3600;
                    newValues.minutes=value/60;
                    newValues.seconds=value;
                    return newValues;
                }
            };

            let convertedTime=converter[id][+text];
            
            for(const b of buttons){
                let input=b.parentNode.children[1];
                console.log(input);
                input.value=convertedTime[input.id];
            }
        });
        //NOT DONE!
    }
}