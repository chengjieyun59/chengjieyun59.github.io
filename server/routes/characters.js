/* eslint-disable function-paren-newline */
const express = require('express');

const starWarsController = require('../controllers/starWarsController');

const router = express.Router();

// ADD GET MORE CHARACTERS ROUTE HANDLER HERE
router.get('/', starWarsController.getMoreCharacters, starWarsController.populateCharacterPhotos, (req, res) => {
  res.status(200).json({ newCharacters: res.locals.newCharacters });
});

// ADD GET CHARACTER DETAILS ROUTE HANDLER HERE
router.post('/details', starWarsController.validateRequestCharacter, starWarsController.getHomeworld, starWarsController.getFilms, (req, res) => {
  res.status(200).json({ homeworld: res.locals.homeworld, films: res.locals.films });
});

module.exports = router;
