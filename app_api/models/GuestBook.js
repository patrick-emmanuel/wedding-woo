var mongoose = require('mongoose');

var guestBookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true },
    photo: { type: Buffer, contentType: String }
}, { timestamps: true });

module.exports = mongoose.model('GuestBook', guestBookSchema);