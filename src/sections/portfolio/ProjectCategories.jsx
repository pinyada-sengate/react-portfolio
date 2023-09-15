import { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("all");

  function changeCategoryHandler(category) {
    console.log(category);
    setActiveCategory(category);
    onFilterProjects(category);
  }

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          onChangeCategory={() => changeCategoryHandler(category)}
          className={`btn cat_btn ${
            activeCategory === category ? "primary" : "white"
          }`}
        />
      ))}
    </div>
  );
};

export default ProjectCategories;
