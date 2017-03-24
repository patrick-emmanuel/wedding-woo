var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Kerri and Casey' });
});

/* GET our story page. */
router.get('/our-story', function(req, res, next) {
    res.render('our-story', { title: 'Our Story' });
});

/* GET photos page. */
router.get('/photos', function(req, res, next) {
    res.render('photos', { title: 'Photos' });
});

/* GET information page. */
router.get('/information', function(req, res, next) {
    res.render('information', { title: 'Informatioon' });
});

/* GET schedule page. */
router.get('/schedule', function(req, res, next) {
    res.render('schedule', { title: 'Schedule' });
});

/* GET registry page. */
router.get('/registry', function(req, res, next) {
    res.render('registry', { title: 'Registry' });
});

/* GET guestbook page. */
router.get('/guestbook', function(req, res, next) {
    res.render('guestbook', { title: 'Guest Book' });
});

/* GET song-request page. */
router.get('/song-request', function(req, res, next) {
    res.render('song-request', { title: 'Song Request' });
});

/* GET wedding-party page. */
router.get('/wedding-party', function(req, res, next) {
    res.render('wedding-party', { title: 'Wedding Party' });
});

module.exports = router;