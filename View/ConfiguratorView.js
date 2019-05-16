class ConfiguratorView {

    constructor(controller, monsterTypes) {
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.createNameField();
        this.createMonsterTypeSelector(monsterTypes);
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


    createMonsterTypeSelector(monsterTypes) {
        let monsterSelector = document.createElement("SELECT");
        monsterSelector.className = "form-control";

        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", monsterSelector);
        nameLabel.innerHTML = "Type of Monster";

        this.monsterTypeSelectArea.appendChild(nameLabel);
        this.monsterTypeSelectArea.appendChild(monsterSelector);

        for (let i = 0; i < monsterTypes.length; i++) {
            let list = document.createElement("option")
            let option = document.createTextNode(monsterTypes[i]);
            list.appendChild(option);
            monsterSelector.appendChild(list);
        }
        monsterSelector.onchange = () => this.controller.startMonsterCreation(monsterSelector.value);
    }

    resetMonsterCreator() {
        while (this.configuratorDiv.firstChild) {
            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);
        }
    }

    startMonsterCreator(monsterOptions) {
        this.resetMonsterCreator();
        this.createArmAmountSelector(monsterOptions.armAmountOption);
        this.createArmTypeSelector(monsterOptions.armTypeOption);
        this.createLegAmountSelector(monsterOptions.legAmountOption);
        this.createEyeAmountSelector(monsterOptions.eyeAmountOption);
        this.createFurSelector(monsterOptions.furOption);
        this.createColorSelector(monsterOptions.colorOption);
    }

    createArmAmountSelector(armAmount) {
        if (armAmount != null) {
            let armAmountSelector = document.createElement("SELECT");
            armAmountSelector.className = "form-control";

            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", armAmountSelector);
            nameLabel.innerHTML = "Amount of Arms";

            this.configuratorDiv.appendChild(nameLabel);
            this.configuratorDiv.appendChild(armAmountSelector);

            for (let i = 0; i < armAmount.length; i++) {
                let list = document.createElement("option")
                list.setAttribute("value", "selector");
                let option = document.createTextNode(armAmount[i]);
                list.appendChild(option);
                armAmountSelector.appendChild(list);
            }
            armAmountSelector.onchange = () => this.controller.updateMonster("armSelector");
        }
    }

    createArmTypeSelector(armType) {
        if (armType != null) {
            let armTypeSelector = document.createElement("SELECT");
            armTypeSelector.className = "form-control";

            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", armTypeSelector);
            nameLabel.innerHTML = "Type of Arms";

            this.configuratorDiv.appendChild(nameLabel);
            this.configuratorDiv.appendChild(armTypeSelector);

            for (let i = 0; i < armType.length; i++) {
                let list = document.createElement("option")
                list.setAttribute("value", "selector");
                let option = document.createTextNode(armType[i]);
                list.appendChild(option);
                armTypeSelector.appendChild(list);
            }
            armTypeSelector.onchange = () => this.controller.updateMonster("armType");
        }
    }

    createLegAmountSelector(legAmount) {
        if (legAmount != null) {
            let legAmountSelector = document.createElement("SELECT");
            legAmountSelector.className = "form-control";

            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", legAmountSelector);
            nameLabel.innerHTML = "Amount of Legs";

            this.configuratorDiv.appendChild(nameLabel);
            this.configuratorDiv.appendChild(legAmountSelector);

            for (let i = 0; i < legAmount.length; i++) {
                let list = document.createElement("option")
                list.setAttribute("value", "selector");
                let option = document.createTextNode(legAmount[i]);
                list.appendChild(option);
                legAmountSelector.appendChild(list);
            }
            legAmountSelector.onchange = () => this.controller.updateMonster("legAmount");
        }
    }

    createEyeAmountSelector(eyeAmount) {
        if (eyeAmount != null) {
            let eyeAmountSelector = document.createElement("SELECT");
            eyeAmountSelector.className = "form-control";

            let nameLabel = document.createElement("Label");
            nameLabel.setAttribute("for", eyeAmountSelector);
            nameLabel.innerHTML = "Amount of Eyes";

            this.configuratorDiv.appendChild(nameLabel);
            this.configuratorDiv.appendChild(eyeAmountSelector);

            for (let i = 0; i < eyeAmount.length; i++) {
                let list = document.createElement("option")
                list.setAttribute("value", "selector");
                let option = document.createTextNode(eyeAmount[i]);
                list.appendChild(option);
                eyeAmountSelector.appendChild(list);
            }
            eyeAmountSelector.onchange = () => this.controller.updateMonster("eyeAmount");
        }
    }

    createFurSelector(furType){
        let furTypeSelector = document.createElement("SELECT");
        furTypeSelector.className = "form-control";

        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", furTypeSelector);
        nameLabel.innerHTML = "Type of Fur";

        this.configuratorDiv.appendChild(nameLabel);
        this.configuratorDiv.appendChild(furTypeSelector);

        for (let i = 0; i < furType.length; i++) {
            let list = document.createElement("option")
            list.setAttribute("value", "selector");
            let option = document.createTextNode(furType[i]);
            list.appendChild(option);
            furTypeSelector.appendChild(list);
        }
        furTypeSelector.onchange = () => this.controller.updateMonster("furType");
    }

    createColorSelector(colors){
        let colorSelector = document.createElement("SELECT");
        colorSelector.className = "form-control";

        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for", colorSelector);
        nameLabel.innerHTML = "Color your Monster";

        this.configuratorDiv.appendChild(nameLabel);
        this.configuratorDiv.appendChild(colorSelector);

        for (let i = 0; i < colors.length; i++) {
            let list = document.createElement("option")
            list.setAttribute("value", "selector");
            let option = document.createTextNode(colors[i]);
            list.appendChild(option);
            colorSelector.appendChild(list);
        }
        colorSelector.onchange = () => this.controller.updateMonster("color");
    }

}