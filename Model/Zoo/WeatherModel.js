export default class WeatherModel {

    constructor(country) {
        const APPID = "5ce98ff491403bc50cc78dc29975e9e4";
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + country + "&APPID=" + APPID + "&units=metric")
        .then(function(response){
            return response.json();
        })
        .then((json) => {
            //temperatuur -> > 25 graden -> fire + 10 , water - 10
            //regen -> fire - 10, water + 10    
            //wind -> turbovlieg functie, windstil gaat die amper vooruit en als t hard waait +10
            //water spugen
            this.temperature = json.main.temp;
            this.wind = json.wind.speed;
            this.rain = (json.rain != undefined) ? true : false;
            console.log(this);
        })
        .catch(err => {
            this.temperature = 0;
            this.wind = 0;
            this.rain = false;
            console.log("error: " + err);
        });
    }
}