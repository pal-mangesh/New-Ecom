import React, { ReactElement } from "react";
import HeroBottomBG from "../../images/hero-bottom-bg.svg";
import ImgHeroBG from "../../images/ImgHeroBG.png";
import Button from "../../components/button";
import { Link } from "gatsby";
import css from "../../css/main.css";
export interface HeroProps {}

export default function Hero(props: HeroProps): ReactElement | null {
  return (
    <div className="bg-center bg-fixed relative bg-no-repeat overflow-hidden bg-gradient-to-t from-gray-10 to from-gray-200 ">
      <div
        className="-max-w-1366 mx-auto flex items-center "
        style={{ minHeight: "90vh" }}
      >
        <div className="  md:text-left md:flex  md:pl-40 md:pr-40">
          <div className="items-center justify-center text-center md:text-left md:items-start">
            <h5 className="font-thin  text-blue-800 border- border-yellow-400 text-center rounded-full p-2 border-2 ">
              SHOP TO GET WHAT YOU LOVE{" "}
            </h5>
            <h2 className="font-thin leading-snug text-yellow-500 tracking-widest pt-8 text-5xl ">
              TIMEPIECES THAT MAKE A STATEMENT{" "}
            </h2>
            <h5 className="md:font-extralight md:flex  md:text-4xl md:rounded-full md:pt-8  md:pl-0 md:pr-0 ">
              UP TO
              <h5 className="font-semibold   text-4xl rounded-full pl-4  pr-0 ">
                80% OFF
              </h5>
            </h5>

            <div className="my-8">
              <Link to="/apply">
                <Button title="Start Buying..." />
              </Link>
            </div>
          </div>
          <div
            className="  md:flex bg-center pl-20 overflow-hidden w-full "
            style={{
              backgroundImage: ` url(${ImgHeroBG})`,
              backgroundSize: `550px 550px`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
