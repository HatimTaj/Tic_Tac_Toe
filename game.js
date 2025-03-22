let boxes=document.querySelectorAll(".cell");
let turn=document.querySelector("#status");
let gameover=false; 
let winner=null;
let count=0;
turn="X" ;
function turnChange(){
    if(turn==="X"){
        boxes.forEach(box=>{
            box.addEventListener("click",box.innerHTML="X");
        }
        turn="O";
    }
    else{
        turn="X";
    }
}