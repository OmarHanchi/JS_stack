const jokeController = require('../controllers/joke.controller');
 
module.exports = app => {
    app.get('/api/jokes', jokeController.findAlljokes);
    app.get('/api/jokes/:id', jokeController.findOneSinglejoke);
    app.patch('/api/jokes/:id', jokeController.updateExistingjoke);
    app.put('/api/jokes/:id', jokeController.updateExistingjoke);   
    app.post('/api/jokes', jokeController.createNewjoke);
    app.delete('/api/jokes/:id', jokeController.deleteAnExistingjoke);
}
