
/*
var wsdotReq = new XMLHttpRequest();
wsdotReq.open('GET', "http://wsdot.com/Traffic/api/MountainPassConditions/MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson?AccessCode={732babfb-a460-40da-9ef1-098d0646d0dd}", true);
wsdotReq.send();

wsdotReq.addEventListener("readystatechange", processRequest, false);

function processRequest(e) {
  if (wsdotReq.readystate == 4 && wsdotReq.status == 200) {
    console.log('success');
  }
}
*/

const fetch = require("node-fetch");
const url =
  "http://wsdot.com/Traffic/api/MountainPassConditions/MountainPassConditionsREST.svc/GetMountainPassConditionsAsJson?AccessCode={}";
fetch(url)
  .then(response => {
    response.json().then(json => {
      for (var i = 0; i < json.length; i++) {
        console.log(
          'Currently, ' +
          json[i].RoadCondition + ', over ' +
          json[i].MountainPassName + ' at ' +
          json[i].ElevationInFeet + ' feet (' +
          json[i].TemperatureInFahrenheit + 'F)\n'
          );
      }
    });
  })
  .catch(error => {
    console.log(error);
  });
