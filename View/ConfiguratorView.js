export default class ConfiguratorView {

    constructor(controller, monsterTypes) {
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.monsterPreview = document.getElementById("monsterPreview");
        this.createNewDropDown("Type of Monster", monsterTypes);
        this.createMonsterImageUploader();
    }

    createNameField() {
        let inputField = document.createElement("input");
        inputField.className = "form-control";
        inputField.setAttribute("id", "monsterName");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", inputField);
        nameLabel.innerHTML = "Name your new monster";
        inputField.onchange= () => this.controller.updateMonster(inputField);
        this.configuratorDiv.appendChild(nameLabel);
        this.configuratorDiv.appendChild(inputField);    
    }

    drawNextInputField(){
        if(this.monsterOptions.length != 0){
        let element = this.monsterOptions.shift();
        let key = Object.keys(element);
        let value = element[key];
        this.createNewDropDown(key.toString(), value);
        }
    }

    loadMonsterOptions(monsterOptions) {
        this.resetMonsterCreator();
        this.monsterOptions = monsterOptions;
        this.createNameField();
    }

    createNewDropDown(label, value) {
        if (value != null) {
            let selector = document.createElement("SELECT");
            selector.className = "form-control";
            selector.setAttribute("id", label);
            
            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", selector);
            nameLabel.setAttribute("id", label+"Label");
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
              
            if (label === "Type of Monster") {
                selector.onchange = () => this.controller.startMonsterCreation(selector.value);}
            //  else if(label ==="Amount of Arms" && this.monsterType === "Water") {
            //     selector.onchange = () => this.adjustLegSelector(selector);} 
                else if(label != "Type of Monster") {
                 selector.onchange = () => this.controller.updateMonster(selector);
            }
            selector.value = "";
        }
    }
    
   
    adjustLegSelector(selector) {
    // if(selector.value > 4){
    //     document.getElementById("Amount of Legs").style.visibility = "hidden";
    //     document.getElementById("Amount of LegsLabel").style.visibility = "hidden";

    // } else {
    //     document.getElementById("Amount of LegsLabel").style.visibility = "visible";
    //     document.getElementById("Amount of Legs").style.visibility = "visible";
    // }
    }


    resetMonsterCreator() {
        while (this.configuratorDiv.firstChild) {
            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);
        }
    }

    createMonsterImageUploader(){
        let monsterImage = document.createElement("input");
        monsterImage.setAttribute("id", "monsterImage");
        monsterImage.setAttribute("type", "file");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", monsterImage);
        nameLabel.innerHTML = "Upload your Monster";
        monsterImage.onchange = () => this.controller.updateMonster(monsterImage);
        this.monsterPreview.appendChild(nameLabel);
        this.monsterPreview.appendChild(monsterImage);
    }
}