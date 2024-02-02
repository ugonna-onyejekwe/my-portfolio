import "./resume.scss";
import { education } from "../info";
import { experience } from "../info";
import { Box } from "../cv_box";

export const Resume = () => {
  return (
    <>
      <section className="resume" id="resume">
        <div className="heading" data-aos="fade-up">
          <h2>resume</h2>
          <p>
            <span>my</span> story
          </p>
        </div>

        <div className="wrapper container">
          <div className="box_con" data-aos="fade-up">
            <h3>education</h3>
            {education.map(({ institute, program, date, description }, key) => {
              return (
                <Box
                  key={key}
                  institute={institute}
                  program={program}
                  date={date}
                  description={description}
                />
              );
            })}
          </div>
          <div className="box_con" data-aos="fade-up">
            <h3>experience</h3>
            {experience.map(({ company, position, date, description }, key) => {
              return (
                <Box
                  key={key}
                  institute={company}
                  program={position}
                  date={date}
                  description={description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
