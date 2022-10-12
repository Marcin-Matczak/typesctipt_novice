// interfejsy - reuzywalne typy

export class Task {
    public name: string;
    public done: boolean;
    public category?: Category;

    private createdAt: Date;

    constructor(name: string, done: boolean, category: Category) {
      this.name = name;
      this.done = done;
      this.category = category;
      this.createdAt = new Date();
    }

    logCreationDate(extra: string){
      console.log(`Task created at ${this.createdAt} ${extra || ""}`);
    }
};

export enum Category{
    GENERAL = "general",
    WORK = "work",
    SCHOOL = "school",
    HOBBY = "hobby",
  };


// wartosci czysto stringowe lub numerycne mozemy zastepowac ENUMAMI
// maja one wiekszy sens przy duzych projektach
// do zdefiniowana enuma stosujemy calmelCase, a wartosci wielkimi literami

// Category. po kropce podpowiadaja sie w liscie wszystkie enumy
// przyjmuje wartosc 3 - enumy domyslnie przyjmuja wartosci numeryczne, 
// jednakze jesli przypiszemy do nich wartosci np. = "hobby", 
// to juz zwracaja to co przypisalismy
// const category = Category.HOBBY