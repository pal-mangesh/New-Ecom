import React, { ReactElement } from "react";
import Heading from "../../components/heading";
import css from "../../css/main.css";
import g5 from "../../images/g5.svg";
import g6 from "../../images/g6.svg";
import g7 from "../../images/g7.svg";
import representative from "../../images/representative.svg";

export interface AchivementDataProps {}

export default function Representative(
  props: AchivementDataProps
): ReactElement | null {
  return (
    <>
    
      <div className="-max-w-1366 flex mx-auto pt-20">
        <Heading position="center">
          <h3>REPRESENTATIVE EXAMPLES</h3>
        </Heading>
      </div>
      <div className=" -max-w-1366 flex mx-auto">
        <div className=" flex w-9/12 pb-20 pt-20">
          <h6 className="text-justify pr-40 text-gray-600">
            It will simply take a couple of minutes of your time to finish your
            loan offer form. We are committed to helping you secure the loan
            amount you require and can usually tell you the result of your
            application straight away. Securing you the funds you require, when
            you require them most. <br />
            <br />
            We don't have to know your life history, only a couple of vital
            details; you should be more than 18, have a regular salary, have a
            permanent address and, hold a legitimate checking account to be
            qualified to apply. Likewise depending upon your residential state
            may confine the loan lenders accessible that could offer you
            financing. There will be no requirement for an up close and personal
            gathering, a phone meet or for you to present any paperwork.
          </h6>
        </div>
        <div className="pt-20 pb-20 my-auto ">
          <div className=""><img src={representative} className=" mx-auto " /></div>
        </div>
      </div>
    </>
  );
}
