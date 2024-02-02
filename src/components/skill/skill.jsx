import "./skill.scss";
import { skills } from "../info";

export const Skill = () => {
  return (
    <>
      <div className="skill_container" id="skills">
        <div className="container">
          <div className="heading">
            <h2>professional skills</h2>
            <p>
              <span>my</span> skills
            </p>
          </div>
          <div className="wrapper">
            {skills.map((i, key) => {
              return (
                <div className="box" key={key}>
                  <span>{i.icon}</span>
                  <p>{i.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
