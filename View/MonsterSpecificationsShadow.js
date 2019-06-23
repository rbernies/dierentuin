export default class MonsterSpecificationsShadow extends HTMLElement {

    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'closed' });
        this.styleElement();
    }

    showMonsterProperties(monsterElement, monsterController) {
        let monster = monsterElement;

        let monsterDiv = document.getElementById(monster.position);
        let span = null;

        let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete Monster";
        deleteButton.addEventListener("click", () => monsterController.removeMonster(monster.monsterId));

        span = document.createElement("span");
        span.className = "monsterInfoText";

        let factor = 1.0;
        let wProps = monsterController.getWeatherProps();
        if (monster.monsterType == "Earth") {
            factor = wProps.earthFactor;
        } else if (monster.monsterType == "Water") {
            factor = wProps.waterFactor;
        } else if (monster.monsterType == "Wind") {
            factor = wProps.windFactor;
        } else if (monster.monsterType == "Fire") {
            factor = wProps.fireFactor;
        }

        span.innerHTML = "Name: " + monster.monsterName + "<br>"
            + "Type: " + monster.monsterType + "<br>"
            + "Amount of Arms: " + monster.armAmount + "<br>"
            + "Type of Arms: " + monster.armType + "<br>"
            + "Amount of Legs: " + monster.legAmount + "<br>"
            + "Amount of Eyes: " + monster.eyeAmount + "<br>"
            + "Type of Fur: " + monster.furType + "<br>"
            + "Color: " + monster.color + "<br>"
            + "Special Power: " + (monster.specialPower * factor).toFixed(2);
        if (factor > 1.0) span.innerHTML += " (+" + (factor * 100 - 100).toFixed(0) + "%)";
        span.appendChild(deleteButton);
        this.shadow.appendChild(span);
        return monsterDiv;
    }
    styleElement() {
        let style = document.createElement('style');
        style.textContent = `
        .monsterInfoText {
            width: 150px;
            background-color: rgb(0, 0, 0);
            color: rgb(24, 161, 11);
            border-color: rgb(83, 78, 7);
            border-style: solid;
            border-width: 2px;
            border-radius: 10px;
            padding: 4px;
            text-align: center;
            position: absolute;
        }    
        `;
        this.shadow.appendChild(style);
    }

}
window.customElements.define("specification-shadow", MonsterSpecificationsShadow);