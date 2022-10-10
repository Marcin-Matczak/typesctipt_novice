const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".add");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category; // mozna dodac selectedRadioelement.value as Category - type casting

// type aliasing - 
type Category = "general" | "work" | "school" | "hobby"; 


// interfejsy - reuzywalne typy
interface Task {
    name: string;
    done: boolean;
    // oprional properties "?" - obiekty task moga miec wlasciwosc category, ale nie musza (czyli TS nie wyrzuci bledu jesli zabrabraknie lub dodamy ta wlasciwosc)
    // union type, zbior dwoch roznych typow np. string | numer
    category?: Category;
}

// type literal - zawezona deklaracja np. let type: "general" | "school" | "hobby" etc.


const categories: Category[] = ["general", "work", "school", "hobby"];

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

const renderCategories = () => {
    /*<li>
        <input
            type="radio"
            name="category"
            value="general"
            id="category-general"
        />
        <label for="category-general">general</label>
  </li>*/

  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const radioInputElement: HTMLInputElement = document.createElement("input");
    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
        selectedCategory = category;
    });

    const labelElement: HTMLLabelElement = document.createElement("label");
    labelElement.setAttribute("for", `category-${category}`);
    labelElement.innerText = category;

    categoryElement.appendChild(radioInputElement);
    categoryElement.appendChild(labelElement);

    categoriesContainerElement.appendChild(categoryElement);

  })
};

// zamiast {title: string, done: boolean} mozemy opisac zdefiniowanym wczesniej interfejse Task
const addTask = (task: Task) => {
    tasks.push(task);
}

addButtonElement.addEventListener('click', (event: Event) => {
    // wyszukujemy input typu radio, ktory jest zaznaczony
    //const selectedRadioelement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
    event.preventDefault();
    addTask({name: taskNameInputElement.value, done: false, category: selectedCategory});
    render();
})

renderCategories();
render();