import "./detail.scss";
import { useParams } from "react-router-dom";
import { project } from "../../components/info";
import { icons } from "../../components/info";
import { Navbar2 } from "../../components/navbar2/navbar2";
import { useEffect} from "react";

export const Details = () => {
  const { name } = useParams();
  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <>
      <Navbar2 />
      {project.map((i, key) => {
        if (i.name === name) {
          return (
            <div className="detail_con">
              <div className="container">
                <div className="img" >
                  <img src={i.img2} alt="img" />
                </div>
                <div className="txt_con" >
                  <h2>{i.name}</h2>

                  <h3>description</h3>
                  <p className="txt">{i.description}</p>
                  <div className="btn">
                    <a href={i.live_link}>
                      live demo <span>{icons.live_demo_icon}</span>
                    </a>
                    <a href={i.github}>
                      github ripo <span>{icons.github}</span>
                    </a>
                  </div>

                  <h3>key features</h3>
                  {i.key_features.map((i) => {
                    return <li>{i}</li>;
                  })}
                </div>
              </div>
            </div>
          );
        }
      })}
    </>
  );
};
