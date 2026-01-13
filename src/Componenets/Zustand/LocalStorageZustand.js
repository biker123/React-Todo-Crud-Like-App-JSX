const KEY = "todos-zustand";

export const loadTodosZustand = () =>{
    try {
        const dataLocalStorage = localStorage.getItem(KEY);
        return dataLocalStorage ? JSON.parse(dataLocalStorage) : [];
    } catch {
        return [];
    }
};

export const saveTodosZustand = (todoArrObj) => {
    localStorage.setItem(KEY, JSON.stringify(todoArrObj));
};