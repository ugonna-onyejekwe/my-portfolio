import "./more_pro.scss";
import { project } from "../../components/info";
import { icons } from "../../components/info";
import { Link } from "react-router-dom";
import shape from "../../assets/shape-1.png";

import { useEffect } from "react";


export const More_pro = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
     
      <div className="more_pro container">
        <div className="project_wrapper">
          {project.map(
            ({ name, skill, img, description, live_link, github }, key) => {
              return (
                <>
                  <div className="box" key={key} >
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
      </div>
    </>
  );
};
