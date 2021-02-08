function toggle() {
    
   const buttonContent=document.getElementsByClassName('button')[0];
  
   if(buttonContent.textContent==='More'){
       document.getElementById('extra').style.display='block';
       buttonContent.textContent='Less';
   }
   else{
       document.getElementById('extra').style.display='none';
       buttonContent.textContent='More';
   }
}