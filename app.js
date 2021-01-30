const canvas=document.getElementById("jsCanvas");
const ctx=canvas.getContext("2d");
const colors=document.getElementsByClassName("jsColor");
const range=document.getElementById("jsRange");

canvas.width=700;
canvas.height=700;

ctx.strokeStyle="#2c2c2c";
ctx.lineWidth=2.5;

let painting=false;

function stopPainting(){
    painting=false;
}

function startPainting(){
    painting=true;
}

function onMouseMove(event){
    const x=event.offsetX;
    const y=event.offsetY;
    if(!painting){  //painting이 false일 때, mousedown이 아닐때
        ctx.beginPath();    //path는 선
        ctx.moveTo(x,y);
    }else{  //클릭하고(클릭하면 painting=true가 됨) 움직이면
        ctx.lineTo(x,y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color=event.target.style.backgroundColor;
    ctx.strokeStyle=color;
}

function handleRangeChange(event){
    const size=event.target.value;
    ctx.lineWidth=size;
}

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColorClick)
);

if(range){
    range.addEventListener("input", handleRangeChange);
}