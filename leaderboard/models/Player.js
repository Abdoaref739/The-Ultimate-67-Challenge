const mongoose = require("mongoose");
const PlayerSchema = new mongoose.Schema({
    username: String,
    score: Number
});
module.exports = mongoose.model("Player", PlayerSchema);