

$(document).ready(function () {

    const weatherAPI = 'http://api.openweathermap.org/data/2.5/weather';

    var date = new Date(1485799200*1000);
    console.log(date.toJSON());
    var call =  'http://api.openweathermap.org/data/2.5/forecast?lat=33.449339&lon=-83.26209' + '&units=imperial&appid=' + apiKey;
    console.log(call);

    console.log(date.getTimezoneOffset());

    $.getJSON(call, function (data) {
        console.log(data);
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



