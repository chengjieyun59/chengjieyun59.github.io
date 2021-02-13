const fs = require('fs');
const path = require('path');

const fileController = {};

fileController.getCharacters = (req, res, next) => {
  const { results } = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../data/characters.json'), 'UTF-8'));
  if (!results) {
    return next({
      log: 'fileController.getCharacters: ERROR: Error getting characters data from characters.json file',
      message: { err: 'Error occurred in fileController.getCharacters. Check server logs for more details.' },
    });
  }
  res.locals.characters = results;
  return next();
};

// ADD MIDDLEWARE TO GET FAVORITE CHARACTERS HERE
fileController.getFavs = (req, res, next) => {
  console.log('in fileController getFavs');
  fs.readFile(path.resolve(__dirname, '../data/favs.json'), 'UTF-8', (err, data) => {
    if (err) {
      return next({
        log: `fileController.getFavs: ERROR: /* the error from the file system */`,
        message: { err: 'fileController.getFavs: ERROR: Check server logs for details' },
      });
    }
    const faveData = JSON.parse(data);
    res.locals.favs = faveData;
    console.log('res.locals.favs: ', res.locals.favs);
    return next();
  });
};

// ADD MIDDLEWARE TO ADD A FAVORITE CHARACTER HERE
fileController.addFav = (req, res, next) => {
  console.log('in fileController addFav');
  if (!res.locals.favs || typeof res.locals.favs !== 'object') {
    return next({
      log: 'fileController.addFavs: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals.favs to be an object.',
      message: { err: 'fileController.addFavs: ERROR: Check server logs for details' },
    });
  }
  let chId = req.params.id;
  if (res.locals.favs[chId]) {
    return next();
  }
  res.locals.favs[chId] = true;
  console.log('added to res.locals.favs: ', res.locals.favs);
  fs.writeFile(path.resolve(__dirname, '../data/favs.json'), JSON.stringify(res.locals.favs), 'UTF-8',  (err) => {
    if (err || !res.locals.favs) {
      return next({
        log: 'fileController.addFavs: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals.favs to be an object.',
        message: { err: 'fileController.addFavs: ERROR: Check server logs for details' },
      });
    }
    return next();
  });
};

// ADD MIDDLEWARE TO REMOVE A CHARACTER FROM FAVORITES HERE
fileController.removeFav = (req, res, next) => {
  console.log('in fileController removeFav');
  if (!res.locals.favs || typeof res.locals.favs !== 'object') {
    return next({
      log: 'fileController.removeFav: ERROR: Invalid or unfound required data on res.locals object - Expected res.locals.favs to be an object.',
      message: { err: 'fileController.removeFav: ERROR: Check server logs for details' },
    });
  }
  let delId = req.params.id;
  if (!res.locals.favs[delId]) {
    return next();
  }
  delete res.locals.favs[delId];
  console.log('deleted from res.locals.favs: ', res.locals.favs);
  fs.writeFile(path.resolve(__dirname, '../data/favs.json'), JSON.stringify(res.locals.favs), 'UTF-8', (err) => {
    if (err || !res.locals.favs) {
      return next({
        log: `fileController.removeFav: ERROR: /* the error from the file system / other calls */`,
        message: { err: 'fileController.removeFav: ERROR: Check server logs for details' },
      });
    }
    return next();
  });
}

// Extention 1: ADD MIDDLEWARE TO GET CHARACTER NICKNAMES HERE


// Extention 1: ADD MIDDLEWARE TO SET A CHARACTER'S NICKNAME HERE


// Extention 1: ADD MIDDLEWARE TO REMOVE A CHARACTER'S NICKNAME HERE


module.exports = fileController;
