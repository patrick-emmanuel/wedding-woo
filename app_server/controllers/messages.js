module.exports.guestbook = function(req, res) {
    res.render('guestbook', { title: 'Guestbook' });
};

module.exports.songRequest = function(req, res) {
    res.render('song-request', { title: 'Song Request' });
};