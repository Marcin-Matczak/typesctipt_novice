import render from "./utils/render-tasks.js";
import renderCategories from "./utils/render-categories.js";
const taskNameInputElement = document.querySelector("#name");
const addButtonElement = document.querySelector(".add");
const taskContainerElement = document.querySelector(".tasks");
const categoriesContainerElement = document.querySelector(".categories");
let selectedCategory; // mozna dodac selectedRadioelement.value as Category - type casting
// type literal - zawezona deklaracja np. let type: "general" | "school" | "hobby" etc.
const categories = ["general", "work", "school", "hobby"];
// ustawienie typowania w tablicy zawierajacej obiekty
const tasks = [
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
const addTask = (task) => {
    tasks.push(task);
};
const updateSelectedCategory = (newCategory) => {
    selectedCategory = newCategory;
};
// wyszukujemy input typu radio, ktory jest zaznaczony
//const selectedRadioelement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
addButtonElement.addEventListener('click', (event) => {
    event.preventDefault();
    addTask({ name: taskNameInputElement.value, done: false, category: selectedCategory });
    render(tasks, taskContainerElement);
});
renderCategories(categories, categoriesContainerElement, updateSelectedCategory);
render(tasks, taskContainerElement);
