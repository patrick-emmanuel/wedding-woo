var mongoose = require('mongoose');
var GuestBook = mongoose.model('GuestBook');


var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//GET guestbook.
module.exports.getGuestbook = function(req, res) {
    GuestBook.find({}, function(err, guestbooks) {
        if (err) {
            console.log(err);
            sendJSONResponse(res, 400, err);
            return;
        }
        if (!guestbooks) {
            sendJSONResponse(res, 400, { "message": "no guestbooks found." });
            return;
        }
        sendJSONResponse(res, 200, guestbooks);
    });
};

//POST request to add guestbook
module.exports.createGuestbook = function(req, res) {
    GuestBook.create({
        name: req.body.name,
        message: req.body.message,
        createdAt: req.body.createdAt,
        photo: req.body.photo
    }, function(err, guestbook) {
        if (err) {
            sendJSONResponse(res, 404, err);
        } else {
            sendJSONResponse(res, 201, guestbook);
        }
    });
};