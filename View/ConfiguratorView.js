export default class ConfiguratorView {

    constructor(controller, monsterTypes) {
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.monsterPreview = document.getElementById("monsterPreview");
        this.createNewDropDown("monsterType", "Type of Monster", monsterTypes);
        this.createNameField();
        this.createMonsterImageUploader();
    }

    createNameField() {
        let inputField = document.createElement("input");
        inputField.className = "form-control";
        inputField.setAttribute("id", "monsterName");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", inputField);
        nameLabel.innerHTML = "Name your new monster";
        this.monsterTypeSelectArea.appendChild(nameLabel);
        this.monsterTypeSelectArea.appendChild(inputField);    
    }

    startMonsterCreator(monsterOptions) {
        this.resetMonsterCreator();
        this.monsterOptions = monsterOptions;
        
        
        this.createNewDropDown("armAmount", "Amount of Arms", this.monsterOptions.armAmountOption);
        this.createNewDropDown("armType", "Type of Arms", this.monsterOptions.armTypeOption);
        this.createNewDropDown("legAmount", "Amount of Legs", this.monsterOptions.legAmountOption);
        this.createNewDropDown("eyeAmount", "Amount of Eyes", this.monsterOptions.eyeAmountOption);
        this.createNewDropDown("furType", "Type of Fur", this.monsterOptions.furOption);
        this.createNewDropDown("color", "Color your Monster", this.monsterOptions.colorOption);
    }

    createNewDropDown(id, label, value) {
        if (value != null) {
            console.log(value.length)
            let selector = document.createElement("SELECT");
            selector.className = "form-control";
            selector.setAttribute("id", id);
            
            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", selector);
            nameLabel.setAttribute("id", id+"Label");
            nameLabel.innerHTML = label;

            if (id === "monsterType") {
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
              
            if (id === "monsterType") {
                selector.onchange = () => this.controller.startMonsterCreation(selector.value);
            } else {
                selector.onchange = () => this.controller.updateMonster(selector);
            }

            selector.value = "";
        }
    }

    updateConfigurator(monsterOptions, selector) {
    
    }

    adjustLegOptions(monsterOptions){
        let legSelector = document.getElementById("legAmount");
        while(legSelector.firstChild){              
            legSelector.removeChild(legSelector.firstChild);
        }

        for (let i = 0; i < monsterOptions.legAmountOption.length; i++) {
            let list = document.createElement("option")
            let option = document.createTextNode(monsterOptions.legAmountOption[i]);
            list.appendChild(option);
            legSelector.appendChild(list);
        }
    }

    resetMonsterCreator() {
        document.getElementById("monsterName").value = "";
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