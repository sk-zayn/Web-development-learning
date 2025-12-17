let boxes = document.querySelectorAll('.box');
let reset = document.getElementById('reset-btn');
let msgContainer = document.querySelector('.msg-container')
let message = document.querySelector('.message')
let newGame = document.querySelector('#new-game')
let main = document.querySelector('.main')
main.classList.remove('hide')
let moveCount = 0;


let playerO = true;

const winningPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];
const disableBoxes = ()=>{
  for(let box of boxes){
    box.disabled = true
  };
};

const enableBoxes = ()=>{
  for(let box of boxes){
    main.classList.remove('hide')
    playerO = true
    box.disabled = false;
    box.textContent = ''
  };
  moveCount = 0;
  playerO = true;
  main.classList.remove('hide')
};
let displayWinner = (winner)=>{
  message.textContent = `Congratulation Winner is ${winner}`
  main.classList.add('hide')
  msgContainer.classList.remove('hide');
  disableBoxes()

};

boxes.forEach((box) => {
  box.addEventListener('click', ()=>{
    if(playerO === true){
      box.textContent = 'O';
      playerO = false;
    } else{
      box.textContent = 'X';
      playerO = true
    }
    moveCount++
    box.disabled = true

    checkWinner()
  });
});

  reset.addEventListener('click', ()=>{
    enableBoxes();
    msgContainer.classList.add('hide')
  });

const checkWinner= ()=>{
  for (let pattern of winningPatterns){
    let pos1 = boxes[pattern[0]].textContent;
    let pos2 = boxes[pattern[1]].textContent;
    let pos3 = boxes[pattern[2]].textContent;

    if(pos1 != '' && pos2 != '' && pos3 != ''){
      if (pos1 === pos2 && pos2 === pos3){
        displayWinner(pos1)
      };
    };

    if (moveCount === 9) {
    message.textContent = "It's a Draw!";
    main.classList.add('hide');
    msgContainer.classList.remove('hide');
  }
  };
};

newGame.addEventListener('click',()=>{
  enableBoxes()
  msgContainer.classList.add('hide');
});










// --------------------------------------------------------CHAT GPT CODE---------------------------------------------------------------//
