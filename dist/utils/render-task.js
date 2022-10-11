export const render = (tasks, taskContainerElement) => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {
        /*<li>
            <label for="task-1">Learn TypeScript</label>
            <input type="checkbox" id="task-1" name="Learn TypeScript" />
        </li>*/
        const taskElement = document.createElement("li");
        if (task.category) {
            taskElement.classList.add(task.category);
        }
        const id = `task-${index}`;
        const labelElement = document.createElement("label");
        labelElement.innerHTML = task.name;
        // ustawiamy nazwe atrybutu for na wartosc stalej id
        labelElement.setAttribute("for", id);
        const checkboxElement = document.createElement("input");
        checkboxElement.type = "checkbox";
        checkboxElement.name = "task.name";
        checkboxElement.id = id;
        checkboxElement.checked = task.done;
        checkboxElement.addEventListener("change", () => {
            task.done = !task.done;
        });
        taskElement.appendChild(labelElement);
        taskElement.appendChild(checkboxElement);
        taskContainerElement.appendChild(taskElement);
    });
};
