function addItem() {
   let itemText=document.getElementById('newItemText').value;
   let itemValue=document.getElementById('newItemValue').value;

    let option=document.createElement('option');
    option.value=itemValue;
    option.textContent=itemText;
    document.querySelector('#menu').appendChild(option);

   itemText.textContent='';
   itemValue.textContent='';
}