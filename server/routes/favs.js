/* eslint-disable function-paren-newline */
const express = require('express');

const fileController = require('../controllers/fileController');

const router = express.Router();

// ADD STORE FAVORITE ROUTE HANDLER HERE
router.post('/:id', fileController.getFavs, fileController.addFav, (req, res) => {
  res.status(200).json({ favs: res.locals.favs });
});

// ADD REMOVE FAVORITE ROUTE HANDLER HERE
router.delete('/:id', fileController.getFavs, fileController.removeFav, (req, res) => {
  res.status(200).json({ favs: res.locals.favs });
});

module.exports = router;
