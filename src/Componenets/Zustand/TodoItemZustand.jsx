import { useTodoStoreZustand } from "./TodoStoreZustand";

export default function TodoItemZustand({ curTodoProps, indexProps }) {

  const { deleteTodoZustand, toggleTodoZustand, startEditTodoInputZustand } = useTodoStoreZustand();

  return (
    <li className="list-items-all">
      <div className="first-items-list-div">
        <input
          type="checkbox"
          checked={curTodoProps.completed}
          onChange={() => toggleTodoZustand(curTodoProps.id)}
        />

        <span
          style={{
            textDecoration: curTodoProps.completed ? "line-through" : "none",
            opacity: curTodoProps.completed ? 0.6 : 1,
          }}
        >
          {indexProps + 1}:- {curTodoProps.title}
        </span>
      </div>
      <div className="items-btnlist-todo">
        {/* ✅ Edit করলে store এ editTodo set হবে and ekhane object pathacchi argument e full kono id title eisob hobe na */}
        <button className="edit-btn" onClick={() => startEditTodoInputZustand(curTodoProps)}>
          Edit
        </button>
        {/* delete id dhore */}
        <button className="delete-btn" onClick={() => deleteTodoZustand(curTodoProps.id)}>
          Delete
        </button>
      </div>
    </li>
  );
}
