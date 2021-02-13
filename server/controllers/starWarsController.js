const fetch = require('node-fetch');

const { convertToPhotoUrl } = require('../utils/helpers');

const starWarsController = {};

// ADD MIDDLEWARE TO GET MORE CHARACTERS HERE
starWarsController.getMoreCharacters = (req, res, next) => {
  console.log('getting more characters');
  fetch('https://swapi.co/api/people/?page=3')
  .then(res => res.json())
  .then(body => {
    const { results } = body;
    res.locals.newCharacters = results;
    return next();
  })
  .catch(err => {
    if (err) {
      return next({
        log: `starWarsController.getMoreCharacters: ERROR: ${err}`,
        message: { err: 'starWarsController.getMoreCharacters: ERROR: Check server logs for details' },
      });
    }
  });
};

// ADD MIDDLEWARE TO ADD CHARACTER PHOTOS HERE
starWarsController.populateCharacterPhotos = (req, res, next) => {
  // console.log('res.locals.newCharacters: ', res.locals.newCharacters);
  if (!res.locals.newCharacters) {
    return next({
      log: `starWarsController.populateCharacterPhotos: ERROR: ${err}`,
      message: { err: 'starWarsController.starWarsController: ERROR: Check server logs for details' },
    });
  }
  for (let i = 0; i < res.locals.newCharacters.length; i += 1) {
    res.locals.newCharacters[i].photo = convertToPhotoUrl(res.locals.newCharacters[i].name);
  }
  return next();
}

// ADD REQUEST CHARACTER VALIDATION MIDDLEWARE HERE
starWarsController.validateRequestCharacter = (req, res, next) => {
  console.log('req.body: ', req.body);
  if (!req.body.character || !req.body.character.homeworld || !req.body.character.films) {
    return next({
      log: 'starWarsController.validateRequestCharacter: ERROR: expected /* insert missing property here */ to exist',
      message: { err: 'server POST /details: ERROR: Invalid request body' },
    });
  }
  return next();
};

// ADD GET HOMEWORLD MIDDLEWARE HERE
starWarsController.getHomeworld = (req, res, next) => {
  console.log('req.body.character.homeworld: ', req.body.character.homeworld);
  fetch(req.body.character.homeworld)
  .then(res => res.json())
  .then(body => {
    res.locals.homeworld = body;
    console.log('homeworld name: ', res.locals.homeworld.name);
    return next();
  })
  .catch(err => {
    if (err) {
      return next({
        log: `starWarsController.getHomeworld: ERROR: /* the error from the star wars api */`,
        message: { err: 'starWarsController.getHomeworld: ERROR: Check server logs for details' },
      });
    }
  });
};

// ADD GET FILMS MIDDLEWARE HERE
starWarsController.getFilms = (req, res, next) => {
  const promises = [];
  for (let url of req.body.character.films) {
    promises.push(fetch(url).then(res => res.json()));
  }
  // Promise.all() returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled
  Promise.all(promises)
  .then(body => {
    res.locals.films = body;
    for (let film of res.locals.films) {
      console.log('film title: ', film.title);
    }
    return next();
  })
  .catch(err => {
    if (err) {
      return next({
        log: `starWarsController.getFilms: ERROR: /* the error from the star wars api */`,
        message: { err: "starWarsController.getFilms: ERROR: Check server logs for details" },
      });
    }
  });
};

module.exports = starWarsController;
