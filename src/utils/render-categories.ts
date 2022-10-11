import { Category } from "../types/tyles";

const renderCategories = (categories: Category[], categoriesContainerElement: HTMLElement, selectedCategory: Category) => {
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

export default renderCategories;