function toggle() {
    const button=document.getElementsByClassName('button')[0];

    if(button.textContent==='More'){
        document.getElementById('extra').style.display='block';
        button.textContent='Less';
    }
    else{
        document.getElementById('extra').style.display='none';
        button.textContent='More';
    }
    
   
}