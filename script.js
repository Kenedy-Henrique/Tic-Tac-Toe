let currentPlayer = ``;

let gameBoard = [``, ``, ``, ``, ``, ``, ``, ``, ``];

let xCurrentPoints = 0;
let oCurrentPoints = 0;

let gameMechanics = (function(){

    let btn0 = document.querySelector(`.btn0`);
    let btn1 = document.querySelector(`.btn1`);
    let btn2 = document.querySelector(`.btn2`);
    let btn3 = document.querySelector(`.btn3`);
    let btn4 = document.querySelector(`.btn4`);
    let btn5 = document.querySelector(`.btn5`);
    let btn6 = document.querySelector(`.btn6`);
    let btn7 = document.querySelector(`.btn7`);
    let btn8 = document.querySelector(`.btn8`);

    let xPointsText = document.querySelector(`.xPoints`);
    let oPointsText = document.querySelector(`.oPoints`);

    let currentRound = 0;

    btn0.addEventListener(`click`, () => {
        if(gameBoard[0] === ``){
            btn0.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `0`)
        }
    });
    btn1.addEventListener(`click`, () => {
        if(gameBoard[1] === ``){
            btn1.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `1`)
        }
    });
    btn2.addEventListener(`click`, () => {
        if(gameBoard[2] === ``){
            btn2.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `2`)
        }
    });
    btn3.addEventListener(`click`, () => {
        if(gameBoard[3] === ``){
            btn3.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `3`)
        }
    });
    btn4.addEventListener(`click`, () => {
        if(gameBoard[4] === ``){
            btn4.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `4`)
        }
    });
    btn5.addEventListener(`click`, () => {
        if(gameBoard[5] === ``){
            btn5.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `5`)
        }
    });
    btn6.addEventListener(`click`, () => {
        if(gameBoard[6] === ``){
            btn6.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `6`)
        }
    });
    btn7.addEventListener(`click`, () => {
        if(gameBoard[7] === ``){
            btn7.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `7`)
        }
    });
    btn8.addEventListener(`click`, () => {
        if(gameBoard[8] === ``){
            btn8.innerHTML = currentPlayer;
            currentPlayerChoice(currentPlayer, `8`)
        }
    });

    currentPlayerChoice = function(currentPlayer, position){
        gameBoard[position] = currentPlayer;
        checkWinner(currentPlayer);
    }

    checkWinner = function(currentPlayer){
        currentRound++;
        let winnerCases = {
            firstScenario: gameBoard[0] + gameBoard[1] + gameBoard[2],
            secondScenario: gameBoard[3] + gameBoard[4] + gameBoard[5],
            thirdScenario: gameBoard[6] + gameBoard[7] + gameBoard[8],
            fourthScenario: gameBoard[0] + gameBoard[3] + gameBoard[6],
            fifthScenario: gameBoard[1] + gameBoard[4] + gameBoard[7],
            sixthScenario: gameBoard[2] + gameBoard[5] + gameBoard[8],
            seventhScenario: gameBoard[0] + gameBoard[4] + gameBoard[8],
            eighthScenario: gameBoard[2] + gameBoard[4] + gameBoard[6],
        };
        for(let key in winnerCases){
            if(winnerCases[key] === currentPlayer + currentPlayer + currentPlayer){
                if(currentPlayer === `X`){
                    xCurrentPoints++;
                    xPointsText.innerHTML = xCurrentPoints;
                } else if(currentPlayer === `O`){
                    oCurrentPoints++;
                    oPointsText.innerHTML = oCurrentPoints;
                }
                gameBoard = [``, ``, ``, ``, ``, ``, ``, ``, ``];
                btn0.innerHTML = ``;
                btn1.innerHTML = ``;
                btn2.innerHTML = ``;
                btn3.innerHTML = ``;
                btn4.innerHTML = ``;
                btn5.innerHTML = ``;
                btn6.innerHTML = ``;
                btn7.innerHTML = ``;
                btn8.innerHTML = ``;
                currentRound = 0;
            }
            if(currentRound === 9){
                gameBoard = [``, ``, ``, ``, ``, ``, ``, ``, ``];
                btn0.innerHTML = ``;
                btn1.innerHTML = ``;
                btn2.innerHTML = ``;
                btn3.innerHTML = ``;
                btn4.innerHTML = ``;
                btn5.innerHTML = ``;
                btn6.innerHTML = ``;
                btn7.innerHTML = ``;
                btn8.innerHTML = ``;
                currentRound = 0;
            }
        }
        changeCurrentPlayer();
    }

    changeCurrentPlayer = function(){
        if(currentPlayer === `X`) currentPlayer = `O`; else if(currentPlayer === `O`) currentPlayer = `X`
    }
    return {
        btn0, btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8,
        xCurrentPoints, xPointsText, oCurrentPoints, oPointsText,
        currentRound
    }
})();



let animationsAndBoardsMechanics = (function(){

    let xBtn = document.querySelector(`#X`);
    let oBtn = document.querySelector(`#O`);

    let resetButton = document.querySelector(`.reset`);

    let scoreBoard = document.querySelector(`.scoreBoard`);

    xBtn.addEventListener(`click`, () => {
        currentPlayer = `X`;
        scoreBoard.animate([
            { left: `-30%`},
            { left: `4%`}
          ], {
            duration: 800,
            fill: "forwards"
        })
    })
    oBtn.addEventListener(`click`, () => {
        currentPlayer = `O`;
        scoreBoard.animate([
            { left: `-30%`},
            { left: `4%`}
          ], {
            duration: 800,
            fill: "forwards"
        })
    })

    resetButton.addEventListener(`click`, () => {
        scoreBoard.animate([
            { left: `4%`},
            { left: `-30%`}
          ], {
            duration: 800,
            fill: "forwards"
        })
        currentPlayer = ``;
        gameBoard = [``, ``, ``, ``, ``, ``, ``, ``, ``];
        gameMechanics.btn0.innerHTML = ``;
        gameMechanics.btn1.innerHTML = ``;
        gameMechanics.btn2.innerHTML = ``;
        gameMechanics.btn3.innerHTML = ``;
        gameMechanics.btn4.innerHTML = ``;
        gameMechanics.btn5.innerHTML = ``;
        gameMechanics.btn6.innerHTML = ``;
        gameMechanics.btn7.innerHTML = ``;
        gameMechanics.btn8.innerHTML = ``;
        xCurrentPoints = 0;
        gameMechanics.xPointsText.innerHTML = `0`;
        oCurrentPoints = 0;
        gameMechanics.oPointsText.innerHTML = `0`;
        gameMechanics.currentRound = 0;
    })
})();