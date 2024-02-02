import "./home.scss";
import profile_img from "../../assets/profile_image.jpeg";
import { icons } from "../info";

export const Home = () => {
  return (
    <>
      <div className="home " id="home">
        <div className="container">
          <h3 className="subtitle" >
            hello, <span>my name is</span>
          </h3>
          <h1>
            <span>ugonna</span> onyejekwe
          </h1>
          <p className="job" >
            i am a <span>frontend develepor</span>
          </p>

          <div className="img" >
            <img src={profile_img} alt="profile pics" />
          </div>

          <p className="txt" >
            Passionate frontend developer with a flair for crafting visually
            stunning and user-centric web experiences. Proficient in turning
            design concepts into seamless, responsive code. Dedicated to staying
            at the forefront of emerging technologies to bring innovative
            solutions to every project.
          </p>
          <div className="social">
            <a
              href="https://github.com/ugonna-onyejekwe"
              target="_blank"
             
            >
              {icons.github}
            </a>
            <a
              href="https://x.com/ugonna013308?t=AYJuNfNV5YOL-BUPw44NBg&s=09"
              target="_blank"
            
            >
              {icons.x}
            </a>
            <a
              href="https://www.linkedin.com/in/ugonna-onyejekwe-28b361289/"
              target="_blank"
              
            >
              {icons.linkedin}
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61555629357469"
              target="_blank"
           
            >
              {icons.facebook}
            </a>
          </div>

          <a href="#contact" >
            <button>
              say hello <span>{icons.send_arrow}</span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};
