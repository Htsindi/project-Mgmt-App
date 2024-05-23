import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState("");

  function handleChange(event) {
    setNewTask(event.target.value);
  }

  function handleClick() {
    onAdd(newTask);
    setNewTask("");
  }

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        className="w-75 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={newTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
