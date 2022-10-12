// interfejsy - reuzywalne typy

export interface Task {
    name: string;
    done: boolean;
    // opcional properties "?" - obiekty task moga miec wlasciwosc category, ale nie musza (czyli TS nie wyrzuci bledu jesli zabrabraknie lub dodamy ta wlasciwosc)
    // union type, zbior dwoch roznych typow np. string | numer
    category?: Category;
}

// type aliasing - 
export type Category = "general" | "work" | "school" | "hobby"; 