import { Task, Category } from "./types/types.js";
import render from "./utils/render-tasks.js";
import renderCategories from "./utils/render-categories.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".add");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category; // mozna dodac selectedRadioelement.value as Category - type casting

// type literal - zawezona deklaracja np. let type: "general" | "school" | "hobby" etc. // ZAMIENIONE NA ENUMY
const categories: Category[] = [Category.GENERAL, Category.WORK, Category.SCHOOL, Category.HOBBY];

// ustawienie typowania w tablicy zawierajacej obiekty
const tasks: Task[] = [
    {
        name: "Learn TypeScript",
        done: false,
        category: Category.GENERAL,
    },
    {
        name: "Book plane flight",
        done: true,
        category: Category.WORK
    },
    {
        name: "Learn for the exam",
        done: false,
        category: Category.SCHOOL,
    },
    {
        name: "Play guitar",
        done: false,
        category: Category.HOBBY,
    },
];

// zamiast {title: string, done: boolean} mozemy opisac zdefiniowanym wczesniej interfejse Task
const addTask = (task: Task) => {
    tasks.push(task);
}

const updateSelectedCategory = (newCategory: Category) => {
    selectedCategory = newCategory;
}
 // wyszukujemy input typu radio, ktory jest zaznaczony
 //const selectedRadioelement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
addButtonElement.addEventListener('click', (event: Event) => {
    event.preventDefault();
    addTask({name: taskNameInputElement.value, done: false, category: selectedCategory});
    render(tasks, taskContainerElement);
});

// Tuple

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["Send the status of workflow", Category.WORK, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

addTask({name: taskName, category: taskCategory, done: taskDoneStatus});

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, taskContainerElement);





// type narrowing and type unknown - additional example
// sposob na ograniczanie nieznanyc wartosci

/*
let get = (response: unknown) => response;

const logFixed =(v: number) => {
    console.log(v.toFixed());
}

logFixed(2.1);

let value = get(2.3);
if (typeof value === "number") {
    logFixed(value);
}
*/
