var request = require('request');
var url = "http://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=44db6a862fba0b067b1930da0d769e98";

request({
	url: url, json: true
}, function (error, response, body) {
  if (error) {
  	console.log('Unable to fetch weather information.');
  } else {
  	console.log('It\'s ' + body.main.temp + ' F in ' + body.name + '!');

  }
});