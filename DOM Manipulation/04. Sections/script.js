function create(words) {

   for(let line of words){
      let divToInsert=document.createElement('div');
      let paragraphToInsert=document.createElement('p');
      paragraphToInsert.textContent=line;
      divToInsert.addEventListener('click',onClick);
      paragraphToInsert.style.visibility='hidden';

      divToInsert.appendChild(paragraphToInsert);
      let content=document.getElementById('content');
      content.appendChild(divToInsert);   
   }
   function onClick(e){
     if(e.style.visibility=='visible'){
        e.style.visibility='hidden';
     }
     else{
        e.style.visibility='visible';
     }
   }
}