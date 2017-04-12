var mongoose = require('mongoose');

var songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artiste: { type: String, required: true }
});

mongoose.model('Song', songSchema);