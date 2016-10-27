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
include 'weatheApp' as dependencies in your angular app  <br />
Include the following css:   <br />
&lt;link rel="stylesheet" href="js/weather/css/auto-detect-location.css"&gt;  <br />
&lt;link rel="stylesheet" href="js/weather/css/get-location.css"&gt;    <br />
&lt;link rel="stylesheet" href="js/weather/css/open-weather-app.css"&gt;    <br />
&lt;link rel="stylesheet" href="js/weather/css/weather-app.css"&gt;    <br />
&lt;link rel="stylesheet" href="js/weather/css/bootstrap.css"&gt;    <br />

And the Require JS:   <br />
&lt;script data-main="js/main.js" src="js/libs/require.js"&gt;&lt;/script&gt;  <br />

Main.JS contains the configuration of requireJS

Use the directive <weather-app></weather-app> to launch the Weather Application <br />

##Issues
 getCurrentPosition() and watchPosition() no longer work on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details. <br />
 I suppose this will only work if you are working on an https or localhost



