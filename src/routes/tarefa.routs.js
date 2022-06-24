const route = require('express').Router();
const controllerTarefas = require('../controllers/tarefa.controllers');

route.get('/todas-tarefas', controllerTarefas.findAllTarefaController);
route.get('/tarefas/:id', controllerTarefas.findByIdTarefaController);
route.post('/create', controllerTarefas.createTarefaController);
route.put('/update/:id', controllerTarefas.updateTarefaController);
route.delete('/delete/:id', controllerTarefas.deleteTarefaController);

module.exports = route;
