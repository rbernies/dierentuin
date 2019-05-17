class WeatherModel {

    constructor(country) {
        const APPID = "5ce98ff491403bc50cc78dc29975e9e4";
        fetch("http://api.openweathermap.org/data/2.5/weather?q=" + country + "&APPID=" + APPID)
        .then(function(response){
            return response.json();
        })
        .then(function(json){
            //process json results
            console.log(json);
        });
    }
}