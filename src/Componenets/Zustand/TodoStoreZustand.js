import { create } from "zustand";
import { loadTodosZustand, saveTodosZustand } from "./LocalStorageZustand";

export const useTodoStoreZustand = create((set, get) => ({

    // loading loader //
    isLoading: true,

    // initial array empty first time always //
    todoArrObj: [],

    // filter all | completed | pending //
    filterZustand: "all",

    // edit update state //
    editTodoInput: null,

    // ✅ load todos with 1500ms delay
    loadTodosWithDelayZustand: () => {
        set({ isLoading: true });

        setTimeout(() => {
            const todosArrNewloading = loadTodosZustand(); // local storage helper function add ache //
            set({
                todoArrObj: todosArrNewloading,
                isLoading: false,
            });
        }, 1200);
    },


    // add todo //
    addTodoZustand: (todoTitle) => {
        if (!todoTitle.trim()) return;
        set((state) => {
            const addListTodos = {
                id: Date.now(),
                title: todoTitle.trim(),
                completed: false,
            };
            const updatedTodos = [addListTodos, ...state.todoArrObj];
            // local storage //
            saveTodosZustand(updatedTodos);
            return {
                todoArrObj: updatedTodos,
            }
        });
    },


    // delete todo //
    deleteTodoZustand: (id) => {
        // set((state) => ({
        //     todoArrObj: state.todoArrObj.filter((curItemId) => curItemId.id !== id),
        // }));

        // set((state) => {
        //     const updatedTodos = state.todoArrObj.filter((curItemId) => curItemId.id !== id);
        //     return{
        //         todoArrObj: updatedTodos,
        //     }
        // });

        const updatedTodos = get().todoArrObj.filter((curItemId) => curItemId.id !== id);
        // local storage //
        saveTodosZustand(updatedTodos);
        set({
            todoArrObj: updatedTodos,
        });
    },


    // Toggle completed when click to checkbox //
    toggleTodoZustand: (id) => {
        set((state) => {
            const updatedTodos = state.todoArrObj.map((curItem) => {
                return curItem.id === id ? { ...curItem, completed: !curItem.completed } : curItem;
            })
            // local storage //
            saveTodosZustand(updatedTodos);
            return {
                todoArrObj: updatedTodos,
            }
        });
    },


    // filtering //
    setFilterZustand: (value) => {
        set({
            filterZustand: value,
        });
    },


    // clearCompleted //
    clearCompletedZustand: () => {
        const updatedTodos = get().todoArrObj.filter((curItem) => !curItem.completed);
        // local storage //
        saveTodosZustand(updatedTodos);
        set({
            todoArrObj: updatedTodos,
        });
    },


    // ✅ edit start (Edit button click করলে এটা call হবে) mane input e data ta chole jabe //
    startEditTodoInputZustand: (newTodoObj) => {
        set({
            editTodoInput: {
                id: newTodoObj.id,
                title: newTodoObj.title,
            }
        });
    },

    // ✅ edit update (Update button click করলে) //
    updateTodoZustand: (id, newEditUpdateTodoTitle) => {

        const updatedTodos = get().todoArrObj.map((curItem) => curItem.id === id ?
            { ...curItem, title: newEditUpdateTodoTitle } : curItem);
        // local storage //
        saveTodosZustand(updatedTodos);
        set({
            todoArrObj: updatedTodos,
            editTodoInput: null,
        });
    },


    // ✅ cancel edit //
    cancelEditZustand: () => {
        set({
            editTodoInput: null,
        })
    },


}));