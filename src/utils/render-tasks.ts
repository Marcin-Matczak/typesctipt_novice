import { Task } from "../types/types";

const render = (tasks: Task[], taskContainerElement: HTMLElement) => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {

        /*<li>
            <label for="task-1">Learn TypeScript</label>
            <input type="checkbox" id="task-1" name="Learn TypeScript" />
        </li>*/

        const taskElement: HTMLElement = document.createElement("li");

        if (task.category) {
            taskElement.classList.add(task.category);
        }
        
        const id: string = `task-${index}`;

        const labelElement: HTMLLabelElement = document.createElement("label");        
        labelElement.innerHTML = task.name;

        // ustawiamy nazwe atrybutu for na wartosc stalej id
        labelElement.setAttribute("for", id);

        const checkboxElement: HTMLInputElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = "task.name";
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        })

        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);

        taskContainerElement.appendChild(taskElement);
    });
};

export default render;