//Определение класса для элемента списка задач
class Task {
    constructor(description) {
        this.description = description;
    }

    render() {
        let li = document.createElement('li');
        li.textContent = this.description;
        return li;
    }
}

//Определение класса для списка задач
class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
    }

    render() {
        const taskList = document.querySelector('.task-list');
        taskList.innerHTML = '';
        this.tasks.forEach(task => {
            let taskElement = task.render;
            taskList.appendChild(taskElement);
        });
    }
}

//Создание экземпляра для списка задач
const toDoList = new ToDoList();

//Добавление обработчика события для кнопки "Add to task"
document.querySelector('.task-submit').addEventListener('click', function(event) {
    event.preventDefault();
    const taskInput = document.querySelector('.task-input');
    const taskDescription = taskInput.value.trim();

    if(taskDescription !== '') {
        toDoList.addTask(taskDescription);
        toDoList.render();
        taskInput.value = '';
    }
});