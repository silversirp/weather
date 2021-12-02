document.addEventListener('DOMContentLoaded', cityWeather);

function weatherDataFetch( city ){
    let key = 'ee91cb438af3ec838d3c334f3d56c61c';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function (resp) {
            return resp.json()
        }) // conv data to json
        .then(function (data){
            console.log(data);
        })
        .catch(function (){
            // catch errors
        })
}

function cityWeather(e){
    weatherDataFetch('Tallinn');
}