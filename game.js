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
        checkWin();
    }) 
})

reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerHTML="";
    })
    status.innerHTML="X's turn";
    turn="X";
    
    boxes.forEach((box)=>{
        box.disabled=false;
        box.style.backgroundColor="#003049";
    })
})

const winningPatterns =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]    
]
let checkWin = () => {
    for(let i=0;i<winningPatterns.length;i++){
        const [a,b,c] = winningPatterns[i];
        if(boxes[a].innerHTML === boxes[b].innerHTML && boxes[a].innerHTML === boxes[c].innerHTML && boxes[a].innerHTML !== ""){
            status.innerHTML = `${boxes[a].innerHTML} wins!`;
            boxes[a].style.backgroundColor="green";
            boxes[b].style.backgroundColor="green";
            boxes[c].style.backgroundColor="green";
            boxes.forEach((box)=>{
                box.disabled=true;
            })

        }
    }
}