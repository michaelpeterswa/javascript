const fetch = require("node-fetch");

var k = 0;
const url =
  "https://api.coinmarketcap.com/v1/ticker/";
  fetch(url)
  .then(response => {
    response.json().then(json => {
      for(var i = 0; i < 5; i++){
      console.log(json[i].name + ' (' + json[i].symbol + ')');
      console.log(json[i].price_usd)
      console.log('------------')
    }
    });
  })
  .catch(error => {
    console.log(error);
  });
