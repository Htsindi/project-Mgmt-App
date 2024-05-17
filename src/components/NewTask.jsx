import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState(" ");

  function handleSubmit(e) {
    setEnteredTask(e.target.value);
  }

  function handleClick() {
    //validation
    if (enteredTask.trim().length === 0) {
      return;
    }
    //forward info App
    onAdd(enteredTask);
    //reset input
    setEnteredTask("");
  }

  return (
    <div className="flex items-center gap-4">
      <input
        onChange={handleSubmit}
        value={enteredTask}
        className="w-64 px-2 rounded-sm bg-stone-200"
        type="text"
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        Add Task
      </button>
    </div>
  );
}
