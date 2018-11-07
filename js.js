$(document).ready(function () {

});


$(".getWeatherBtn").click(function () {
    var userInput = $("#userInput").val();
    console.log(userInput);
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&units=metric&APPID=6fa6de6de43af0df4ccee63e856364e7",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            console.log(data.weather[0].main);
            var weatherStatus = data.weather[0].main;
            $(".weatherInfo").html("<h1>"+ userInput + "</h1>" +
                "<h1>" + data.weather[0].main + "</h1>" +
                "<h2>" + data.main["temp"] + "</h2>" +
                "<img src='Assets/"+ weatherStatus +".png' style='width: 80%;height: auto'>" +
                "<div id ='minTemp' class='temp'>Low: " + data.main["temp_min"] + "</div>" +
                "<div id ='maxTemp' class='temp'>High: " +data.main["temp_max"]+ "</div>"

            );
        }
    })
});