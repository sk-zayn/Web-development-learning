let modeBtn = document.querySelector('button');
let body = document.querySelector('html')
let currentMode = 'light';

modeBtn.addEventListener('click',()=>{
  if(currentMode == 'light'){
    body.style.backgroundColor = 'grey';
    currentMode = 'dark';
  }else{
    body.style.backgroundColor = 'white';
    currentMode = 'light'
  }
})

