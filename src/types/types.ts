// interfejsy - reuzywalne typy

export interface Task {
    name: string;
    done: boolean;
    // opcional properties "?" - obiekty task moga miec wlasciwosc category, ale nie musza (czyli TS nie wyrzuci bledu jesli zabrabraknie lub dodamy ta wlasciwosc)
    // union type, zbior dwoch roznych typow np. string | numer
    category?: Category;
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