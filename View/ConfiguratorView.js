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

        this.monsterPreview = document.getElementById("monsterPreview");
        this.monsterPreview.addEventListener("drop", (ev) => { this.drop(ev); });
        this.monsterPreview.addEventListener("dragover", (ev) => { ev.preventDefault(); });
    }

    drop(ev){
        ev.preventDefault();
        console.log(this.controller.monsterController.monsters);
        let data = ev.dataTransfer.getData("text");
        let preview = document.getElementById(data);
        let ids = data.split(" ");
        if(ids.length > 1){
            console.log("config drop - " + ids[0]);
            let monster = this.controller.monsterController.monsters[ids[0]];
            this.controller.monsterController.newMonster = monster;
            //add all the right options based on the newMonster
            this.controller.monsterController.removeMonster(ids[0]);
            preview.id = this.controller.monsterController.monsters.length + " monster";
            ev.target.appendChild(preview);
        }
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
            monsterImage.onchange = () => this.controller.previewMonster();
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