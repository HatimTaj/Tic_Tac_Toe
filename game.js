let boxes=document.querySelectorAll(".cell");
let status=document.querySelector("#status");
let reset=document.querySelector("#reset");
turn = "X";
let i=0;
console.log(boxes)

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
    
        if(box.innerHTML==""){
            if(turn==="X"){
                box.innerHTML="X";
                turn="O";
                status.innerHTML="O's turn";  
            } 
            else if(turn==="O"){
                box.innerHTML="O";
                turn="X";
                status.innerHTML="X's turn";  
            }  
            else{
                boxes.disabled=true;
            }    
        }
    }) 
})

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
    })
    status.innerHTML="X's turn";
    turn="X";
})