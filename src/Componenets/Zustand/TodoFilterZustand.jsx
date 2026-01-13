import React from "react";
import { useTodoStoreZustand } from "./TodoStoreZustand";

export default function TodoFilterZustand() {
    
  const { filterZustand, setFilterZustand, clearCompletedZustand } = useTodoStoreZustand();

  return (
    <div className="filtering-data-div">
      <select
        value={filterZustand}
        onChange={(event) => setFilterZustand(event.target.value)}
        style={{ padding: 8 }}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>

      <button onClick={clearCompletedZustand} className="clear-btn">
        Clear Completed Data
      </button>
    </div>
  );
}
