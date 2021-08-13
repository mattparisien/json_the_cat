const request = require('request');
const breedName = process.argv.slice(2)[0];

request(`https://api.thecatfgapi.com/v1/breeds/search?q=${breedName}`, 'utf8', (error, response, body) => {
  if (error) throw error;
  const data = JSON.parse(body);
  const description  = data[0].description;
  console.log(description);
});

console.log('Loading...');