// Array de tarefas
const tasks = [
    { id: 1, description: "comprar pao", checked: false },
    { id: 2, description: "passear com o cachorro", checked: false },
    { id: 3, description: "fazer o almoço", checked: false },
]
const createTaskListItem = (task, checkbox) => {
    const list = document.getElementById("todo-list");
    const toDo = document.createElement("li");

    toDo.id = task.id;
    toDo.appendChild(checkbox);
    list.appendChild(toDo);
    return toDo;
}

// Cria a checkbox por atividade
const getCheckboxInput = ({ id, description, checked }) => {
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    const wrapper = document.createElement("div");
    const checkboxId = `${id}-checkbox`;

    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.checked = checked || false;

    label.textContent = description;
    label.htmlFor = checkboxId;

    wrapper.className = "checkbox-label-container";
    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    return wrapper;
}
// Pega o id da ultima tarefa e soma 1, se não existir retorna 1
const getNewTaskId = () => {
    const lastId = tasks[tasks.length - 1]?.id;
    return lastId ? lastId + 1 : 1;
}
// Pega os dados do formulario
const getNewTaskData = (event) => {
    const description = event.target.elements.description.value;
    const id = getNewTaskId();
    return { id, description };
} 
// Cria a tarefa
const createTask = (event) => {
    event.preventDefault();
    const newTaskData = getNewTaskData(event);
    // const { id, description, checked } = newTaskData;

    const checkbox = getCheckboxInput(newTaskData);
    createTaskListItem(newTaskData, checkbox);

    tasks = [...tasks, { 
        id: newTaskData.id, 
        description: newTaskData.description, 
        checked: false }
    ];
}
// lista as atividades na tela
window.onload = function() {
    const form = document.getElementById("create-todo-form");
    form.addEventListener("submit", (event) => { createTask(event) });
    tasks.forEach((task) => {
        const checkbox = getCheckboxInput(task);
        const list = document.getElementById("todo-list");
        const toDo = document.createElement("li");
        // const button = document.createElement("button");

        toDo.id = task.id;
        toDo.appendChild(checkbox);
        // toDo.appendChild(button)
        
        list.appendChild(toDo);
    })
}