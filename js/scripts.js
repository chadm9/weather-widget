

$(document).ready(function () {
    var canvas = $('#weather-canvas');
    var context = canvas[0].getContext('2d');

    var assumedTemperature = 65;

    var currentPercent = 0;

    function animateCircle(currentArc){
        console.log(currentArc);
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
        if(currentPercent < assumedTemperature){
            requestAnimationFrame(function(){
                animateCircle(currentPercent/100);
            });

        }


    }

    animateCircle();

});



