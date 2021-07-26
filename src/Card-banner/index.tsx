import React, { ReactElement } from "react";
import css from "../css/main.css";
import g1 from "../images/g1.svg";
import g2 from "../images/g2.svg";
import g3 from "../images/g3.svg";
import g4 from "../images/g4.svg";

export interface AchivementDataProps {}

export default function CardBanner(
  props: AchivementDataProps
): ReactElement | null {
  return (
    <>
    <div className="pt-20">
      <div
        className=" mx-auto p-14 flex   w-full"
        style={{ background: "#2759AB" }}
      >
        <div className="-max-w-1366 flex mx-auto ">
        <div className="w-1/4  justify-items-center text-center ">
          <div className="flex justify-center">
          <div className="border-white border rounded-xl  p-2 w-24 h-24 flex  ">
          <img src={g1} className="  flex  p-2 " />
          </div></div>
          <h5 className="text-white pt-8 hb5">Get more time</h5>
          <h6 className="text-white  text-center pl-16 pr-16 p-2">
            Choose a term that works for you up to 84 months.
          </h6>
        </div>
        <div className="w-1/4  justify-items-center text-center">
        <div className="flex justify-center">
          <div className="border-white border rounded-xl  p-2 w-24 h-24 flex  ">
          <img src={g2} className="  flex  p-2 " />
          </div></div>
          <h5 className="text-white pt-8 hb5">No fees</h5>
          <h6 className="text-white text-center pl-16 pr-16 p-2">
            We'll never make you pay for using our service.
          </h6>
        </div>
        <div className="w-1/4  justify-items-center text-center">
        <div className="flex justify-center">
          <div className="border-white border rounded-xl  p-2 w-24 h-24 flex  ">
          <img src={g3} className="  flex  p-2 " />
          </div></div>
          <h5 className="text-white pt-8 hb5">Power of choice</h5>
          <h6 className="text-white text-center pl-16 pr-16 p-2">
            We thoroughly wet your lender so you can get best options
          </h6>
        </div>
        <div className="w-1/4  justify-items-center text-center">
        <div className="flex justify-center">
          <div className="border-white border rounded-xl  p-2 w-24 h-24 flex  ">
          <img src={g4} className="  flex  p-2 " />
          </div></div>
          <h5 className="text-white pt-8 hb5">Fast and secure</h5>
          <h6 className="text-white text-center p-2 pl-16 pr-16">
            Our expert Client Success team is here to help you along the way.
          </h6>
        </div>
      </div>
      </div>
      </div>
    </>
  );
}
