import ProjectCard from "./ProjectCard"; // Adjust the path based on your project structure
import projectsData from "../data.json"; // Replace with the correct path to your JSON data

export const AllProjects = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {projectsData.projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

