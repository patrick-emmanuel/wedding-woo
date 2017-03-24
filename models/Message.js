var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    message: { type: String, required: true }
}, {timestamps: true});

mongoose.model('Message', messageSchema);