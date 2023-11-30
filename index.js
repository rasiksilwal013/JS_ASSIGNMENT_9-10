// index.js
const canvas = document.getElementById("main"),
      ctx = canvas.getContext("2d");

let isDrawing = false,
    brushWidth = 5,
    currentColor = 'black';

window.addEventListener("load", () => {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
});

const startDraw = () => {
    isDrawing = true;
    ctx.beginPath();
    ctx.lineWidth = brushWidth;
    ctx.strokeStyle = currentColor;
};

const drawing = (e) => {
    if (!isDrawing) return;
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
};

canvas.addEventListener("mousedown", startDraw);
canvas.addEventListener("mousemove", drawing);
canvas.addEventListener("mouseup", () => isDrawing = false);

const changeColor = (color) => {
    currentColor = color;
};

const changeBrushSize = () => {
    brushWidth = document.getElementById("slider").value;
    document.getElementById("brushSize").innerText = brushWidth;
};
