export default function ProjectSidebar() {
  return (
    <aside className="w-1/3 py-16 px-8 bg-stone-900 text-stone-50 md: w-72 rounded-r-xl">
      <h2 className="text-2xl font-bold uppercase md:text-xl text-stone-200">
        My Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
}
