const divGridElement = [...document.querySelectorAll("div")];
const divInnerText = divGridElement.map((x) => x.innerText);
const winnerText = document.querySelector(".winner");
const currentPlayer = document.querySelector(".current-player");

let playerSymbol = Math.floor(Math.random() * 2);
playerSymbol === 0 ? (playerSymbol = "✘") : (playerSymbol = "☮");
let computerSymbol;
playerSymbol === "✘" ? (computerSymbol = "☮") : (computerSymbol = "✘");

let arr = [];
let isWinner = false;
const checkWinningLine = () => {
  const winners = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
  ];

  if (isWinner === false) {
    winners.forEach((winner) => {
      winner.forEach(() => {
        const firstValue = arr[winner[0]];
        if (firstValue) {
          if (firstValue === arr[winner[1]] && firstValue === arr[winner[2]]) {
            winnerText.innerText = `${firstValue} wins!`;
            isWinner = true;
            divGridElement[winner[0]].style.background = "#90EE90";
            divGridElement[winner[1]].style.background = "#90EE90";
            divGridElement[winner[2]].style.background = "#90EE90";
          }
        }
      });
    });
  }
};

const makeDumbMove = () => {
  for (let i = 0; i < 1; i++) {
    if (!divGridElement[i].innerText) {
      const randomSquare = Math.floor(Math.random() * 9);
      divGridElement[randomSquare].innerText = computerSymbol;
    }
  }
};

function computerMove() {
  currentPlayer.innerText = "Computer Turn";
  setTimeout(() => {
    //makeSmartMove()
    makeDumbMove();
  }, 1000);
  checkWinningLine();
  playerMove();
}

function playerMove() {
  currentPlayer.innerText = "Your Turn";
  divGridElement.forEach((div, i) =>
    div.addEventListener("click", () => {
      if (!div.innerText) {
        div.innerText = currentTurn;
        arr[i] = div.innerText;
      }
    })
  );

  checkWinningLine();
  computerMove();
}

const startGame = () => {
  let playerScore = 0;
  let computerScore = 0;

  let goesFirst = Math.floor(Math.random() * 2);
  if (goesFirst === 0) {
    playerMove();
  } else {
    computerMove();
  }

  /*  let currentTurn = '✘';
  const changeTurn = () => {
    if (currentTurn === '✘') {
      currentTurn = '☮';
    } else {
      currentTurn = '✘';
    }
  }; */

  /*  divGridElement.forEach((div, i) =>
  div.addEventListener("click", () => {
    if (!div.innerText) {
        div.innerText = currentTurn;
        arr[i] = div.innerText;
        changeTurn();
        checkWinningLine();
        makeMove();
      }
    })
    ); */
  let arr = [];
  let isWinner = false;

  const checkWinningLine = () => {
    const winners = [
      [0, 1, 2],
      [0, 3, 6],
      [0, 4, 8],
      [1, 4, 7],
      [2, 5, 8],
      [3, 4, 5],
      [6, 7, 8],
      [2, 4, 6],
    ];

    if (isWinner === false) {
      winners.forEach((winner) => {
        winner.forEach(() => {
          const firstValue = arr[winner[0]];
          if (firstValue) {
            if (
              firstValue === arr[winner[1]] &&
              firstValue === arr[winner[2]]
            ) {
              winnerText.innerText = `${firstValue} wins!`;
              isWinner = true;
              divGridElement[winner[0]].style.background = "#90EE90";
              divGridElement[winner[1]].style.background = "#90EE90";
              divGridElement[winner[2]].style.background = "#90EE90";
            }
          }
        });
      });
    }
  };
};

startGame();

const reset = () => {
  location.reload();
  startGame();
};
