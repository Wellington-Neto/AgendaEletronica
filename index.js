var btn_add = document.getElementById('add');
var btn_addTarefa = document.getElementById('addTarefa');
var btn_excluirTarefa = document.getElementById('removerTarefa');
var form = document.getElementById('tarefas');

btn_add.addEventListener("click", function(){
    createCheckBox();
    createImput();
    createBtnAceitar();
    createBtnRemover();
    createBr();
    
});


//<input type="text" name="tarefa" id="tarefa" class="text" autocomplete="off"/>
function createImput(){
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'tarefa2');
    elemento.setAttribute('id', 'tarefa2');
    elemento.setAttribute('autocomplete', 'off');
    elemento.setAttribute('class', 'text');
    
    form.appendChild(elemento);
};

//<input for="tarefa" class="marcarTarefa" type="checkbox"></input>
function createCheckBox(){
    var elemento = document.createElement('input');
    elemento.setAttribute('type', 'checkbox');
    elemento.setAttribute('for', 'tarefa2');
    elemento.setAttribute('class', 'marcarTarefa');

    form.appendChild(elemento);
};

// <button for="tarefa" class="aceitarTarefa">V</button>
function createBtnAceitar(){
    var elemento = document.createElement('button');
    elemento.setAttribute('for', 'tarefa2');
    elemento.setAttribute('class', 'aceitarTarefa');
    elemento.textContent = 'V';

    form.appendChild(elemento);
};

//<button for="tarefa" class="deletarTarefa">L</button>
function createBtnRemover(){
    var elemento = document.createElement('button');
    elemento.setAttribute('for', 'tarefa2');
    elemento.setAttribute('class', 'deletarTarefa');
    elemento.textContent = 'L';
    form.appendChild(elemento);
};

function createBr(){
    var elemento = document.createElement('br');
    form.appendChild(elemento);
};