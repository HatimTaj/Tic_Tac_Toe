let boxes=document.querySelectorAll(".cell");
let turn=document.querySelector("#status");
turn = "X";
let i=0;
console.log(boxes)


let check=()=>{
for(let i=0;i<boxes.length;i++){
    if(cell[i].innerHTML==""){
        if(turn==="X"){
            boxes[i].innerHTML="X";
            turn="O";
            turn.innerHTML="O's turn";  
        } 
        if(turn==="O"){
            boxes[i].innerHTML="O";
            turn="X";
            turn.innerHTML="X's turn";  
        }      
    }
}
}
let click=boxes[].addEventListener('click',check);