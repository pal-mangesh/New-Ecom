import React, { ReactElement } from "react";
import css from ".././../css/main.css";

export interface ButtonProps {
  title: string;
  onClick?: any;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  title,
  onClick,
  size,
}: ButtonProps): ReactElement | null {
  const onClickHandler = (e: any) => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <button
      className="button-style text-white py-2 px-8 "
      onClick={onClickHandler}
    >
      {title}
    </button>
  );
}
