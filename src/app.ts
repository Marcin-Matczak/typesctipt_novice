import { Task, Category } from "./types/tyles.js";
import render from "./utils/render-tasks.js";
import renderCategories from "./utils/render-categories.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector(".add");
const taskContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement: HTMLElement = document.querySelector(".categories");

let selectedCategory: Category; // mozna dodac selectedRadioelement.value as Category - type casting

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

renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, taskContainerElement);