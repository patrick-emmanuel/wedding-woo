var mongoose = require('mongoose');
require('../models/GuestBook');
require('../models/SongRequest');

var url = "mongodb://127.0.0.1/weddingdb";


if (process.env.NODE_ENV === 'production') {
    url = process.env.MONGOLAB_URI;
}
mongoose.connect(url);

mongoose.connection.on('connected', function() {
    console.log('MongoDB connected!');
});
mongoose.connection.on('error', function() {
    console.log('MongoDB error:' + url);
});
mongoose.connection.on('disconnected', function() {
    console.log('MongoDB disconnected!');
});