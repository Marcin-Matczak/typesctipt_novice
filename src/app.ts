import { Task, Category } from "./types/types.js";
import render from "./utils/render-tasks.js";
import renderCategories from "./utils/render-categories.js";
import TaskClass  from "./classes/class.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".add");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category; // mozna dodac selectedRadioelement.value as Category - type casting

// type literal - zawezona deklaracja np. let type: "general" | "school" | "hobby" etc. // ZAMIENIONE NA ENUMY
const categories: Category[] = [Category.GENERAL, Category.WORK, Category.SCHOOL, Category.HOBBY];

// ustawienie typowania w tablicy zawierajacej obiekty
const tasks: Task[] = [
    new Task("Learn TypeScript", false,Category.GENERAL),
    new Task("Book plane flight", true,Category.WORK),
    new Task("Learn for the exam", false,Category.SCHOOL),
    new Task("Play guitar", false,Category.HOBBY),
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
    const newTask: Task =  new Task(taskNameInputElement.value, false, selectedCategory)
    addTask(newTask);
    newTask.logCreationDate("! ! !");
    render(tasks, taskContainerElement);
});

// Tuple

type TaskAsTuple = [string, Category, boolean];

const task: TaskAsTuple = ["Send the status of workflow", Category.WORK, false];

const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, taskContainerElement);


const taskClassInstance = new TaskClass("Zadanie z constructora", false, Category.SCHOOL);

taskClassInstance.logCreationDate("!");



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
