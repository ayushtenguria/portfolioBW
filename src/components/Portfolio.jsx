import ProjectCard from "./ProjectCard"; 
import projectsData from "../data.json"; 
import { Link } from "react-router-dom";

export const Portfolio = () => {
  const latestProjects = projectsData.projects.slice(0, 3); // Show only the latest 3 projects

  return (
    <div>
      <div className=" flex justify-center align-middle mb-20">
          <h1 className="text-3xl md:text-5xl font-semibold">My Work </h1>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      <Link
        to="/allProjects"
        className="block text-center mt-4 text-blue-500 hover:underline"
      >
        Show More
      </Link>
    </div>
  );
};
