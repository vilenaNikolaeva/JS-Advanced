function solve() {
  const box=document.getElementById('box');
  const list=document.getElementById('dropdown-ul');

  window.addEventListener('click',onCLick);

  function onCLick(e){
      if(e.target.id==='dropdown'){
          list.style.display='block';
          return;
      }
      if(e.target.closest('#dropdown-ul')){
          const backgroundColor=e.target.innerText;
          box.style.backgroundColor=backgroundColor;
          box.style.color='black';
      }
      list.style.display='';
  }
}