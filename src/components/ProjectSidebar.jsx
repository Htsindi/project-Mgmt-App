import Button from "./Button";

export default function ProjectSidebar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md: w-72 rounded-r-xl">
      <h2 className="text-2xl font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul></ul>
    </aside>
  );
}
