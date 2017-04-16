var router = require('express').Router();
var messagesController = require('../controllers/messages');
var othersController = require('../controllers/others');

/* GET home page. */
router.get('/', othersController.home);

/* GET happy-story page. */
router.get('/happy-story', othersController.happyStory);

/* GET wura-story page. */
router.get('/wura-story', othersController.wuraStory);

/* GET schedule page. */
router.get('/map', othersController.map);

/* GET photos page. */
router.get('/photos', othersController.photos);

/* GET invite page. */
router.get('/invitation', othersController.invitation);

/* GET guestbook page. */
router.get('/guestbook', messagesController.guestbook);

/* GET song-request page. */
router.get('/song-request', messagesController.songRequest);

/* GET wedding-party page. */
router.get('/wedding-party', othersController.weddingParty);

module.exports = router;