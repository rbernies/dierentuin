export default class DrawMonsterView {

    constructor(canvasDiv, configuratorView) {
        this.configuratorView = configuratorView;
        this.createDrawingCanvas(canvasDiv);
        this.canvasDiv = document.getElementById('canvas');
    }

    createDrawingCanvas(canvasDiv) {
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
        this.paint;
        let canvas = document.createElement("canvas");

        canvas.setAttribute('width', 300);
        canvas.setAttribute('height', 200);
        canvas.setAttribute('id', 'canvas');

        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", canvas);
        nameLabel.innerHTML = "Draw your Monster";

        canvas.addEventListener("mousedown", event => this.mouseDown(event));
        canvas.addEventListener("mousemove", event => this.mouseMove(event));
        canvas.addEventListener("mouseup", () => this.mouseUp());
        canvas.addEventListener("mouseleave", () => this.mouseUp());

        let resetButton = document.createElement("button");
        resetButton.innerHTML = "Reset";
        resetButton.type = "button";
        resetButton.addEventListener("click", () => this.clearCanvas());

        let saveButton = document.createElement("button");
        saveButton.innerHTML = "Save";
        saveButton.type = "button";
        saveButton.addEventListener("click", () => this.saveMonsterDrawing());

        canvasDiv.appendChild(nameLabel);
        canvasDiv.appendChild(resetButton);
        canvasDiv.appendChild(canvas);
        canvasDiv.appendChild(saveButton);
        this.context = canvas.getContext("2d");
    }

    mouseDown(e) {
        this.rect = this.canvasDiv.getBoundingClientRect();
        this.mouseX = e.clientX - this.rect.left;
        this.mouseY = e.clientY - this.rect.top;
        this.paint = true;
        this.addClick(this.mouseX, this.mouseY);
        this.redraw();
    }

    mouseMove(e) {
        if (this.paint) {
            this.addClick(e.clientX - this.rect.left, e.clientY - this.rect.top, true);
            this.redraw();
        }
    }

    mouseUp() {
        this.paint = false;
    } 

    saveMonsterDrawing() {
        let canvas = document.getElementById('canvas');
        let img = canvas.toDataURL("image/png");
        this.configuratorView.previewMonsterDrawing(img);
    }

    addClick(x, y, dragging) {
        this.clickX.push(x);
        this.clickY.push(y);
        this.clickDrag.push(dragging);
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.clickX = new Array();
        this.clickY = new Array();
        this.clickDrag = new Array();
    }

    redraw() {
        this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height);
        this.context.strokeStyle = "#df4b26";
        this.context.lineJoin = "round";
        this.context.lineWidth = 5;

        for (let i = 0; i < this.clickX.length; i++) {
            this.context.beginPath();
            if (this.clickDrag[i] && i) {
                this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1]);
            } else {
                this.context.moveTo(this.clickX[i] - 1, this.clickY[i]);
            }
            this.context.lineTo(this.clickX[i], this.clickY[i]);
            this.context.closePath();
            this.context.stroke();
        }
    }
}