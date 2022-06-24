arrayDeTarefas = [
    {
        id: 1,
        nome: 'faxina',
        descricao: 'varrer a casa'
    },
    {
        id: 2,
        nome: 'hidratar',
        descricao: 'beber agua'
    }
];


const findAllTarefasService = () => {
    return arrayDeTarefas;
};

const findByIdTarefasService = (Id) => {
    return arrayDeTarefas.find((tarefa) => tarefa.id == Id);
};

const createTarefasService = (newTarefa) => {
    const newId = arrayDeTarefas.length + 1;
    newTarefa.id = newId;
    arrayDeTarefas.push(newTarefa);
    return newTarefa;
};

const updateTarefasService = (id, tarefaEditada) => {
    tarefaEditada['id'] = id;
    const tarefaIndex = arrayDeTarefas.findIndex((tarefa) => tarefa.id == id);
    arrayDeTarefas[tarefaIndex] = tarefaEditada;
    return tarefaEditada;
  };

  const deleteTarefasService = (id) => {
    const TarefasIndex = arrayDeTarefas.findIndex((tarefa) => tarefa.id == id);
    return arrayDeTarefas.splice(TarefasIndex, 1);
  };

module.exports = {
    findAllTarefasService,
    findByIdTarefasService,
    createTarefasService,
    updateTarefasService,
    deleteTarefasService
}
