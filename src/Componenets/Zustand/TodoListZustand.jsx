import React from "react";
import TodoItemZustand from "./TodoItemZustand";
import { useTodoStoreZustand } from "./TodoStoreZustand";

export default function TodoListZustand() {
  const todoDataZustandVar = useTodoStoreZustand((state) => state.todoArrObj);

  const filterZustandVar = useTodoStoreZustand((state) => state.filterZustand);

  // ✅ loader state //
  const isLoading = useTodoStoreZustand((state) => state.isLoading);

  // filter data //
  const filterNewVarData = todoDataZustandVar.filter((curItem) => {
    // ✅ ALL case === "all" //
    if (filterZustandVar === "all") return true;
    if (filterZustandVar === "completed") return curItem.completed;
    if (filterZustandVar === "pending") return !curItem.completed;
  });

  // ✅ Loader //
  if (isLoading) {
    return (
      <div className="fullscreen-loader">
        <div className="loader-box">
          <div className="spinner"></div>
          <p>Loading Todos...</p>
        </div>
      </div>
    );
  }

  if (!filterNewVarData.length)
    return <div className="nothing-data-div">No Todos Found</div>;

  return (
    <ul className="todo-list-zustand">
      {filterNewVarData?.map((curTodo, index) => (
        <TodoItemZustand
          key={curTodo.id}
          curTodoProps={curTodo}
          indexProps={index}
        />
      ))}
    </ul>
  );
}
