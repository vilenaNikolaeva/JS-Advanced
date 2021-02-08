function encodeAndDecodeMessages() {
    
    const $textAreas=document.querySelectorAll('textarea');
    $textAreas[0].nextElementSibling.addEventListener('click',encode);
    $textAreas[1].nextElementSibling.addEventListener('click',decode);

    function encode(e){
        const text=$textAreas[0].value.split('').map((c)=>{
            return String.fromCharCode((c.charCodeAt(0)+1));
        }).join("")
        $textAreas[0].value='';
        $textAreas[1].value=text;
    }

    function decode(e){
        const decodedText=$textAreas[1].value.split('').map((c)=>{
            return String.fromCharCode((c.charCodeAt(0)-1));
        }).join('');
        $textAreas[0].value=decodedText;
        $textAreas[1].value='';
    }
}