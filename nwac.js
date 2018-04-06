const fetch = require("node-fetch");
const url =
  "http://www.nwac.us/api/v2/avalanche-region-forecast/?format=json";
fetch(url)
  .then(response => {
    response.json().then(json => {
      console.log(json.objects[0].bottom_line_summary)
    });
  })
  .catch(error => {
    console.log(error);
  });
