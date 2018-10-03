const request = require('request');
const argv = require('yargs').argv;

let apiKey = '5b0a4c0a2b7b19e69d3f4c05274a2a73';
let city = argv.c;
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

request(url, function(err, response, body) {
  if(err){
    console.log('error: ', err);
  } else {
    //console.log('body: ', body);
    let weather = JSON.parse(body)
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
  });
