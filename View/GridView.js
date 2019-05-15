class GridView {

    constructor(controller, columns, rows){
        this.columns = columns;
        this.rows = rows;
        this.controller = controller;
        this.addRegionOptions();
    }

    addRegionOptions(){
        let sRegion = document.getElementById("region-select");
        let regions = this.controller.getRegions();

        for(let i = 0; i < regions.length; i++){
            let option = document.createElement("option");
            option.setAttribute("value", i);
            let text = document.createTextNode(regions[i].name);
            option.appendChild(text);
            sRegion.appendChild(option);
        }

        sRegion.onchange = () => { this.controller.changeRegion(sRegion.selectedIndex); };
    }

    resize(canvas, g) {
        this.controller.model.calculateNodeSize();
        let nodeSize = GridNodeModel.nodeSize;

        canvas.width = this.columns *  nodeSize;
        canvas.height = this.rows * nodeSize;
        
        for(let y = 0; y < this.rows; y++){
            for(let x = 0; x < this.columns; x++){
                g.strokeRect(x * nodeSize, y * nodeSize, nodeSize, nodeSize);
            }
        }
    }
}