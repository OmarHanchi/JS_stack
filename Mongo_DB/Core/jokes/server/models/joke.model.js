const mongoose = require('mongoose');
 
const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});
 
const joke = mongoose.model('joke', JokeSchema);
module.exports = joke;
