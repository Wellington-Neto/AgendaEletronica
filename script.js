var btn_add = document.getElementById('add');
var btn_addTarefa = document.getElementById('addTarefa');
var btn_excluirTarefa = document.getElementById('removerTarefa');
var form = document.getElementById('tarefas');
var box = documento.getElementById('box');


btn_add.addEventListener('click', function(){
    createImput();
})

//<input type="text" name="tarefa" id="tarefa" autocomplete="off"/>
function createImput(){
    var elemento = document.createElement('tarefa');
    elemento.setAttribute('type', 'text');
    elemento.setAttribute('name', 'tarefa2');
    elemento.setAttribute('id', 'tarefa2');
    elemento.setAttribute('autocomplete','off');
    
    box.appendChild(elemento);

}