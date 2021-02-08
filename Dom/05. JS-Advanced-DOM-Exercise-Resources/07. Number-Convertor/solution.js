function solve() {

   const selectedElement=document.querySelector('#selectMenuTo');
   const binaryOption=document.createElement('option');
   const hexadecimalOption=document.createElement('option');
   binaryOption.value='Binary';
   binaryOption.text='Binary';
   hexadecimalOption.value='Hexadecimal';
   hexadecimalOption.text='Hexadecimal';

   selectedElement.add(binaryOption);
   selectedElement.add(hexadecimalOption);

   document.querySelector('button').addEventListener('click',onClick);

   function onClick(){
       let decimalNum= Number(document.querySelector('#input').value);
       let selectedElement=document.querySelector('#selectMenuTo');
       let convertTo=selectedElement.options[selectedElement.selectedIndex].text;
       let result;
        switch (convertTo) {
            case 'Binary':
                result=decimalNum.toString(2);
                break;
            case 'Hexadecimal':
                result=decimalNum.toString(16).toUpperCase();
                break;
        }
        document.querySelector('#result').value=result;
   }
}