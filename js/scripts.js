

$(document).ready(function () {

    const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';



    var call =  'http://api.openweathermap.org/data/2.5/forecast?lat=33.449339&lon=-83.26209' + '&units=imperial&appid=' + apiKey;


    $.getJSON(call, function (data) {
        //console.log(data);

        var callTime = new Date(data.list[0].dt*1000);
        var currentDescription = data.list[0].weather[0].description;
        //console.log(currentDescription);
        $('#today-description').html(currentDescription);
        var currentIcon = '<img src="http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png">';
        $('#today-icon').html(currentIcon);
        var currentTemp = Math.round(data.list[0].main.temp);
        $('#today-temp').html(currentTemp);

        var forecast1 = getForecast(1);
        console.log(forecast1);
/*        var maxTemp = -1000;
        var minTemp = 1000;
        var numberOfForecasts = 0;
        var totalRain = 0;
        var totalClouds = 0;
        var description;
        var weatherIcon ='<img src="http://openweathermap.org/img/w/';
        var descriptionIcon = {sunny: '01d.png', mostlySunny: '01d.png', partlyCloudy: '02d.png', cloudy: '04d.png',
            lightRain: '10d.png', rain: '10d.png', heavyRain: '09d.png'};
        var dayOfWeek;

        for(var i = 0; i < data.list.length; i++){
            var forecastTime = new Date(data.list[i].dt*1000);
            console.log(data.list[i].rain['3h']);
            //console.log(forcastTime.getDate());
            //console.log(callTime.getDate() + 1);
            if((forecastTime.getDate() === callTime.getDate() + 1)  && (forecastTime.getHours() <= 16) &&
                (forecastTime.getHours() >= 6)){
                //console.log(data.list[i].main.temp);
                numberOfForecasts++;
                if(data.list[i].main.temp > maxTemp){
                    maxTemp = data.list[i].main.temp
                }
                if(data.list[i].main.temp < minTemp){
                    minTemp = data.list[i].main.temp
                }
                if(data.list[i].rain['3h'] != undefined){
                    totalRain += data.list[i].rain['3h'];
                }
                totalClouds += data.list[i].clouds.all;


            }
        }

        if(totalRain/numberOfForecasts/3 >= 7.874){
            description = 'Heavy Rain';
        }else if(totalRain/numberOfForecasts/3 < 7.874 && totalRain/numberOfForecasts/3 >= 2.794){
            description = 'Rain';
        }else if((totalRain/numberOfForecasts/3 < 2.794 && totalRain/numberOfForecasts/3 >= 1.061)){
            description = 'Light Rain';
        }else if(totalClouds/numberOfForecasts >= 60){
            description = 'Cloudy';
        }else if(totalClouds/numberOfForecasts < 60 && totalClouds/numberOfForecasts >= 40){
            description = 'Partly Cloudy';
        }else if(totalClouds/numberOfForecasts < 40 && totalClouds/numberOfForecasts >= 20) {
            description = 'Mostly Sunny';
        }else{
            description = 'Sunny'
        }

        switch (description){
            case 'Heavy Rain':
                weatherIcon += descriptionIcon.heavyRain + '">';
                break;
            case 'Rain':
                weatherIcon += descriptionIcon.rain + '">';
                break;
            case 'Light Rain':
                weatherIcon += descriptionIcon.lightRain + '">';
                break;
            case 'Cloudy':
                weatherIcon += descriptionIcon.cloudy + '">';
                break;
            case 'Partly Cloudy':
                weatherIcon += descriptionIcon.partlyCloudy + '">';
                break;
            case 'Mostly Sunny':
                weatherIcon += descriptionIcon.mostlySunny + '">';
                break;
            case 'Sunny':
                weatherIcon += descriptionIcon.sunny + '">';
                break;

        }

        switch (forecastTime.getDay()){
            case 0:
                dayOfWeek = 'Sunday';
                break;
            case 1:
                dayOfWeek = 'Monday';
                break;
            case 2:
                dayOfWeek = 'Tuesday';
                break;
            case 3:
                dayOfWeek = 'Wednesday';
                break;
            case 4:
                dayOfWeek = 'Thursday';
                break;
            case 5:
                dayOfWeek = 'Friday';
                break;
            case 6:
                dayOfWeek = 'Saturday';
                break;
        }

        var forecast = {high: maxTemp, low: minTemp, overview: description, pic:weatherIcon, day: dayOfWeek};*/


/*        console.log(forecast.high);
        console.log(forecast.low);
        console.log(forecast.overview);
        console.log(forecast.pic);
        console.log(forecast.day);*/

    function getForecast(daysOut){
        var maxTemp = -1000;
        var minTemp = 1000;
        var numberOfForecasts = 0;
        var totalRain = 0;
        var totalClouds = 0;
        var description;
        var weatherIcon ='<img src="http://openweathermap.org/img/w/';
        var descriptionIcon = {sunny: '01d.png', mostlySunny: '01d.png', partlyCloudy: '02d.png', cloudy: '04d.png',
            lightRain: '10d.png', rain: '10d.png', heavyRain: '09d.png'};
        var dayOfWeek;

        for(var i = 0; i < data.list.length; i++){
            var forecastTime = new Date(data.list[i].dt*1000);
            //console.log(data.list[i].rain['3h']);
            //console.log(forcastTime.getDate());
            //console.log(callTime.getDate() + 1);
            if((forecastTime.getDate() === callTime.getDate() + daysOut)  && (forecastTime.getHours() <= 16) &&
                (forecastTime.getHours() >= 6)){
                //console.log(data.list[i].main.temp);
                dayOfWeek = forecastTime.getDay();
                numberOfForecasts++;
                if(data.list[i].main.temp > maxTemp){
                    maxTemp = data.list[i].main.temp
                }
                if(data.list[i].main.temp < minTemp){
                    minTemp = data.list[i].main.temp
                }
                if(data.list[i].rain['3h'] != undefined){
                    totalRain += data.list[i].rain['3h'];
                }
                totalClouds += data.list[i].clouds.all;


            }
        }

        if(totalRain/numberOfForecasts/3 >= 7.874){
            description = 'Heavy Rain';
        }else if(totalRain/numberOfForecasts/3 < 7.874 && totalRain/numberOfForecasts/3 >= 2.794){
            description = 'Rain';
        }else if((totalRain/numberOfForecasts/3 < 2.794 && totalRain/numberOfForecasts/3 >= 1.061)){
            description = 'Light Rain';
        }else if(totalClouds/numberOfForecasts >= 60){
            description = 'Cloudy';
        }else if(totalClouds/numberOfForecasts < 60 && totalClouds/numberOfForecasts >= 40){
            description = 'Partly Cloudy';
        }else if(totalClouds/numberOfForecasts < 40 && totalClouds/numberOfForecasts >= 20) {
            description = 'Mostly Sunny';
        }else{
            description = 'Sunny'
        }

        switch (description){
            case 'Heavy Rain':
                weatherIcon += descriptionIcon.heavyRain + '">';
                break;
            case 'Rain':
                weatherIcon += descriptionIcon.rain + '">';
                break;
            case 'Light Rain':
                weatherIcon += descriptionIcon.lightRain + '">';
                break;
            case 'Cloudy':
                weatherIcon += descriptionIcon.cloudy + '">';
                break;
            case 'Partly Cloudy':
                weatherIcon += descriptionIcon.partlyCloudy + '">';
                break;
            case 'Mostly Sunny':
                weatherIcon += descriptionIcon.mostlySunny + '">';
                break;
            case 'Sunny':
                weatherIcon += descriptionIcon.sunny + '">';
                break;

        }

        switch (dayOfWeek){
            case 0:
                dayOfWeek = 'Sunday';
                break;
            case 1:
                dayOfWeek = 'Monday';
                break;
            case 2:
                dayOfWeek = 'Tuesday';
                break;
            case 3:
                dayOfWeek = 'Wednesday';
                break;
            case 4:
                dayOfWeek = 'Thursday';
                break;
            case 5:
                dayOfWeek = 'Friday';
                break;
            case 6:
                dayOfWeek = 'Saturday';
                break;
        }

        var forecast = {high: maxTemp, low: minTemp, overview: description, pic:weatherIcon, day: dayOfWeek};

        return forecast;


    }

    });


    $('#weather-form').submit(function () {
        event.preventDefault();
        var zipCode = $('#zip-code').val();

        weatherURL = weatherAPI + '?zip=' + zipCode + ',us&units=imperial&appid=' + apiKey;
        //console.log(weatherURL);

        $.getJSON(weatherURL, function (weatherData) {
            //console.log(weatherData);

            var currentTemp = {currTemp: weatherData.main.temp,
            max: weatherData.main.temp_max, min: weatherData.main.temp_min};

            var name = weatherData.name;
            var icon = weatherData.weather[0].icon + '.png';
            var desc = weatherData.weather[0].description;
            var newHTML = '<img src="http://openweathermap.org/img/w/' + icon + '">' + desc;
            newHTML += '<div>The temp in ' + name + ' is currently ' + currentTemp.currTemp + '&deg;</div>';
            $('#temp-info').html(newHTML);
            animateCircle(0, currentTemp.currTemp);

        })
    });



    var canvas = $('#weather-canvas');
    var context = canvas[0].getContext('2d');

    var assumedTemperature = 65;

    var currentPercent = 0;

    function animateCircle(currentArc, currentTemp){
        context.fillStyle = '#ccc';
        context.beginPath();
        context.arc(155,75,70,0,Math.PI*2);
        context.fill();


        context.lineWidth = 5;
        context.strokeColor = '#ffff00';
        context.beginPath();
        context.arc(155,75,75, Math.PI*1.5, Math.PI*2*currentArc + Math.PI*1.5);
        context.stroke();

        currentPercent++;
        if(currentPercent < currentTemp){
            requestAnimationFrame(function(){
                animateCircle(currentPercent/100, currentTemp);
            });

        }


    }

    animateCircle();

});



