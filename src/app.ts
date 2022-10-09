const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".add");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");

// ustawienie typowania w tablicy zawierajacej obiekty
const tasks: {
    name: string;
    done: boolean;
}[] = [
    {
        name: "Learn TypeScript",
        done: false,
    },
    {
        name: "Book plane flight",
        done: true,
    },
    {
        name: "Learn for the exam",
        done: false,
    },
];

const render = () => {
    taskContainerElement.innerHTML = "";
    tasks.forEach((task, index) => {

        /*<li>
            <label for="task-1">Learn TypeScript</label>
            <input type="checkbox" id="task-1" name="Learn TypeScript" />
        </li>*/

        const taskElement: HTMLElement = document.createElement("li");  
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

const addTask = (taskName: string) => {
    tasks.push({name: taskName, done: false});
}

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    addTask(taskNameInputElement.value);
    render();
})

render();