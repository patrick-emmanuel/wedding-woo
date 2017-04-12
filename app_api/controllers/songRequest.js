var mongoose = require('mongoose');
var SongRequest = mongoose.model('SongRequest');

var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

//POST request to create a song request.
module.exports.createSongRequest = function(req, res) {
    SongRequest.create({
        name: req.body.name,
        song: req.body.song,
        createdAt: req.body.createdAt
    }, function(err, songRequest) {
        if (err) {
            sendJSONResponse(res, 404, err);
        } else {
            sendJSONResponse(res, 201, songRequest);
        }
    });
};

//GET song requests.
module.exports.getSongRequests = function(req, res) {
    SongRequest
        .find({})
        .populate('song')
        .exec(function(err, songRequests) {
            if (err) {
                console.log(err);
                sendJSONResponse(res, 400, err);
                return;
            }
            if (!songRequests) {
                sendJSONResponse(res, 400, { "message": "no song requests found." });
                return;
            }
            console.log(songRequests);
            sendJSONResponse(res, 200, songRequests);

        });
};