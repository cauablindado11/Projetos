import React, { useState } from "react";

const Tarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState("");
  const [editando, setEditando] = useState(null);
  const [textoEditado, setTextoEditado] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== "") {
      // Verifica se já existe uma tarefa com o mesmo texto
      if (!tarefas.some(tarefa => tarefa.texto === novaTarefa)) {
        setTarefas([...tarefas, { id: Date.now(), texto: novaTarefa }]);
        setNovaTarefa("");
      } else {
        alert("Já existe uma tarefa com o mesmo nome.");
      }
    }
  };

  const removerTarefa = (id) => {
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    // Se estiver removendo uma tarefa que está sendo editada, cancela a edição
    if (editando === id) {
      cancelarEdicao();
    }
  };

  const iniciarEdicao = (id, texto) => {
    setEditando(id);
    setTextoEditado(texto);
  };

  const salvarEdicao = () => {
    if (textoEditado.trim() !== "") {
      // Verifica se já existe uma tarefa com o mesmo texto
      if (!tarefas.some(tarefa => tarefa.texto === textoEditado)) {
        setTarefas((prevTarefas) =>
          prevTarefas.map((tarefa) =>
            tarefa.id === editando ? { ...tarefa, texto: textoEditado } : tarefa
          )
        );
        cancelarEdicao();
      } else {
        alert("Já existe uma tarefa com o mesmo nome.");
      }
    } else {
      alert("O texto da tarefa não pode ficar vazio.");
    }
  };

  const cancelarEdicao = () => {
    setEditando(null);
    setTextoEditado("");
  };

  const deletarTodasTarefas = () => {
    setTarefas([]);
  };

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            {editando === tarefa.id ? (
              <>
                <input
                  type="text"
                  value={textoEditado}
                  onChange={(e) => setTextoEditado(e.target.value)}
                />
                <button onClick={salvarEdicao}>Salvar</button>
                <button onClick={cancelarEdicao}>Cancelar</button>
              </>
            ) : (
              <>
                {tarefa.texto}
                <button onClick={() => iniciarEdicao(tarefa.id, tarefa.texto)}>
                  Editar
                </button>
                <button onClick={() => removerTarefa(tarefa.id)}>Remover</button>
              </>
            )}
          </li>
        ))}
      </ul>

      {tarefas.length > 0 && (
        <button onClick={deletarTodasTarefas}>Deletar Todas as Tarefas</button>
      )}
    </div>
  );
};

export default Tarefas;
