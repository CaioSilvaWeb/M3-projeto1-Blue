const { models } = require('mongoose');
const Tarefa = require('../models/Tarefas');

const findAllTarefaService = async () => {
  const tarefas = await Tarefa.find();
  console.log(tarefas);
  return tarefas;
};

const findByIdTarefasService = async (Id) => {
  const oneTarefa = await Tarefa.findById(Id);
  return oneTarefa;
};

const createTarefasService = async (novaTarefa) => {
  const createdTarefa = await Tarefa.create(novaTarefa);
  return createdTarefa;
};

const updateTarefasService = async (id, tarefaEditada) => {
  const updateTarefa = await Tarefa.findByIdAndUpdate(id, tarefaEditada);
  return updateTarefa;
};

const deleteTarefasService = async (id) => {
  return await Tarefa.findByIdAndDelete(id);
};

module.exports = {
  findAllTarefaService,
  findByIdTarefasService,
  createTarefasService,
  updateTarefasService,
  deleteTarefasService,
};
