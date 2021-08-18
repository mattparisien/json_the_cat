const breedName = process.argv.slice(2);
const { fetchBreedDescription } = require('./breedFetcher');

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(`Here is your description for ${breedName}: ${description}`);
  }
});