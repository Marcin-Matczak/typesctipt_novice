/*<li>
<label for="task-1">Learn TypeScript</label>
<input type="checkbox" id="task-1" name="Learn TypeScript" />
</li>*/
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector(".add");
const taskContainerElement = document.querySelector(".tasks");
const tasks = ["Learn TypeScript", "Book plane flight", "Learn for the exam"];
const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement = document.createElement("li");
        taskElement.innerText = task;
        taskContainerElement.appendChild(taskElement);
    });
};
const addTask = (task) => {
    tasks.push(task);
};
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    tasks.push(taskNameInputElement.value);
    render();
});
render();
