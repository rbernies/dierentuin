class ConfiguratorView {

    constructor(controller, monsterTypes) {
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.test = [];
        this.createNameField();
        this.createNewDropDown("Type of Monster", monsterTypes);
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

    createNewDropDown(label, attribute) {
        if (attribute != null) {
            let selector = document.createElement("SELECT");
            this.test += selector;
            selector.className = "form-control";

            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", selector);
            nameLabel.innerHTML = label;

            if (label === "Type of Monster") {
                this.monsterTypeSelectArea.appendChild(nameLabel);
                this.monsterTypeSelectArea.appendChild(selector);
            } else {
                this.configuratorDiv.appendChild(nameLabel);
                this.configuratorDiv.appendChild(selector);
            }

            for (let i = 0; i < attribute.length; i++) {
                let list = document.createElement("option")
                let option = document.createTextNode(attribute[i]);
                list.appendChild(option);
                selector.appendChild(list);
            }
            if (label === "Type of Monster") {
                selector.onchange = () => this.controller.startMonsterCreation(selector.value);
            } else {
                selector.onchange = () => this.controller.updateMonster(selector, selector.value);
            }
        }
    }

    updateConfigurator(monsterOptions) {
        console.log(this.test[1].style.visibility = "hidden");
        // document.getElementById(monsterOptions.armAmount).selected = "true";
    }

    resetMonsterCreator() {
        while (this.configuratorDiv.firstChild) {
            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);
        }
    }

    startMonsterCreator(monsterOptions) {
        this.resetMonsterCreator();
        this.createNewDropDown("Amount of Arms", monsterOptions.armAmountOption);
        this.createNewDropDown("Type of Arms", monsterOptions.armTypeOption);
        this.createNewDropDown("Amount of Legs", monsterOptions.legAmountOption);
        this.createNewDropDown("Amount of Eyes", monsterOptions.eyeAmountOption);
        this.createNewDropDown("Type of Fur", monsterOptions.furOption);
        this.createNewDropDown("Color your Monster", monsterOptions.colorOption);
    }
}