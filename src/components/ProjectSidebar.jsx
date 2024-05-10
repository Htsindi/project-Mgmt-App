import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md: w-72 rounded-r-xl">
      <h2 className="text-2xl font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button className="w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800">
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
