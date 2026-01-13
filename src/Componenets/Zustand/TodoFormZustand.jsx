import { useEffect, useState } from "react";
import { useTodoStoreZustand } from "./TodoStoreZustand";

export default function TodoFormZustand() {
  const [titleInput, setTitleInput] = useState("");

  const addTodoVarZustand = useTodoStoreZustand((state) => state.addTodoZustand);

  const { editTodoInput, updateTodoZustand, cancelEditZustand } = useTodoStoreZustand();

  // ✅ editTodo change হলেই input এ value বসিয়ে দেবে //
  useEffect(() => {
    if (editTodoInput) {
      setTitleInput(editTodoInput.title);
    } else {
      setTitleInput("");
    }
  }, [editTodoInput]);

  // form submit btn //
  const handleSubmitFormZustand = (event) => {
    event.preventDefault();

    const titleSpace = titleInput.trim();

    if (!titleSpace) {
      return;
    }

    if (editTodoInput) {
      updateTodoZustand(editTodoInput.id, titleInput);
      return;
    }
    // ✅ Normal Add etake if else diye o kora jay if{edit update}else{add function} eirokom //
    addTodoVarZustand(titleSpace);
    console.log("Data Added Successfully");
    setTitleInput("");
  };

  return (
    <form
      onSubmit={handleSubmitFormZustand}
      className="todo-form-zustand"
      >
      <input type="text"
        value={titleInput}
        onChange={(event) => setTitleInput(event.target.value)}
        placeholder="Write a todo..."
        style={{ flex: 1, padding: 10 }}
      />
      <button
        disabled={!titleInput.trim()}
        type="submit"
        className={editTodoInput ? "active-update-btn" : "active-add-btn"}
      >
        {editTodoInput ? "Update" : "Add"}
      </button>
      
      {/* ✅ Edit mode এ Cancel button */}
      {
        editTodoInput && (
          <button onClick={cancelEditZustand} className="cancel-btn">Cancel</button>
        )
      }
    </form>
  );
}
