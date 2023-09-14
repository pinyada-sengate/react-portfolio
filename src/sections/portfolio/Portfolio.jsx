import ProjectCategories from "./ProjectCategories";
import Projects from "./Projects";
import "./portfolio.css";
import data from "./data";
import { useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Check out some of my projects that i recently worked on.</p>
      <div className="container portfolio__container">
        <ProjectCategories />
        <Projects projects={projects} />
      </div>
    </section>
  );
};

export default Portfolio;
