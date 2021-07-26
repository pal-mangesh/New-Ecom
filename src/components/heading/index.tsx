import React, { ReactElement } from "react";
import css from "../../css/main.css";
import Line from "../../images/Line.svg";

export interface HeadingProps {
  children?: any;
  position?: "start" | "center" | "end";
}

export default function Heading(props: HeadingProps): ReactElement | null {
  return (
    <>
      <div className={` flex justify-${props.position || "start"} `}>
        <div className="flex align-middle ">
          <img src={Line} className="" />
          <div className="flex heading pl-4 pr-4">{props.children}</div>
          <img src={Line} className="" />
        </div>
      </div>
    </>
  );
}
