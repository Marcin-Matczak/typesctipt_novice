const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".add");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");

// interfejsy - reuzywalne typy

interface Task {
    name: string;
    done: boolean;
    // oprional properties "?" - obiekty task moga miec wlasciwosc category, ale nie musza (czyli TS nie wyrzuci bledu jesli zabrabraknie lub dodamy ta wlasciwosc)
    category?: string;
}

const categories: string[] = ["general", "work", "school", "hobby"];

// ustawienie typowania w tablicy zawierajacej obiekty
const tasks: Task[] = [
    {
        name: "Learn TypeScript",
        done: false,
        category: "general",
    },
    {
        name: "Book plane flight",
        done: true,
        category: "work",
    },
    {
        name: "Learn for the exam",
        done: false,
        category: "school",
    },
    {
        name: "Play guitar",
        done: false,
        category: "hobby",
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

// zamiast {title: string, done: boolean} mozemy opisac zdefiniowanym wczesniej interfejse Task
const addTask = (task: Task) => {
    tasks.push(task);
}

addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    addTask({name: taskNameInputElement.value, done: false});
    render();
})

render();