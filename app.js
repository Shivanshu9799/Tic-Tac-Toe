let boxes = document.querySelectorAll(".btn");
let reset =document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#message");
let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8], 
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6] ,   
];

boxes.forEach((btn) =>{
    btn.addEventListener("click", ()=>{
        if(turnO){
            btn.innerText = "O";
            turnO = false;
        }
        else{
            btn.innerText = "X";
            turnO = true;
        }
        btn.disabled = true;
checkWinner();
    })
});

const disableBTn  =  () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBTn  =  () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const resetGame = () => {
    turnO = true;
    enableBTn();
    msgContainer.classList.add("hide");
    msg.innerText = "First move is of O";
}

const ShowWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner} `;
    msgContainer.classList.remove("hide");
disableBTn();
}
const checkWinner = ()=>{
    for(let pattern of winPattern) {
            let p1 =boxes[pattern[0]].innerText;
            let p2 =boxes[pattern[1]].innerText;
            let p3 =boxes[pattern[2]].innerText;

        if(p1 != "" && p2 != "" && p3 !="" ){
            if(p1 === p2 && p2 === p3){console.log("winner", p1);
                ShowWinner(p1);
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame) ;