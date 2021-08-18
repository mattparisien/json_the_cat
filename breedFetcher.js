const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, 'utf8', (error, response, body) => {
    if (error) callback(error, null);
    const description = JSON.parse(body)[0].description;
    callback(null, description);
  });
};

console.log('Loading...');

module.exports = { fetchBreedDescription };