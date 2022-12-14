// interfejsy - reuzywalne typy
export class Task {
    constructor(name, done, category) {
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task created at ${this.createdAt} ${extra || ""}`);
    }
}
;
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["SCHOOL"] = "school";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
;
// wartosci czysto stringowe lub numerycne mozemy zastepowac ENUMAMI
// maja one wiekszy sens przy duzych projektach
// do zdefiniowana enuma stosujemy calmelCase, a wartosci wielkimi literami
// Category. po kropce podpowiadaja sie w liscie wszystkie enumy
// przyjmuje wartosc 3 - enumy domyslnie przyjmuja wartosci numeryczne, 
// jednakze jesli przypiszemy do nich wartosci np. = "hobby", 
// to juz zwracaja to co przypisalismy
// const category = Category.HOBBY
