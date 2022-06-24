const tarefasService = require('../services/tarefa.services');

const findAllTarefaController = (req, res) => {
  const tarefas = tarefasService.findAllTarefasService();
  res.send(tarefas);
};

const findByIdTarefaController = (req, res) => {
  const tarefaId = req.params.id;
  const definirTarefa = tarefasService.findByIdTarefasService(tarefaId);
  res.send(definirTarefa);
};

const createTarefaController = (req, res) => {
  const tarefa = req.body;
  const newTarefa = tarefasService.createTarefasService(tarefa);
  res.send(newTarefa);
};

const updateTarefaController = (req, res) => {
  const idTar = +req.params.id;
  const tarefaEdit = req.body;
  const updateTarefa = tarefasService.updateTarefasService(idTar, tarefaEdit);
  res.send(updateTarefa);
};

const deleteTarefaController = (req, res) => {
  const idTar = req.params.id;
  tarefasService.deleteTarefasService(idTar);
  res.send({ message: 'Sua tarefa foi deletada com sucesso!!' });
};

module.exports = {
  findAllTarefaController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
  deleteTarefaController,
};
