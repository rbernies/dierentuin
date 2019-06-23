export default class WeatherModel {

    constructor(monsterController, country) {
        const APPID = "5ce98ff491403bc50cc78dc29975e9e4";
        this.temperature = 0;
        this.wind = 0;
        this.rain = false;
        this.monsterController = monsterController;
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + country + "&APPID=" + APPID + "&units=metric")
        .then(function(response){
            return response.json();
        })
        .then((json) => {
            this.temperature = json.main.temp;
            this.wind = json.wind.speed;
            this.rain = (json.rain != undefined) ? true : false;
            this.monsterController.setWeatherProps({temperature: this.temperature, wind: this.wind, rain: this.rain});
        })
        .catch(err => {
            this.temperature = 0;
            this.wind = 0;
            this.rain = false;
            this.monsterController.setWeatherProps({temperature: this.temperature, wind: this.wind, rain: this.rain});
        });

        let map = {};
        onkeydown = onkeyup = (e) => {
            map[e.keyCode] = e.type == 'keydown';

            if(map[17] && map[13]){
                map = {};
                this.changeWeather();
                return false;
            }
        }
    }

    changeWeather(){
        this.temperature = this.validate("Temperature: ", this.temperature);
        this.wind = this.validate("Wind speed: ", this.wind);
        this.rain = confirm("Rain: ", this.rain);
        this.monsterController.setWeatherProps({temperature: this.temperature, wind: this.wind, rain: this.rain});
    }
    
    validate(message, defaultVal){
        let text = prompt(message, defaultVal);
        if(text === null) return defaultVal;
        let temp = parseFloat(text);
        while(!temp || temp.toString().length != text.length){
            alert("You need to provide a valid (decimal) number, separated with a '.', or click 'Cancel' to skip.");
            text = prompt(message, defaultVal);
            if(text === null) return defaultVal;
            temp = parseFloat(text);
        }
        return temp;
    }
}