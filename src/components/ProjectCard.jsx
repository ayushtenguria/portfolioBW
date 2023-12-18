const ProjectCard = ({ project }) => {
  const { title, imgURL, description, link } = project;

  return (
    <div className="max-w-md mx-auto mt-4 p-4 bg-white shadow-lg rounded-lg">
      <img
        src={imgURL}
        alt={title}
        className="w-full h-32 object-cover mb-4 rounded-md"
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Visit
      </a>
    </div>
  );
};

export default ProjectCard;
