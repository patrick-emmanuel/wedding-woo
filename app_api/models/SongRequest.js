var mongoose = require('mongoose');

var songRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    song: { type: String, required: true },
    artiste: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('SongRequest', songRequestSchema);