import "./project.scss";
import { project } from "../info";
import { icons } from "../info";
import shape from "../../assets/shape-1.png";
import { Link } from "react-router-dom";

export const Project = () => {
  return (
    <>
      <section className="portfolio" id="projects">
        <div className="container">
          <div className="heading" data-aos="fade-up">
            <h2>portfolio</h2>
            <p>
              <span>my</span> projects
            </p>
          </div>

          <div className="project_wrapper">
            {project
              .slice(0, 6)
              .map(
                ({ name, skill, img, description, live_link, github }, key) => {
                  return (
                    <>
                      <div className="box" key={key} data-aos="fade-up">
                        <div className="img">
                          <img src={img} alt="img" />
                          <div className="social">
                            <a href={github} target="_blank">
                              <span>{icons.github}</span>
                            </a>
                            <a href={live_link} target="_blank">
                              <span>{icons.live_icon}</span>
                            </a>
                          </div>
                        </div>

                        <div className="txt_con">
                          <div className="skills">
                            {skill.map((i, key) => {
                              return (
                                <p className="skill" key={key}>
                                  {i}
                                </p>
                              );
                            })}
                          </div>
                          <h3>{name}</h3>
                          <p className="txt">{description.slice(0, 100)}...</p>
                          <Link to={`/${name}`} className="readmore_arrow">
                            read more <span>{icons.arrow}</span>
                          </Link>

                          <img src={shape} alt="img" className="shape" />
                        </div>
                      </div>
                    </>
                  );
                }
              )}
          </div>

          <div className="btn">
            <Link to={"/more_projects"}>
              <button>see more</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
