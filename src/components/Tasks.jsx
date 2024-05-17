import NewTask from "./NewTask";

export default function Tasks({ tasks, onAddTaskProp, onDeleteTaskProp }) {
  return (
    <Section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAddTaskProp} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This Project has no tasks. Add Tasks.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100 ">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDeleteTaskProp(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}
