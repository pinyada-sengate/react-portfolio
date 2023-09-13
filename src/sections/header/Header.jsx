import "./header.css";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Pinyada Sengate</h3>
        <p>
          With extensive experience in the field of game development and yes, I
          have a residence card (NIE) from Spain that make me available to live
          and work without any issue. I glad to offer to you my knowledge and
          the ability to adapt to new technologies and methodologies to deliver
          successful projects. I have also years working with international
          teams who have made my communication skills good enough to understand
          complex ideas and collaborate with colleagues from different
          backgrounds. I am very excited to start working in Europe to show my
          full potential.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn primary">
            My Work
          </a>
        </div>

        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
