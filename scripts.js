
/*
const button = document.querySelector('.botao-add')
const input = document.querySelector('.input-task')
const listacompleta = document.querySelector('.list-task')

let minhalista = []

function adicionartarefa() {
    minhalista.push({
        tarefa: input.value,
        concluida: false
    })

    
    input.value = ''
    mostrartarefa()
}

*/
const button = document.querySelector('.botao-add');
const input = document.querySelector('.input-task');
const listacompleta = document.querySelector('.list-task');
let minhalista = [];

function adicionartarefa() {
    const novaTarefa = input.value.trim();

    if (novaTarefa === '') {
        alert('Por favor, insira uma tarefa válida.');
        return;
    }
    minhalista.push({
        tarefa: novaTarefa,
        concluida: false
    });
    input.value = '';
    mostrartarefa();
}

function mostrartarefa() {
    let novali = ''
    minhalista.forEach((item, posicao) => {
        novali = novali + `
        <li class="task ${item.concluida && "done"}">
            <img  src="./img/check.png" alt="check" onclick="concluirtarefa(${posicao})">
            <p>${item.tarefa}</p>
            <img src="./img/lixeira.png" alt="lixeira" onclick="deletariten(${posicao})">
        </li>`

    })

    listacompleta.innerHTML = novali
    localStorage.setItem('lista', JSON.stringify(minhalista))
}

function concluirtarefa(posicao) {
    minhalista[posicao].concluida = !minhalista[posicao].concluida
    mostrartarefa()
}


function deletariten(posicao) {
    minhalista.splice(posicao, 1)
    mostrartarefa()
}

function recaregar() {
    const tarefaslocalstorage = localStorage.getItem('lista')
    if (tarefaslocalstorage) {
        minhalista = JSON.parse(tarefaslocalstorage)
    }
    mostrartarefa()

}
recaregar()

button.addEventListener('click', adicionartarefa)