function solve(input){

    let objects=JSON.parse(input);
    let html='<table>\n';
        html+='  <tr>';
    Object.keys(objects[0]).forEach(k=>html +=`<th>${k}</th>`) ;
        html+='</tr>\n';


    for(let obj of objects){
        html+= '  <tr>';
        Object.keys(obj).forEach(k=>html += `<td>${htmlEscape(String(obj[k]))}</td>`);
            html+='</tr>\n';
    }
        html+='</table>';
    console.log(html);

    
function htmlEscape(input){
    let map={
        '"' : '&quot;',
         '&': '&amp;',
        "'" : '&#39;',
         '<': '&lt;', 
         '>': '&gt;' };
        
      return input.replace(/[\"&'<>]/g, ch=>map[ch]);
    }
}


solve(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'])
solve(['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]']);