import { Home } from "../components/home/home";
import { About } from "../components/about/about";
import { Project } from "../components/project/project";
import { Reviews } from "../components/reviews/reviews";
import { Contact } from "../components/contact/contact";
import { Skill } from "../components/skill/skill";
import { Resume } from "../components/resume/resume";


export const Home_page = () => {
  return (
    <>
  
      <Home />
      <About />
      <Skill />
      <Project />
      <Resume />
      <Reviews />
      <Contact />
    </>
  );
};
