import React, { useEffect } from "react";
import "./App.css";
import TodoFormZustand from "./Componenets/Zustand/TodoFormZustand";
import TodoListZustand from "./Componenets/Zustand/TodoListZustand";
import TodoFilterZustand from "./Componenets/Zustand/TodoFilterZustand";
import { useTodoStoreZustand } from "./Componenets/Zustand/TodoStoreZustand";

function App() {
  const loadTodosWithDelayZustand = useTodoStoreZustand((state) => state.loadTodosWithDelayZustand);
  useEffect(() => {
    loadTodosWithDelayZustand();
  },[loadTodosWithDelayZustand])
  return (
    <React.Fragment>
      <div className="todo-app-main">
        <h2>✅ Todo Crud App (Zustand + LocalStorage)</h2>
        {/* zustand */}
        <TodoFormZustand />
        <TodoFilterZustand />
        <TodoListZustand />
      </div>
    </React.Fragment>
  );
}

export default App;
