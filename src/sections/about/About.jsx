import "./about.css";
import AboutImage from "../../assets/about.jpg";
import CV from "../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Me" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>

          <p>
            Professionally, I have honed my skills as a backend programmer over
            3+ years, specializing in JavaScript and NodeJS. And I have worked
            in Angular and Ruby on Rails projects in my previous company. I am
            also interested in making mobile apps and the latest app made by
            Flutter and Dart. My experience collaborating with international
            teams has provided me with excellent communication and teamwork
            skills, enabling seamless interaction with colleagues from diverse
            backgrounds. I believe in fostering a positive and collaborative
            work environment, as it brings out the best in each team member and
            enhances overall productivity.
          </p>
          <p>
            I would be incredibly grateful for the opportunity to discuss my
            qualifications further in an interview. Check out my resume below!
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
