module.exports.home = function(req, res) {
    res.render('home', { title: 'Home' });
};


module.exports.happyStory = function(req, res) {
    res.render('happy-story', { title: 'Happy\'s Story' });
};

module.exports.wuraStory = function(req, res) {
    res.render('wura-story', { title: 'Wura\'s Story' });
};

module.exports.map = function(req, res) {
    res.render('map', { title: 'Map' });
};

module.exports.photos = function(req, res) {
    res.render('photos', { title: 'Photos' });
};

module.exports.invites = function(req, res) {
    res.render('invites', { title: 'Invites' });
};

module.exports.weddingParty = function(req, res) {
    res.render('wedding-party', { title: 'Wedding Party' });
};