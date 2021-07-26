import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import whyusimg from "../../images/why-us-img.png";
import bg1 from "../../images/bg1.svg";
import rw1 from "../../images/73.svg";
import rw2 from "../../images/83.svg";

export interface WhyUsProps {}

export default function WhyUS(props: WhyUsProps): ReactElement | null {
  return (
    <div className="-max-w-1366 mx-auto p-8 pt-28 pb-20 flex w-full">
      <div className="w-full flex py-8 relative md:w-1/2">
        <div>
          <img src={bg1} className=" -m-28 flex absolute " style={{zIndex:-20}} />

          <div className="w-40 h-40 bgcol absolute -bottom-12 p-4 rounded-3xl right-20 ">
            <h1 className=" flex justify-center  main-text">25</h1>
            <div className="  text-white flex justify-center  ">Years Of </div>
            <div className="  text-white flex justify-center  ">Experience</div>

          </div>
          <div></div>
        </div>
        <img src={whyusimg} className=" pt-2 flex  w-3/4" />
      </div>

      <div className="w-full py-8 md:w-1/2">
        <Heading position="start">
          <h3>WHY US</h3>
        </Heading>
        <div className="py-4">
          <h4 className="pt-2 text-gray-600">
            We Have Been Working Very Efficiently With Loan.
          </h4>
          <h6 className="pt-8 text-gray-600">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form injected.
          </h6>
        </div>
        <div className="flex">
          <div className="w-1/2  justify-center  ">
            <img src={rw1} className=" p-8 flex  w-3/4" />
            <div className="pl-6">
              <h6 className="shadow-md flex justify-center w-2/3 p-2 text-gray-600 rounded-xl">
                Advanced Analytics
              </h6>
            </div>
          </div>
          <div className="w-1/2 justify-center ">
            <img src={rw2} className=" p-8 flex  w-3/4" />
            <div className="pl-6">
              <h6 className="shadow-md flex justify-center w-2/3 p-2 text-gray-600 rounded-xl">
                Corporate Finance
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
