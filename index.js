const canvas = document.querySelector("canvas"),
ctx = canvas.getContext("2d"); // get context returns the drawing contest on the canvas

let isDrawing = false,
brushWidth = 5;



window.addEventListener("load", () => {

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDraw = () =>{
    isDrawing = true;
    ctx.beginPath();// creating a newpath to draw
    ctx.lineWidth = brushWidth;
}
const drawing = (e) => {
    if(!isDrawing) return; // 
    ctx.lineTo(e.offsetX, e.offsetY);// creating line according to the mouse movement
    ctx.stroke();// drawing line with colotr
}
canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => drawing = false);