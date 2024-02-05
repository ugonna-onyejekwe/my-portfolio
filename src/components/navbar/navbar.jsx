import "./navbar.scss";
import { icons } from "../info";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate} from "react-router-dom";

export const Navbar = () => {
  const [activate_menu, setActivate_menu] = useState(false);
  const [active_theme, setActive_theme] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const location = useLocation()
  const navigate = useNavigate();

  const deactivate_menu = () => {
    setActivate_menu(!activate_menu);
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <>
      <nav>
        <div className="container">
          <div className="logo">
            <h1>ugonna</h1>
          </div>

          <div className="action_btns">
            <div
              className={active_theme ? "theme active" : "theme"}
              onClick={() => {
                setActive_theme(!active_theme);
                theme === "light-theme"
                  ? setTheme("dark-theme")
                  : setTheme("light-theme");
              }}
            >
              <span>{icons.dark_theme_icon}</span>
              <span>{icons.light_theme_icon}</span>
            </div>

            <div className="btn">
              {location.pathname !== "/" ? 
                 <div className="back_arrow" onClick={() => navigate(-1)}>
            {icons.back_arrow}
                </div> :
              
            <div className="menu" onClick={deactivate_menu}>
              {icons.menu_icon}
            </div>
            }
           </div>
          </div>

          <div className={activate_menu ? "navigators active" : "navigators"}>
            <div className="close" onClick={deactivate_menu}>
              {icons.close_icon}
            </div>

            <div className="links">
              <a href="#home" onClick={deactivate_menu}>
                home
              </a>
              <a href="#about" onClick={deactivate_menu}>
                about me
              </a>
              <a href="#skills" onClick={deactivate_menu}>
                skills
              </a>
              <a href="#projects" onClick={deactivate_menu}>
                projects
              </a>
              <a href="#resume" onClick={deactivate_menu}>
                resume
              </a>
              <a href="#testimonial" onClick={deactivate_menu}>
                testimonials
              </a>
              <a href="#contact" onClick={deactivate_menu}>
                contact
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={activate_menu ? "backdrop active" : "backdrop"}
        onClick={deactivate_menu}
      ></div>
    </>
  );
};
