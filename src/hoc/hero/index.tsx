import React, { ReactElement } from "react";
import HeroBottomBG from "../../images/hero-bottom-bg.svg";
import ImgHeroBG from "../../images/hero-bg.png";
import Button from "../../components/button";
import { Link } from "gatsby";
import css from "../../css/main.css";
export interface HeroProps {}

export default function Hero(props: HeroProps): ReactElement | null {
  const heroFeatures = [
    {
      title: "Keine Bonitätsprüfung",
    },
    { title: "Keine Wartezeit" },
    { title: "100% Safe" },
  ];
  return (
    
    <div
      className="bg-center bg-cover bg-fixed relative bg-no-repeat overflow-hidden "
      style={{  backgroundImage:` url(${ImgHeroBG})`, }}
    > 
    <div style={{
      width:"310px",
      zIndex:1000,
      height:"150%",
      right:"-100px",
      transform: "rotateZ(20deg)"
    }} className="absolute bg-yellow-600"/>
      <div
        className="-max-w-1366 mx-auto flex items-center "
        style={{ minHeight: "80vh" }}
      >
        <div className="text-left" style={{ maxWidth: "512px" }}>
          <h5 className="font-thin text-base text-white border- border-yellow-600 text-center rounded-full p-2 border-2 ">
            GET PERSONAL & BUSINESS LOANS UP TO $ 35,000
          </h5>
          <h2 className="font-extrabold text-yellow-600 tracking-widest pt-8  text-9xl">
            LOANS
          </h2>
          <h5 className="font-semibold  text-white text-4xl rounded-full pt-8 p-2  pr-0 ">
            FOR YOUR GOOD FUTURE !!
          </h5>

          <h6 className="text-lg font-medium text-white p-2">
            Rates from 3.95% APR in just 2 minutes | Apply in minutes Your Needs
            - Your Way | NO Origination Fees
          </h6>
          <div className="my-8">
            <Link to="/apply">
              <Button title="Read More" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  
  );
}
