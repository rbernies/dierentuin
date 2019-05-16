class ConfiguratorView{

    constructor(controller, monsterTypes){
        this.controller = controller;
        this.monsterTypes = monsterTypes;
        this.configuratorDiv = document.getElementById("configuratorArea");
        this.monsterTypeSelectArea = document.getElementById("monsterTypeArea");
        this.createNameField();
        this.createMonsterTypeSelector(monsterTypes);
    }

    createNameField(){
        let inputField = document.createElement("input");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for",inputField);
        nameLabel.innerHTML = "Name:";
        this.monsterTypeSelectArea.appendChild(nameLabel);
        this.monsterTypeSelectArea.appendChild(inputField); 
    }


    createMonsterTypeSelector(monsterTypes){
        let monsterSelector = document.createElement("SELECT");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for",monsterSelector);
        nameLabel.innerHTML = "Select your monstertype";
        this.monsterTypeSelectArea.appendChild(nameLabel);  

        monsterSelector.setAttribute("id", "monsterSelector");
        this.monsterTypeSelectArea.appendChild(monsterSelector); 

        let selector = document.getElementById("monsterSelector");
        
        for(let i = 0; i < monsterTypes.length; i++){
            let list = document.createElement("option")
            let option = document.createTextNode(monsterTypes[i]);
            list.appendChild(option);
           selector.appendChild(list);
        }
       selector.onchange=()=>this.controller.startMonsterCreation(selector.value);
    }

    resetMonsterCreator(){
        while (this.configuratorDiv.firstChild) {
            this.configuratorDiv.removeChild(this.configuratorDiv.firstChild);
        }
    }

    startMonsterCreator(monsterOptions){
        this.resetMonsterCreator();
        this.createArmAmountSelector(monsterOptions.armAmount);
    }

    createArmAmountSelector(armAmount){
        let armSelector = document.getElementById("amountSelector");
        let title = document.getElementById("title");

        let amountSelector = document.createElement("SELECT");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("id", "title");

        nameLabel.setAttribute("for",amountSelector);
        nameLabel.innerHTML = "Amount of arms";

        this.configuratorDiv.appendChild(nameLabel);  
        amountSelector.setAttribute("id", "amountSelector");
        this.configuratorDiv.appendChild(amountSelector); 
      
        for(let i = 0; i <= armAmount; i++){
            let list = document.createElement("option")
            list.setAttribute("value", "selector");
            let option = document.createTextNode(i);
            list.appendChild(option);
            document.getElementById("amountSelector").appendChild(list);
        }       
    }


}