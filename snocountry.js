const fetch = require("node-fetch");
const url =
  "http://feeds.snocountry.net/conditions.php?apiKey=SnoCountry.example&ids=schweitzermountain";
fetch(url)
  .then(response => {
    response.json().then(json => {
      console.log(json)
    });
  })
  .catch(error => {
    console.log(error);
  });
