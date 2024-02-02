import "./about.scss";
import profile_img from "../../assets/profile_image.jpeg";
import shape1 from "../../assets/shape-1.png";
import my_resume from "../../assets/my resume.pdf";
import { icons } from "../info";

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="heading" data-aos="fade-up">
          <h2>about me</h2>
          <p className="subtitle">
            <span>my</span> introduction
          </p>
        </div>

        <div className="wrapper">
          <div className="img" data-aos="fade-right">
            <img src={profile_img} alt="" />
          </div>

          <div className="txt_con" data-aos="fade-left">
            <div className="box_con">
              <div className="box">
                <span>{icons.experience_icon}</span>
                <h3>experiences</h3>
                <p>5+ years</p>
                <img src={shape1} alt="shape" className="shape" />
              </div>
              <div className="box">
                <span>{icons.projects_icon}</span>
                <h3>completed</h3>
                <p>48+ projects</p>
                <img src={shape1} alt="shape" className="shape" />
              </div>
              <div className="box">
                <span>{icons.work_time_icon}</span>
                <h3>supports</h3>
                <p>remote 24/7</p>
                <img src={shape1} alt="shape" className="shape" />
              </div>
            </div>

            <p className="txt">
              Enthusiastic frontend maestro, I transform pixels into engaging
              digital stories. With a keen eye for design and a knack for code
              alchemy, I create immersive web experiences that captivate users.
              Always eager to tackle new challenges and push the boundaries of
              what's possible in the ever-evolving realm of web development.
            </p>
            <a href={my_resume} download>
              <button>
                download cv <span>{icons.cv_icon}</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
