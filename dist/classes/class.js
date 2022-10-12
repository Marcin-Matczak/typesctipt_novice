class TaskClass {
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
export default TaskClass;
// public - private
// domynie wszystkie properties sa publiczne czyli metoda lub wlasciwosc jest dostepna po zainstancjonowaniu dane klasy
// private - zostaje w klasie i nie jest wypychane na zewnatrz czyli nie jest dostepne w instacji
