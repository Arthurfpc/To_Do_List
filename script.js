let tarefas = [];

function adicionartarefa() {
    const tarefa = document.getElementById('tarefa').value;

    if (tarefa.trim() !== "") {
        tarefas.push(tarefa);
        document.getElementById('tarefa').value = "";
        alert('Tarefa adicionada com sucesso!');
    } else {
        alert('Por favor, digite uma tarefa!');
    }
}

function mostrarlista() {
    const listaSection = document.getElementById('lista-tarefas');
    listaSection.style.display = 'block';

    listaSection.innerHTML = '<h2>Lista de Tarefas</h2>';

    if (tarefas.length === 0) {
        listaSection.innerHTML += '<p>Você não tem tarefas para mostrar.</p>';
    } else {
        const lista = document.createElement('ul');
        tarefas.forEach((tarefa, index) => {
            const item = document.createElement('li');
            item.textContent = tarefa;
            const btnRemover = document.createElement('button');
            btnRemover.textContent = 'Remover';
            btnRemover.onclick = () => remover(index);
            item.appendChild(btnRemover);
            lista.appendChild(item);
        });
        listaSection.appendChild(lista);
    }
}

function remover(index) {
    tarefas.splice(index, 1);
    mostrarlista();
}
