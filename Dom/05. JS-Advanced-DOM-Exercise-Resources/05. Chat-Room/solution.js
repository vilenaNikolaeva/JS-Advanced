function solve() {
  
   document.getElementById('send').addEventListener('click',onClick);
   let message=document.getElementById('chat_messages');

   function onClick(){
      const input=document.getElementById('chat_input');
      const value=input.value;

      let newDiv=document.createElement('div');
      newDiv.className="message my-message";
      newDiv.innerText=value;
      message.appendChild(newDiv);
      input.value='';
   }
}


