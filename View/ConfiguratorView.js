export default class ConfiguratorView {

    constructor(controller, monsterTypes) {
        this.fileChooserVisible = false;
        this.saveMonsterButtonVisible = false;
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.imageChooserDiv = document.getElementById("imageChooser");
        this.drawnElements = [];
        this.createNewDropDown("Type of Monster", monsterTypes);
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

    createMonsterImageUploader(selector) {
        this.controller.updateMonster(selector);

        if (!this.fileChooserVisible) {
            let monsterImage = document.createElement("input");
            monsterImage.setAttribute("id", "monsterImage");
            monsterImage.setAttribute("type", "file");
            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", monsterImage);
            nameLabel.innerHTML = "Upload your Monster";
            monsterImage.onchange = () => this.drawSaveMonsterButton(monsterImage);
            this.imageChooserDiv.appendChild(nameLabel);
            this.imageChooserDiv.appendChild(monsterImage);
            this.fileChooserVisible = true;
        }
    }

    drawSaveMonsterButton(monsterImage) {
        this.controller.updateMonster(monsterImage);
        if (!this.saveMonsterButtonVisible) {
            let button = document.createElement("button");
            button.type = "button";
            button.className = "btn btn-primary";
            button.appendChild(document.createTextNode("Make my Beast!"));
            button.onclick = () => this.controller.saveMonster();
            this.imageChooserDiv.appendChild(button);
            this.saveMonsterButtonVisible = true;
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
                selector.onchange = () => this.createMonsterImageUploader(selector);;
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
        if(legSelector == null){
            legSelector = this.monsterOptions.find(x => "Amount of Legs");
            console.log(this.monsterOptions.find(x => "Amount of Legs"))
        }
        
        if(selector.value > 4){
            console.log(" check");
        } 
        this.controller.updateMonster(selector);
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