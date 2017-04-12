var mongoose = require('mongoose');
var Song = mongoose.model('Song');

var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//POST request to create a new song
module.exports.createSong = function(req, res) {
    Song.create({
        title: req.body.title,
        artiste: req.body.artiste,
    }, function(err, song) {
        if (err) {
            sendJSONResponse(res, 404, err);
        } else {
            sendJSONResponse(res, 201, song);
        }
    });
};
module.exports.getSongs = function(req, res) {
    Song.find({}, function(err, songs) {
        if (err) {
            console.log(err);
            sendJSONResponse(res, 404, err);
        } else {
            sendJSONResponse(res, 200, songs);
        }
    });
};

module.exports.getSong = function(req, res) {
    console.log('Get song', req.params);
    if (req.params && req.params.songid) {
        Song
            .findById(req.params.songid)
            .exec(function(err, song) {
                if (!song) {
                    sendJSONResponse(res, 404, { "message": "songid not found" });
                    return;
                } else if (err) {
                    console.log(err);
                    sendJSONResponse(res, 404, err);
                    return;
                }
                console.log(song);
                sendJSONResponse(res, 200, song);
            });
    } else {
        console.log('No songid specified');
        sendJSONResponse(res, 404, { "message": "No songid in request" });
    }
};