import Card from "../../components/Card";

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt="Portfolio Project" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        {project.text1 && (
          <a
            href={project.demo}
            className="btn sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.text1}
          </a>
        )}
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          {project.text2}
        </a>
      </div>
    </Card>
  );
};

export default Project;
