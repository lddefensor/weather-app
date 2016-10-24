# weather-app
A simple Angularv1 Diretcive that asks for a permission to read your current location, 
and then uses the http://openweathermap.org/current public API to fetch the weather 
for that location and displays it. 
If the user denies to share the location, show a little input form for entering postcode or country, 
and display the weather based on that location.

##Dependencies
The application is using requireJS for loading the dependencies. 
Uses bootstrap.css for styles
Uses Erik Flower's weather-icons https://erikflowers.github.io/weather-icons, for displaying different weather conditions

##Usage
include 'weatheApp' as dependencies in your angular app
Include the following css: 
<link rel="stylesheet" href="js/weather/css/auto-detect-location.css">
<link rel="stylesheet" href="js/weather/css/get-location.css">
<link rel="stylesheet" href="js/weather/css/open-weather-app.css">
<link rel="stylesheet" href="js/weather/css/weather-app.css"> 
<link rel="stylesheet" href="js/weather/css/bootstrap.css"> 

And the Require JS: 
<script data-main="js/main.js" src="js/libs/require.js"></script>

Main.JS contains the configuration of requireJS

 



