import ProjectSidebar from "./components/ProjectSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  //id for project selected, null for adding new project, undefined for nothing selected
  function handlesStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  //to obtain data input for new project
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined, //new project and close input form
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleCancelAddingProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  //function for displaying project details from ProjectSidebar
  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  //function to delete project in selectedProject
  const handleDeleteProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId,
        ),
      };
    });
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId,
  );

  let content = (
    <SelectedProject project={selectedProject} onDelete={handleDeleteProject} />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddingProject}
      />
    );
  } else if (projectsState.SelectedId === undefined) {
    content = <NoProjectSelected onStartAddProject={handlesStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar
        onStartAddProject={handlesStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
//null adding a new project, undefined doing nothing,
