const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'e90179bdf7dfdfd05a88785ff7b1f36f';
let url = `http://eajazali_mahaboobbasha:${apiKey}@10.201.255.161:8080/view/Functional-Tests/job/Autobahn_Admin_Services_Functional_Test/lastBuild/api/json`
console.log(url)

request(url, function(err, response, body) {
  if(err){
    console.log('error: ', err);
  } else {
    //console.log('body: ', body);
    let buildResult = JSON.parse(body)
    let message = `${buildResult.result}`;
    console.log(message);
  }
  });
