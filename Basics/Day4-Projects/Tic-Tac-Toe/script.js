let boxes = document.querySelectorAll('.box');
let reset = document.getElementById('reset-btn');
let msgContainer = document.querySelector('.msg-container')
let message = document.querySelector('.message')
let newGame = document.querySelector('#new-game')
let main = document.querySelector('.main')
main.classList.remove('hide')


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
  };
};

newGame.addEventListener('click',()=>{
  enableBoxes()
  msgContainer.classList.add('hide');
});










//--------------------------------------------------------CHAT GPT CODE------------------------------------------------------------------


// const boxes = document.querySelectorAll(".box");
// const resetBtn = document.getElementById("reset-btn");
// const newGameBtn = document.getElementById("new-game");
// const msgContainer = document.querySelector(".msg-container");
// const message = document.querySelector(".message");
// const main = document.querySelector(".main");

// let currentPlayer = "O";
// let gameOver = false;

// const winningPatterns = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ];

// // 🔁 Reset / New Game
// const resetGame = () => {
//   currentPlayer = "O";
//   gameOver = false;
//   msgContainer.classList.add("hide");
//   main.classList.remove("hide");

//   boxes.forEach(box => {
//     box.textContent = "";
//     box.disabled = false;
//   });
// };

// // 🏆 Show winner
// const showWinner = (winner) => {
//   message.textContent = `Congratulations! Winner is ${winner}`;
//   msgContainer.classList.remove("hide");
//   main.classList.add("hide");
//   gameOver = true;
// };

// // 🔍 Check winner
// const checkWinner = () => {
//   for (let pattern of winningPatterns) {
//     const [a, b, c] = pattern;

//     if (
//       boxes[a].textContent &&
//       boxes[a].textContent === boxes[b].textContent &&
//       boxes[a].textContent === boxes[c].textContent
//     ) {
//       showWinner(boxes[a].textContent);
//       return;
//     }
//   }
// };

// // 🎮 Box click
// boxes.forEach(box => {
//   box.addEventListener("click", () => {
//     if (box.textContent || gameOver) return;

//     box.textContent = currentPlayer;
//     box.disabled = true;

//     checkWinner();
//     currentPlayer = currentPlayer === "O" ? "X" : "O";
//   });
// });

// // 🔘 Buttons
// resetBtn.addEventListener("click", resetGame);
// newGameBtn.addEventListener("click", resetGame);

