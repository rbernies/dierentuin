class ConfiguratorView{

    constructor(controller){
        
        this.controller = controller;
        this.configuratorDiv = document.getElementById("editor");
        this.createNameField();
    }

    createNameField(){
        let inputField = document.createElement("input");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for",inputField);
        nameLabel.innerHTML = "Name:";
        this.configuratorDiv.appendChild(nameLabel);
        this.configuratorDiv.appendChild(inputField); 
    }

    createMonsterTypeSelector(monsterTypes){
        let monsterSelector = document.createElement("SELECT");
        let nameLabel = document.createElement("Label");
        nameLabel.setAttribute("for",monsterSelector);
        nameLabel.innerHTML = "Select your monstertype";
        this.configuratorDiv.appendChild(nameLabel);  

        monsterSelector.setAttribute("id", "monsterSelector");
        this.configuratorDiv.appendChild(monsterSelector); 

        let selector = document.getElementById("monsterSelector");
        
        for(let i = 0; i < monsterTypes.length; i++){
            let list = document.createElement("option")
            let option = document.createTextNode(monsterTypes[i]);
            list.appendChild(option);
           selector.appendChild(list);
        }

       selector.onchange=()=>this.controller.startMonsterCreation(selector.value);
    }

    startMonsterCreator(monsterOptions){
        this.createArmAmountSelector(monsterOptions.armAmount);
    }

    createArmAmountSelector(armAmount){
        let armSelector = document.getElementById("amountSelector");
        let title = document.getElementById("title");
        //reset dropdown if already exists
        if(armSelector != null){        
        title.parentNode.removeChild(title);
        armSelector.parentNode.removeChild(armSelector);
        }

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