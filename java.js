let boxes = document.querySelectorAll(".box");
let newgame = document.getElementById("newgame");
let win = document.getElementById("win");
let turnX = true;//for turn X
let turn = document.getElementById("turn");
let mesg = document.getElementById("winner");



//total winning possible patterns
let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const resetgame = ()=>{
turnX = true;
enableboxes();


}


boxes.forEach((box)=>{
    box.addEventListener ("click", ()=>{
console.log("box was clicked");


if (turnX){
    //player with mark X
    box.innerText = "X";
    turn.innerText = "O";
    turnX = false;
}
//player with mark O
else{
    box.innerText = "O";
    turn.innerText = "X";
    turnX = true;
}
box.disabled = true;


 
checkWinner();

    });
});
 //finish 
 const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
        turn.innerText= "";
    }
 }
 const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText= "";
        win.innerText="Who will win ?"
        turn.innerText="X";
    }
 }


const showinner = (winner)=>{
    // if(postion1);
win.innerText = `Congratulation! ${winner} is the Winner.`;
 disableboxes();
}


const checkWinner = () => {
 for (let pattern of winPatterns) {
   let postion1 =  boxes[pattern[0]].innerText;
   let postion2 = boxes[pattern[1]].innerText;
   let postion3 = boxes[pattern[2]].innerText;

     if(postion1 != ''&& postion2 != '' && postion3 != ''){
        if (postion1 === postion2 && postion2 == postion3){
            console.log("winner");
            showinner(postion1);
        }

     }
 }

}
newgame.addEventListener("click",resetgame);
