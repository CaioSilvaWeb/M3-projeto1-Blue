const { clearCache } = require('ejs');
const mongoose = require('mongoose');
const tarefasService = require('../services/tarefa.services');

const findAllTarefaController = async (req, res) => {
  const tarefas = await tarefasService.findAllTarefaService();
  if (tarefas.length == 0) {
    return res
      .status(400)
      .send({ message: `Não existe nenhuma paleta cadastrada` });
  }
  res.send(tarefas);
};

const findByIdTarefaController = async (req, res) => {
  const parametroId = req.params.id;
  const escolhaTarefa = await tarefasService.findByIdTarefasService(
    parametroId,
  );
  if (!escolhaTarefa) {
    return res.status(400).send({ message: 'Essa tarefa não existe!' });
  }
  res.send(escolhaTarefa);
};

const createTarefaController = async (req, res) => {
  const tarefa = req.body;
  if (!tarefa || !tarefa.tarefa || !tarefa.descricao) {
    return res.status(400).send({ message: 'Envie os dois campos da tarefa!' });
  }
  const novaTarefa = await tarefasService.createTarefasService(tarefa);

  res.send(novaTarefa);
};

const updateTarefaController = async (req, res) => {
  const idParam = req.params.id;
  const tarefaEditada = req.body;
  console.log();
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  if (!tarefaEditada || !tarefaEditada.tarefa || !tarefaEditada.descricao) {
    return res.status(400).send({ message: 'Envie os dois campos da tarefa!' });
  }

  const updateTarefa = await tarefasService.updateTarefasService(
    idParam,
    tarefaEditada,
  );
  console.log(updateTarefa);
  res.send(updateTarefa);
};

const deleteTarefaController = async (req, res) => {
  const idParam = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(idParam)) {
    return res.status(400).send({ message: 'Id inválido' });
  }
  const tarefaEscolhida = await tarefasService.deleteTarefasService(idParam);
  if (!tarefaEscolhida) {
    return res.status(400).send({ message: 'Tarefa não Encontrada' });
  }
  res.send({ message: 'Tarefa delatada com sucesso!' });
};

module.exports = {
  findAllTarefaController,
  findByIdTarefaController,
  createTarefaController,
  updateTarefaController,
  deleteTarefaController,
  deleteTarefaController,
};
