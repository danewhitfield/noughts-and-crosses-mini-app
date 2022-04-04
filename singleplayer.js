const divGridElement = [...document.querySelectorAll("div")];
const divInnerText = divGridElement.map((x) => x.innerText);
const winnerText = document.querySelector(".winner");
const currentPlayer = document.querySelector(".current-player");

// RANDOMLY CHOOSE SYMBOLS
let symbols = ["☮", "✘"];
let playersSymbol;
let computersSymbol;
playersSymbol = symbols[Math.floor(Math.random() * 2)];
playersSymbol === "☮"
  ? (computersSymbol = symbols[1])
  : (computersSymbol = symbols[0]);
//

// START GAME FUNC
const startGame = () => {
  let currentTurn = "✘";
  const changeTurn = () => {
    if (currentTurn === "✘") {
      currentTurn = "☮";
    } else {
      currentTurn = "✘";
    }
  };

  // RANDOMLY CHOOSE WHO PLAYS FIRST
  const firstTurn = Math.floor(Math.random() * 2);
  if (firstTurn === 0) {
    currentPlayer.innerText = "Your Turn";
    function playersMove() {
      divGridElement.forEach((div, i) =>
        div.addEventListener("click", () => {
          if (!div.innerText) {
            div.innerText = currentTurn;
            arr[i] = div.innerText;
            changeTurn();
            checkWinningLine();
            computersMove();
          }
        })
      );
    }
  } else {
    currentPlayer.innerText = "Computer's Turn";
    function computersMove() {
      for (let i = 0; i < 1; i++) {
        console.log("divGridElement:", divGridElement);
        divGridElement[i].addEventListener("click", () => {
          if (!divGridElement[i].innerText) {
            div.innerText = currentTurn;
            arr[i] = div.innerText;
            changeTurn();
            checkWinningLine();
            playersMove();
          }
        });
      }
    }
  }
  //

  let isWinner = false;
  let arr = [];

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

  // divGridElement.forEach((div, i) =>
  //   div.addEventListener("click", () => {
  //     if (!div.innerText) {
  //       div.innerText = currentTurn;
  //       arr[i] = div.innerText;
  //       changeTurn();
  //       checkWinningLine();
  //     }
  //   })
  // );
};
startGame();

const reset = () => {
  location.reload();
  startGame();
};
