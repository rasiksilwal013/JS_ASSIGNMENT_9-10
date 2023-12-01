document.addEventListener("DOMContentLoaded", function () {
    // Canvas and context
    var canvas = document.getElementById("main");
    var ctx = canvas.getContext("2d");

    // Drawing variables
    var painting = false;
    var brushColor = "#000000"; // Initial color is black
    var brushSize = 5;

    // Event listeners
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseout", endPosition);

    // Button listeners
    document.getElementById("new").addEventListener("click", function () {
        clearCanvas();
    });

    document.getElementById("erase").addEventListener("click", function () {
        brushColor = "white";
        setCursor("url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"12\" viewBox=\"0 0 12 12\"><circle cx=\"5\" cy=\"5\" r=\"4\" fill=\"white\" border=\"black\"/></svg>') 5 5, auto");
    });

    document.getElementById("black").addEventListener("click", function () {
        brushColor = "#000000";
        setCursor("auto");
    });

    document.getElementById("pink").addEventListener("click", function () {
        brushColor = "#F50057";
        setCursor("auto");
    });

    document.getElementById("blue").addEventListener("click", function () {
        brushColor = "#2979FF";
        setCursor("auto");
    });

    document.getElementById("yellow").addEventListener("click", function () {
        brushColor = "#FFD600";
        setCursor("auto");
    });

    // Slider listener
    var slider = document.getElementById("slider");
    slider.addEventListener("input", function () {
        brushSize = this.value;
        updateBrushSizeDisplay();
        setCursorStyle(brushSize)
    });

    // Function to update brush size display
    function updateBrushSizeDisplay() {
        document.getElementById("brushSize").textContent = brushSize;
    }

    // Function to set the cursor style
    function setCursor(cursorStyle) {
        canvas.style.cursor = cursorStyle;
    }

    // Function to set the cursor style based on brush size
    function setCursorStyle(size) {
        var cursorURL = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 1}" fill="white" stroke="black" stroke-width="1"/></svg>') ${size / 2} ${size / 2}, auto`;
        setCursor(cursorURL);
    }

    // Function to start drawing
    function startPosition(e) {
        painting = true;
        draw(e);
    }

    // Function to stop drawing
    function endPosition() {
        painting = false;
        ctx.beginPath(); // Start a new path for future drawings
    }

    // Function to draw on the canvas
    function draw(e) {
        if (!painting) return;

        ctx.lineWidth = brushSize;
        ctx.lineCap = "round";
        ctx.strokeStyle = brushColor;

        // Calculate the correct mouse position relative to the canvas
        var rect = canvas.getBoundingClientRect();
        var mouseX = e.clientX - rect.left;
        var mouseY = e.clientY - rect.top;

        ctx.lineTo(mouseX, mouseY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(mouseX, mouseY);
    }

    // Function to clear the canvas
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});
