import { Category } from "../types/tyles";

 /*<li>
      <input
          type="radio"
          name="category"
          value="general"
          id="category-general"
      />
      <label for="category-general">general</label>
  </li>*/

// oznacznie typu funkcji void - oznacza ze funkcja nie zwraca zadnej wartosci. W tym przypadku jest odpowiedzialna za renderowanie
const renderCategories = (categories: Category[], 
  categoriesContainerElement: HTMLElement, 
  inputChangeCallback: (category: Category) => void) => {

  categories.forEach((category) => {
    const categoryElement: HTMLElement = document.createElement("li");
    const radioInputElement: HTMLInputElement = document.createElement("input");

    radioInputElement.type = "radio";
    radioInputElement.name = "category";
    radioInputElement.value = category;
    radioInputElement.id = `category-${category}`;
    radioInputElement.addEventListener("change", () => {
        inputChangeCallback(category);
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