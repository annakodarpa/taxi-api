const FleetSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    phone: String,
});

module.exports = mongoose.model('Fleet', ClientSchema);
