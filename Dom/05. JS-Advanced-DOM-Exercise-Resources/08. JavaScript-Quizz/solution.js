function solve() {
const correctAnsw=['onclick','JSON.stringify()','A programing API from HTML and XML document'];
const rightAnsw=0;
let index=0;

Array.from(document.querySelectorAll('.anwer-text'))
Map((x)=> x.addEventListener('click',function nextSection(e){

  if(correctAnsw.includes(e.target.textContent)){
    rightAnsw++;
  }
  let currSection=document.querySelectorAll('section')[index];
  currSection.style.display='none';

  if(document.querySelectorAll('section')[index+1] !==undefined){
    let nextSection=document.querySelectorAll('section')[index+1];
    nextSection.style.display='block';
    index++;
  }
  else{
    document.querySelector('#results').style.display='block';
    if(rightAnsw!==3){
      document.querySelector('#results h1').textContent=`You have ${rightAnsw} right anwers`;
    }
    else{
      document.querySelector('#results h1').textContent=`You are recognized as top JavaScript fan!`;
    }
  }
}));
}
