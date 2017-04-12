var mongoose = require('mongoose');

var songRequestSchema = new mongoose.Schema({
    name: { type: String, required: true },
    song: { type: mongoose.Schema.Types.ObjectId, ref: 'Song' }
}, { timestamps: true });

module.exports = mongoose.model('SongRequest', songRequestSchema);