import React, { ReactElement } from "react";
import MainMenu, { IMenuItem } from "../main-menu";
import logo from "../../images/logo.svg";
import dropdown from "../../images/dropdow.png";
import search from "../../images/search.png";
import campare from "../../images/campare.png";
import wishlist from "../../images/wishlist.png";
import cart from "../../images/cartqty.png";
import rupee from "../../images/rupee.png";

import Button from "../../components/button";
export interface HeaderProps {
  mainMenu: IMenuItem[];
  safeAreaPadding?: number;
}

export default function Header(props: HeaderProps): ReactElement | null {
  return (
    <>
      <div
        className="px-8 bg-white  fixed w-full"
        style={{ minHeight: props.safeAreaPadding + "px", zIndex: 1000000 }}
      >
        <div className=" md:flex py-4 ">
          <div className=" md:flex ">
            <div>
              <img src={logo} />
            </div>
            <div className=" text-center md:flex items-center text-yellow-600 ">
              E-Commerce Online shopping
            </div>
          </div>
          <div className=" hidden  md:flex flex-1 justify-end items-center">
            <div className="flex text-center justify-center pr-40">
              <MainMenu mainMenu={props.mainMenu} />
            </div>
            <div className=" text-center justify-items-center align-middle flex-row ">
              <div className="flex">
                <div className="font-semibold flex ">Support</div>
                <div className=" flex pl-4  ">( + 91 9999999999)</div>
              </div>
              <div className="flex">
                <div className="font-semibold flex ">Email: </div>
                <div className=" flex pl-4  ">Info@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-16 bg-yellow-500">
          <div className="flex justify-center items-center">
            <div className="hidden md:flex md:justify-center  md:text-md md:w-1/3">
              Shop By Department
            </div>
            <div className=" items-center justify-center w-44 flex md:w-1/2 md:items-center md:justify-center">
              <input 
                className=" md:text-sm "
                type="text"
                placeholder="Enter What You Want to Search..."
                
              />
              <div className="flex  pt-3 pb-3 ">
                <div className="w-10 p-2 bg-gray-800  rounded-full h-10 flex">
                  <img src={search} />
                </div>
              </div>
            </div>
            <div className=" hidden md:flex justify-end pt-4 w-1/4">
              <div className="w-10 h-14">1</div>
              <div className="w-10 h-14">2</div>
              <div className="w-10 h-14">3</div>
              <div className="w-10 h-14">4</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
