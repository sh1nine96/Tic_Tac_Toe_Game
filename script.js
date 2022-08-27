console.log("welcome to the tic tac toe game")
let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameOver = new Audio("gameover.mp3")
let turn = "X"
let isGameOver = false;

// function to change to the turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X"
}

// function to the win
const checkWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2, 6, 6, 0],
        [3, 4, 5, 6, 18, 0],
        [6, 7, 8, 6, 30, 0],
        [0, 3, 6, -6, 18, 90],
        [2, 5, 8, 18, 18, 90],
        [2, 4, 6, 6, 18, 135],
        [0, 4, 8, 6, 18, 45],
        [1, 4, 7, 6, 18, 90],
    ]
    wins.forEach(item => {
        if ((boxtext[item[0]].innerText === boxtext[item[1]].innerText)
            && (boxtext[item[1]].innerText === boxtext[item[2]].innerText)
            && (boxtext[item[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxtext[item[0]].innerText + "  => won the game"
            isGameOver = true;
            document.querySelector(`.imageBox`).getElementsByTagName(`img`)[0].style.width = `150px`;
            document.querySelector(`.line`).style.transform = `translate(${item[3]}vw, ${item[4]}vw) rotate(${item[5]}deg)`
            document.querySelector(".line").style.width = "24vw";
            gameOver.play();

        }
    })
}

// Game logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
            }
        }
    })

})

// Adding onclick listener to reset button
resetButton.addEventListener(`click`, () => {
    let boxtexts = document.querySelectorAll(`.boxtext`);
    Array.from(boxtexts).forEach(e => {
        e.innerText = ``
    });
    turn = `X`
    isGameOver = false;
    document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
    document.querySelector(`.imageBox`).getElementsByTagName(`img`)[0].style.width = `0px`;
    document.querySelector(`.line`).style.width = `0px`;
})
