/*<li>
<label for="task-1">Learn TypeScript</label>
<input type="checkbox" id="task-1" name="Learn TypeScript" />
</li>*/

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".add");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");

const tasks: string[] = ["Learn TypeScript","Book plane flight","Learn for the exam"];

const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task) => {
        const taskElement: HTMLElement = document.createElement("li");
        taskElement.innerText = task;
        taskContainerElement.appendChild(taskElement);
    });
};

const addTask = (task: string) => {
    tasks.push(task);
}

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    tasks.push(taskNameInputElement.value);
    render();
})

render();