let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#reset-button");
let newGameButton=document.querySelector("#new-btn");
let messageContainer=document.querySelector(".message-container");
let message=document.querySelector("#message");

let turnO=true; //playerX, playerO

const winPatterns=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];


const resetGame=()=>{        // written first but idea was at the last
    turnO=true;
    enableBoxes();
    messageContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            box.style.color = "pink";
            turnO = false;
        } else {
            box.innerText = "X";
            box.style.color = "crimson";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}



const showWinnerMessage=(winner)=>{
    if(winner==="X"){
        message.innerText=`Winner! is X`;
        messageContainer.classList.remove("hide");
        disableBoxes();
    }
    else{
    message.innerText=`Winner! is O`;
    messageContainer.classList.remove("hide");
    disableBoxes();
    }
}


const checkWinner=()=>{
    let winnerFound=false;
    for(pattern of winPatterns){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                console.log(`${pos1val} is the winner`);
                showWinnerMessage(pos1val);
                winnerFound=true;
                return;
         }
       }
       let allfilled=true;
       for(let box of boxes){
        if(box.innerText==""){
            allfilled=false;
            break;
        }
       }
       if(allfilled && !winnerFound){
        message.innerText=`It's a Draw!`;
        messageContainer.classList.remove("hide");
       }
    }
};



newGameButton.addEventListener("click",resetGame);
resetButton.addEventListener("click",resetGame);


// extra practice diff colors for X and O

