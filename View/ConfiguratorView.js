export default class ConfiguratorView {

    constructor(controller, monsterTypes) {
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.createNameField();
        this.createNewDropDown("monsterType", "Type of Monster", monsterTypes);
    }

    createNameField() {
        let inputField = document.createElement("input");
        inputField.className = "form-control";
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", inputField);
        nameLabel.innerHTML = "Name your new monster";
        this.monsterTypeSelectArea.appendChild(nameLabel);
        this.monsterTypeSelectArea.appendChild(inputField);
    }

    createNewDropDown(id, label, value) {
        if (value != null) {
            let selector = document.createElement("SELECT");
            selector.className = "form-control";
            selector.setAttribute("id", id)

            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", selector);
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
        }
    }

    updateConfigurator(monsterOptions, selector) {
        if(selector.id === "armAmount"){    
            let legSelector = document.getElementById("legAmount");
            while(legSelector.firstChild){              
                legSelector.removeChild(legSelector.firstChild);
            }

            for (let i = 0; i < monsterOptions.legAmountOption.length; i++) {
                let list = document.createElement("option")
                let option = document.createTextNode(monsterOptions[i]);
                list.appendChild(option);
                legSelector.appendChild(list);
            }
        }
        
        // console.log(monsterOptions);
        // console.log(this.test[1]);
        // console.log(this.test[1].options[this.test[1].selectedIndex].text);
        // document.getElementById(monsterOptions.armAmount).selected = "true";
    }

    resetMonsterCreator() {
        while (this.configuratorDiv.firstChild) {
            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);
        }
    }

    startMonsterCreator(monsterOptions) {
        this.resetMonsterCreator();
        this.createNewDropDown("armAmount", "Amount of Arms", monsterOptions.armAmountOption);
        this.createNewDropDown("armType", "Type of Arms", monsterOptions.armTypeOption);
        this.createNewDropDown("legAmount", "Amount of Legs", monsterOptions.legAmountOption);
        this.createNewDropDown("eyeAmount", "Amount of Eyes", monsterOptions.eyeAmountOption);
        this.createNewDropDown("furType", "Type of Fur", monsterOptions.furOption);
        this.createNewDropDown("color", "Color your Monster", monsterOptions.colorOption);
    }
}