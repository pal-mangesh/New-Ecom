import React, { ReactElement } from "react";
import MainMenu, { IMenuItem } from "../main-menu";
import logo from "../../images/logo.svg";
import Button from "../../components/button";
export interface HeaderProps {
  mainMenu: IMenuItem[];
  safeAreaPadding?: number;
}

export default function Header(props: HeaderProps): ReactElement | null {
  return (
    <>
      <div
        className="px-8 bg-white shadow-lg fixed w-full"
        style={{ minHeight: props.safeAreaPadding + "px", zIndex: 1000000 }}
      >
        <div className="flex py-4 ">
          <div className=" flex ">
            <div>
              <img src={logo} />
            </div>
            <div className=" flex items-center text-yellow-600 ">Power Finance Solutions</div>
          </div>
          <div className="flex flex-1 justify-end items-center">
            
            <div className="flex text-center justify-center">
              <MainMenu mainMenu={props.mainMenu} />
            </div>
            <div>
              <Button title="Apply Now"/>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
