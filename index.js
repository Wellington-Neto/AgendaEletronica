var btn_add = document.getElementById('add');
var form = document.getElementById('tarefas');
var listaTarefas = [];
var count = 0;
btn_add.addEventListener("click", function(){
    createCheckBox();
    createImput();
    createBtnAceitar();
    createBtnRemover();
    createBr();
    
});
 
function addTarefa(info){
    listaTarefas[info] = document.getElementById('tarefa' + count)
}

//<input type="text" name="tarefa" id="tarefa" class="text" autocomplete="off"/>
function createImput(){
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'tarefa' + count);
    elemento.setAttribute('id', 'tarefa' + count);
    elemento.setAttribute('autocomplete', 'off');
    elemento.setAttribute('class', 'text');
    
    form.appendChild(elemento);
};

//<input for="tarefa" class="marcarTarefa" type="checkbox"></input>
function createCheckBox(){
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'checkbox');
    elemento.setAttribute('for', 'tarefa' + count);
    elemento.setAttribute('class', 'marcarTarefa');

    form.appendChild(elemento);
};

// <button for="tarefa" class="aceitarTarefa">V</button>
function createBtnAceitar(){
    var elemento = document.createElement('button');
    elemento.setAttribute('for', 'tarefa' + count);
    elemento.setAttribute('id', 'aceitarTarefa' + count);
    elemento.setAttribute('class', 'aceitarTarefa' + count);
    elemento.setAttribute('onclick', count)
    elemento.setAttribute('type', "submit")
    elemento.textContent = 'V';

    form.appendChild(elemento);
};

//<button for="tarefa" class="deletarTarefa">L</button>
function createBtnRemover(){
    var elemento = document.createElement('button');
    elemento.setAttribute('for', 'tarefa'+ count);
    elemento.setAttribute('id', 'deletarTarefa' + count);
    elemento.setAttribute('class', 'deletarTarefa' + count);
    elemento.textContent = 'L';
    form.appendChild(elemento);
};

function createBr(){
    var elemento = document.createElement('br');
    form.appendChild(elemento);
    count++;
};