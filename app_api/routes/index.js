var router = require('express').Router();
var guestbookController = require('../controllers/guestbook');
var songRequestController = require('../controllers/songRequest');
var songsController = require('../controllers/songs');

//guestbooks
router.get('/guestbooks', guestbookController.getGuestbook);
router.post('/guestbooks', guestbookController.createGuestbook);

//song requests
router.get('/songrequests', songRequestController.getSongRequests);
router.post('/songrequests', songRequestController.createSongRequest);

//songs
router.post('/songs', songsController.createSong);
router.get('/songs', songsController.getSongs);
router.get('/songs/:songid', songsController.getSong);

module.exports = router;