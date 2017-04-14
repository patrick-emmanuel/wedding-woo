var router = require('express').Router();
var guestbookController = require('../controllers/guestbook');
var songRequestController = require('../controllers/songRequest');

//guestbooks
router.get('/guestbooks', guestbookController.getGuestbook);
router.post('/guestbooks', guestbookController.createGuestbook);

//song requests
router.get('/songrequests', songRequestController.getSongRequests);
router.post('/songrequests', songRequestController.createSongRequest);


module.exports = router;