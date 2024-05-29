const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
});

module.exports = mongoose.model('Client', ClientSchema);
