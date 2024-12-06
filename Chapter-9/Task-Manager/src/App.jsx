import { useState } from 'react';
import NewProjects from './components/NewProjects.jsx';
import NoProjects from './components/NoProjects.jsx';
import ProjectsSidebar from './components/ProjectsSidebar.jsx';
import SeletectedProject from './components/SelectedProject.jsx';
function App() {
  const [projectManagement, setProjectManagement] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });


  function handleProjectManagement() {
    setProjectManagement((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: null,
      };
    });
  }

  function handleAddTask(text) {
    setProjectManagement((prevProject) => {
      const newTask = {
        text: text,
        projectId: prevProject.selectedProjectId,
        id: Math.random(),
      };
      return {
        ...prevProject,
        tasks: [newTask, ...prevProject.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectManagement((prevProject) => {
      return {
        ...prevProject,
        tasks: prevProject.tasks.filter(
          (task) => task.id !== id
        ),
      };
    });
  }
  function handleCancelAddProject() {
    setProjectManagement((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectedProject(id) {
    setProjectManagement((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: id,
      };
    });
  }
  function handleAddProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectManagement((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: [...prevProject.projects, newProject],
      };
    });
  }
  function handleDeleteProject() {
    setProjectManagement((prevProject) => {
      return {
        ...prevProject,
        selectedProjectId: undefined,
        projects: prevProject.projects.filter(
          (project) => project.id !== projectManagement.selectedProjectId
        ),
      };
    });
  }
  let SelectedProject = projectManagement.projects.find(
    (project) => project.id == projectManagement.selectedProjectId
  );

  let content = (
    <SeletectedProject
      project={SelectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectManagement.tasks}
    />
  );
  if (projectManagement.selectedProjectId === undefined) {
    content = <NoProjects ClickAddProject={handleProjectManagement} />;
  }
  if (projectManagement.selectedProjectId === null) {
    content = (
      <NewProjects onAdd={handleAddProject} onCancel={handleCancelAddProject} />
    );
  }
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar
        ClickAddProject={handleProjectManagement}
        projects={projectManagement.projects}
        onSelect={handleSelectedProject}
        selectedProjectId={projectManagement.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
