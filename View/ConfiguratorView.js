export default class ConfiguratorView {

    constructor(controller, monsterTypes) {
        this.fileChooserVisible = false;
        this.saveMonsterButtonVisible = false;
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.imageChooserDiv = document.getElementById("imageChooser");
        this.monsterPreviewDiv = document.getElementById("monsterPreview");

        this.drawnElements = [];
        this.createNewDropDown("Type of Monster", monsterTypes);

        this.monsterPreview = document.getElementById("monsterPreview");
        this.monsterPreview.addEventListener("drop", (ev) => { this.drop(ev); });
        this.monsterPreview.addEventListener("dragover", (ev) => { ev.preventDefault(); });
    }

    drop(ev){
        ev.preventDefault();
        let data = ev.dataTransfer.getData("text");
        let preview = document.getElementById(data);
        let ids = data.split(" ");
        if(ids.length > 1){
            let monster = this.controller.monsterController.monsters[ids[0]];
            this.controller.editMonster(monster);
            this.editMonster(monster);
            this.controller.monsterController.removeMonster(ids[0]);
            preview.id = this.controller.monsterController.monsters.length + " monster";
            ev.target.appendChild(preview);
        }
    }

    editMonster(monster){
        document.getElementById("Type of Monster").value = monster.monsterType;
        document.getElementById("monsterName").value = monster.monsterName;
        this.drawNextInputField("monsterName");
        if(monster.monsterType == "Fire" || monster.monsterType == "Water"){
        document.getElementById("Amount of Arms").value = monster.armAmount;
        this.drawNextInputField("Amount of Arms");
        }
        if(monster.monsterType != "Earth"){
        document.getElementById("Type of Arms").value = monster.armType;
        this.drawNextInputField("Type of Arms");
        }
        if(monster.monsterType != "Fire"){
        document.getElementById("Amount of Legs").value = monster.legAmount;
        this.drawNextInputField("Amount of Legs");
        }
        if(monster.monsterType == "Water" || monster.monsterType == "Fire"){
        document.getElementById("Amount of Eyes").value = monster.eyeAmount;
        this.drawNextInputField("Amount of Eyes");
        }
        document.getElementById("Type of Fur").value = monster.furType;
        this.drawNextInputField("Type of Fur");

        let colorSelector = document.getElementById("Color");
        colorSelector.value = monster.color;
        this.createMonsterImageUploader(colorSelector);
    }

    loadMonsterOptions(monsterOptions, monsterType) {
        this.resetMonsterCreator();
        this.monsterType = monsterType;
        this.monsterOptions = monsterOptions;
        this.createNameField();
    }

    createNameField() {
        let inputField = document.createElement("input");
        inputField.className = "form-control";
        inputField.setAttribute("id", "monsterName");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", inputField);
        nameLabel.innerHTML = "Name your new monster";
        inputField.addEventListener("keyup", event => this.updateMonsterOnEnter(event, inputField));
        this.configuratorDiv.appendChild(nameLabel);
        this.configuratorDiv.appendChild(inputField);
    }

    updateMonsterOnEnter(event, inputField){
        if (event.key === "Enter") {
            this.controller.updateMonster(inputField);
        }
    }

    drawNextInputField(selectorid) {
        //check if next input field of element has not already been drawn
        for(let id in this.drawnElements){
            if(this.drawnElements[id] == selectorid){
                return;
            }
        }

        let last = false;
        if (this.monsterOptions.length == 1) {
            last = true;
        }
        if (this.monsterOptions.length != 0) {
            let element = this.monsterOptions.shift();
            let key = Object.keys(element);
            let value = element[key];
            this.createNewDropDown(key.toString(), value, last);
        }
        this.drawnElements.push(selectorid);
    }

    createDrawingCanvas(selector){
        this.controller.updateMonster(selector);

        this.imageChooserDiv.appendChild(document.createElement("canvas"));
    }

    createMonsterImageUploader(selector) {
        this.controller.updateMonster(selector);

        if (!this.fileChooserVisible) {
            let monsterImage = document.createElement("input");    

            monsterImage.setAttribute("id", "monsterImage");
            monsterImage.setAttribute("type", "file");
            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", monsterImage);
            nameLabel.innerHTML = "Upload your Monster";
            monsterImage.onchange = () => this.previewFile();
            this.imageChooserDiv.appendChild(nameLabel);
            this.imageChooserDiv.appendChild(monsterImage);
            this.fileChooserVisible = true;
        }
    }

    createNewDropDown(label, value, lastElement) {
        if (value != null) {
            let selector = document.createElement("SELECT");
            selector.className = "form-control";
            selector.setAttribute("id", label);

            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", selector);
            nameLabel.setAttribute("id", label + "Label");
            nameLabel.innerHTML = label;

            if (label === "Type of Monster") {
                this.monsterTypeSelectArea.appendChild(nameLabel);
                this.monsterTypeSelectArea.appendChild(selector);
            } else {
                this.configuratorDiv.appendChild(nameLabel);
                this.configuratorDiv.appendChild(selector);
            }

            for (let i = 0; i < value.length; i++) {
                let list = document.createElement("option")
                let option = document.createTextNode(value[i]);
                list.appendChild(option);
                selector.appendChild(list);
            }
            if (lastElement) {
                selector.onchange = () => this.createMonsterImageUploader(selector);
            }
            else if (label === "Type of Monster") {
                selector.onchange = () => this.controller.startMonsterCreation(selector.value);
            }
            else if(label === "Amount of Arms" && this.monsterType === "Water") {
                  selector.onchange = () => this.adjustLegSelector(selector);
                } 
            else if (label != "Type of Monster") {
                selector.onchange = () => this.controller.updateMonster(selector);
            }
            selector.value = "";
        }
    }

    adjustLegSelector(selector) {
        let legSelector = document.getElementById("Amount of Legs");
        if(legSelector == null && selector.value > 4){         
                for(let element in this.monsterOptions){
                    let key = Object.keys(this.monsterOptions[element]);
                    if(key == "Amount of Legs"){
                        this.monsterOptions[element][key] = [0];
                    }                 
                }    
        }      
        else if(legSelector != null){
            if(selector.value > 4){
                this.resetLegSelector(legSelector);
                this.addLegSelectorOptions(legSelector, [0]);
            } else {
                this.resetLegSelector(legSelector);
                this.addLegSelectorOptions(legSelector, [1,2,3,4]);
            }
        }
        this.controller.updateMonster(selector);
    }

    resetLegSelector(legSelector){
        while(legSelector.firstChild)
        legSelector.removeChild(legSelector.firstChild);
    }

    addLegSelectorOptions(legSelector, value){
        legSelector.onchange = () => this.controller.updateMonster(legSelector);

                for(let element in value){
                let list = document.createElement("option")
                let option = document.createTextNode(value[element]);
                list.appendChild(option);
                legSelector.appendChild(list);
                }
    }

    showMonsterProperties(event) {
        let ids = event.target.id.split(" ");
        if (ids.length > 1) {
            let monster = this.controller.monsterController.monsters[ids[0]];
            if(monster == null)
            return;

            let monsterDiv = document.getElementById(monster.position);

            if(!monsterDiv.className.includes("monsterInfo")){
                let deleteButton = document.createElement("button");
                deleteButton.innerHTML = "Delete Monster";
                deleteButton.addEventListener("click", () => this.controller.monsterController.removeMonster(monster.monsterId));

                monsterDiv.className += " monsterInfo";
                let span = document.createElement("span");
                span.className = "monsterInfoText";
                span.innerHTML = "Name: " + monster.monsterName + "<br>" + "<br>"       
                + "Type: " + monster.monsterType + "<br>" 
                + "Amount of Arms: " + monster.armAmount + "<br>"
                + "Type of Arms: " + monster.armType + "<br>"
                + "Amount of Legs: " + monster.legAmount + "<br>"
                + "Amount of Eyes: " + monster.eyeAmount + "<br>"
                + "Type of Fur: " + monster.furType + "<br>"
                + "Color: " + monster.color;
                
                span.appendChild(deleteButton);
                monsterDiv.appendChild(span);   
            } 
        }
    }

    playSound(monster){
        let audio = new Audio(monster.audio);
        audio.loop = false;
        audio.play();
    }

    createImageTag() {
        let monsterId = this.controller.monsterController.monsters.length;
        let preview = document.getElementById(monsterId + " monster");
        if(preview != null)
        this.monsterPreviewDiv.removeChild(preview);
        preview = document.createElement("IMG");
        preview.id = monsterId + " monster";
        preview.className = "tile";
        preview.draggable = true;
        preview.addEventListener("dragstart", this.drag);
        preview.addEventListener("mouseover", event => this.showMonsterProperties(event));
        preview.addEventListener("click", () => this.playSound(this.controller.monsterController.monsters[monsterId]));
        return preview;
    }

    previewFile() {
        let preview = this.createImageTag();
        let file = document.querySelector('input[type=file]').files[0];
        let reader = new FileReader();

        reader.onloadend = () => {
            preview.src = reader.result;
            this.controller.monsterController.updateMonster("monsterImage", preview.src);
        }

        if (file) {
            reader.readAsDataURL(file);
        } else {
            preview.src = "";
        }
        this.monsterPreviewDiv.appendChild(preview);
    }

    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    resetMonsterCreator() {
        this.drawnElements = [];
        this.fileChooserVisible = false;
        this.saveMonsterButtonVisible = false;
        while (this.configuratorDiv.firstChild) {
            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);
        }
        while (this.imageChooserDiv.firstChild) {
            this.imageChooserDiv.removeChild(this.imageChooserDiv.firstChild);
        }
    }
}