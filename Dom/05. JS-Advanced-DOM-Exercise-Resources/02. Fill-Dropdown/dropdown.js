function addItem() {
    const text=document.querySelector('#newItemText').value;
    const value=document.querySelector('#newItemValue').value;

    const option=document.createElement('option');
    option.value=value;
    option.textContent=text;
    document.querySelector('#menu').appendChild(option);
    
    document.querySelector('#newItemText').value='';
    document.querySelector('#newItemValue').value='';

}