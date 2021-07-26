import React, { ReactElement } from "react";
import Heading from "../../components/heading";
import css from "../../css/main.css";
import g5 from "../../images/g5.svg";
import g6 from "../../images/g6.svg";
import g7 from "../../images/g7.svg";
import bgsec3 from "../../images/bg sec 3.png";

export interface AchivementAndCriteriaProps {}

export default function AchivementAndCriteria(
  props: AchivementAndCriteriaProps
): ReactElement | null {
  return (
    <>
      <div className="pt-40 ">
        <div
          className="  p-8 pl-0 flex  w-7/12 rounded-r-3xl"
          style={{ background: "#2759AB" }}
        >
          <div className="flex w-10/12 mx-auto ">
            <div className="w-1/3 flex   justify-center ">
              <div className="border-white border rounded-xl flex justify-center p-2 w-24 h-24  ">
                <img src={g5} className=" flex justify-items-center p-2" />
              </div>
              <div className="p-4 pr-4 ">
                <div className="flex align-middle">
                  <h4 className="text-white  justify-items-start">18264 +</h4>
                </div>
                <div className="flex align-middle">
                  <h6 className="text-white h7 justify-items-start">
                    Loans Increase
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex  justify-center ">
              <div className="border-white border rounded-xl justify-center p-2 w-24 h-24 flex ">
                <img src={g6} className="flex p-2" />
              </div>
              <div className="p-4 pr-4 ">
                <div className="flex align-middle">
                  <h4 className="text-white  justify-items-start">328 k</h4>
                </div>
                <div className="flex align-middle">
                  <h6 className="text-white h7 justify-items-start">
                    Project Done
                  </h6>
                </div>
              </div>
            </div>
            <div className="w-1/3 flex   justify-center ">
              <div className="border-white border rounded-xl justify-center p-2 w-24 h-24 flex ">
                <img src={g7} className="flex p-2" />
              </div>
              <div className="p-4 pr-4 ">
                <div className="flex align-middle">
                  <h4 className="text-white  justify-items-start">100 %</h4>
                </div>
                <div className="flex align-middle">
                  <h6 className="text-white h7 justify-items-start">
                    Happy Clients
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" relative"><img src={bgsec2} className=" w-full h-96 "/> */}
      <div className=" -max-w-1366 flex mx-auto pb-56">
        <div className="w-2/3 pt-20">
          <Heading position="start">
            <h3 className="">CRITERIA</h3>
          </Heading>
          <h6 className="text-justify pt-8 pr-40 text-gray-600">
            It will simply take a couple of minutes of your time to finish your
            loan offer form. We are committed to helping you secure the loan
            amount you require and can usually tell you the result of your
            application straight away. Securing you the funds you require, when
            you require them most. <br/><br/>We don't have to know your life history, only
            a couple of vital details; you should be more than 18, have a
            regular salary, have a permanent address and, hold a legitimate
            checking account to be qualified to apply. Likewise depending upon
            your residential state may confine the loan lenders accessible that
            could offer you financing. There will be no requirement for an up
            close and personal gathering, a phone meet or for you to present any
            paperwork.
          </h6>
        </div>
        <div className="w-1/3 relative ">
        <img src={bgsec3} className="w-full  absolute -m-32  " style={{zIndex:-20}} />
        </div>
      </div>
    </>
  );
}
