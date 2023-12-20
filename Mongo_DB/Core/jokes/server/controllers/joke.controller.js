const joke = require('../models/joke.model');
 
module.exports.findAlljokes = (req, res) => {
    joke.find()
        .then((allDajokes) => {
            res.json({ jokes: allDajokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}
 
module.exports.findOneSinglejoke = (req, res) => {
    joke.findOne({ _id: req.params.id })
        .then(oneSinglejoke => {
            res.json({ joke: oneSinglejoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.createNewjoke = (req, res) => {
    joke.create(req.body)
        .then(newlyCreatedjoke => {
            res.json({ joke: newlyCreatedjoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.updateExistingjoke = (req, res) => {
    joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedjoke => {
            res.json({ joke: updatedjoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
 
module.exports.deleteAnExistingjoke = (req, res) => {
    joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}
