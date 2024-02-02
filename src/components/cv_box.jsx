import { useState } from "react";
import { icons } from "./info";

export const Box = ({ institute, program, date, description }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      <div
        className={active ? "box active" : "box"}
        onClick={() => setActive(!active)}
      >
        <h4>{institute}</h4>

        <div className="icon_con">
          {active ? icons.minus_icon : icons.plus_icon}
        </div>

        <div className="txt_con">
          <div className="col">
            <h5>{program}</h5>
            <p>{date}</p>
          </div>
          <p className="txt">{description}</p>
        </div>
      </div>
    </>
  );
};
