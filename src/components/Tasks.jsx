import NewTask from "./NewTask.jsx";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-800 mb-2">Task Title</h2>

      <NewTask onAdd={onAddTask} />
      {tasks.length === 0 && <p>No tasks found.</p>}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-200">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-2">
              <span>{task.text}</span>
              <button
                className="text-stone-600 hover:text-red-950"
                onClick={() => onDeleteTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
