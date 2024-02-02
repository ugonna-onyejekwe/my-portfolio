import "./navbar2.scss";
import { icons } from "../info";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar2 = () => {
  const [active_theme, setActive_theme] = useState(false);
  const [theme, setTheme] = useState("light-theme");
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div className="nav">
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

          <div className="back_arrow" onClick={() => navigate(-1)}>
            {icons.back_arrow}
          </div>
        </div>
      </div>
    </div>
  );
};
