//1) Define the required variables used to track the state of the game.

//2) Store cached element references.

//3) Upon loading, the game state should be initialized, and a function should 
//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.

/*-------------------------------- Constants --------------------------------*/
const board = ["", "", "","","","","","",""];
const squareEls = document.querySelectorAll(".sqr");
const messageEls = document.querySelector("#message");
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
// console.log(board, squareEls, messageEls)
let turn = "X"
let winner = false;
let tie = false;

/*---------------------------- Variables (state) ----------------------------*/


/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
    console.log("It works")
    render()
}
init()



function render() {
    updateBoard();
    updateMessage();
};



function updateBoard() {
    for (let i = 0; i < board.length; i++) {
        console.log(squareEls[i]);
        squareEls[i].innerHTML = board[i];


    }
};



function updateMessage() {
    //if both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is
    if (winner == false && tie == false) {
        if (turn == "X") {
            messageEls.textContent = "Player X's Turn!";
        }
        else {
            messageEls.textContent = "Player O's Turn!";
        }
    }
    if (winner == true) {
        if (turn == "X") {
            messageEls.textContent = "Player O Wins!";
        }
        else {
            messageEls.textContent = "Player X Wins!";
        }
    }
    if (winner == false && tie == true) {
            messageEls.textContent = "We Have a Tie!";
    }

    //if player X turn 
    // and neither have a tie or win, player O takes turn
}


function handleClick(event) {
    const boxId = event.target.id;
    if (board[boxId] == "X" || board[boxId] == "O" || winner == true) {
        return
    }
    placePiece(boxId);
    console.log(board)
    checkForWinner()
}

function placePiece(index) {
    board[index] = turn;

}


function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        if (board[winningCombos[i][0]] == board[winningCombos[i][1]] && board[winningCombos[i][1]] == board[winningCombos[i][2]] && board[winningCombos[i][0]] !== '') {
            winner == true;
        }
      
    }
}

/*----------------------------- Event Listeners -----------------------------*/
for (let i = 0; i < squareEls.length; i++) {
    squareEls[i].addEventListener('click', handleClick);
}



