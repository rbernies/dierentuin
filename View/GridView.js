class GridView {

    constructor(columns, rows){
        this.columns = columns;
        this.rows = rows;
        this.columnSize = 0;
    }

    resize(canvas, g) {
        let w = (window.innerWidth * 0.6) / this.columns;
        let h = (window.innerHeight * 0.8) / this.rows;
        this.columnSize = h;
        if(this.columnSize > w) this.columnSize = w;
        this.columnSize = Math.floor(this.columnSize);
        console.log(w + ", " + h + ", " + this.columnSize);
        
        canvas.width = this.columns * this.columnSize;
        canvas.height = this.rows * this.columnSize;
        console.log(canvas.width + ", " + canvas.height);
        
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                g.rect(x * this.columnSize, y * this.columnSize, this.columnSize, this.columnSize);
                g.stroke();
            }
        }
    }
}