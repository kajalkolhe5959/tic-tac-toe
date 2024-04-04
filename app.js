

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetBtn");
let newBtn = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");



let turnO = true;
let count = 0;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const disableBoxes = () => {
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }
}
let isWinner = true;
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        checkWinner();

        if (count === 9 && isWinner) {
            gameDraw();
        }
    });
});

let checkWinner = () => {
    for (const pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                isWinner = false;
            }
        }

    }
}


const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const gameDraw = (winner) => {
    msg.innerText = `Draw , game`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


resetBtn?.addEventListener("click", resetGame);
newBtn?.addEventListener("click", resetGame);

