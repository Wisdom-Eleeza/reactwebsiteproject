import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_1.jpg";
import StoryImage from "../../images/about1.jpg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from "../../images/about3.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem
        veritatis, sapiente consequatur vitae enim sed nesciunt animi. Lorem
        ipsum dolor sit amet.
      </Header>

      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam voluptas beatae sapiente quae quam cum quidem!
              Exercitationem deleniti incidunt sed.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, voluptas excepturi. Tenetur repellat ipsa ut laboriosam maiores recusandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              delectus nulla, tempore alias eligendi magnam vero voluptate
              excepturi qui laudantium dolorum saepe eum minima, error magni,
              quibusdam voluptatibus! Voluptatibus, animi!
            </p>
          </div>
        </div>
      </section>


      <section className="about__vision">
        <div className="container about__vision-container">
          
          <div className="about__section-content">
            <h1>Our vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam voluptas beatae sapiente quae quam cum quidem!
              Exercitationem deleniti incidunt sed.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, voluptas excepturi. Tenetur repellat ipsa ut laboriosam maiores recusandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              delectus nulla, tempore alias eligendi magnam vero voluptate
              excepturi qui laudantium dolorum saepe eum minima, error magni,
              quibusdam voluptatibus! Voluptatibus, animi!
            </p>
          </div>

          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision Image" />
          </div>
        </div>
      </section>



      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam voluptas beatae sapiente quae quam cum quidem!
              Exercitationem deleniti incidunt sed.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Provident, voluptas excepturi. Tenetur repellat ipsa ut laboriosam maiores recusandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              delectus nulla, tempore alias eligendi magnam vero voluptate
              excepturi qui laudantium dolorum saepe eum minima, error magni,
              quibusdam voluptatibus! Voluptatibus, animi!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
