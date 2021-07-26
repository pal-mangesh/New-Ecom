import React, { ReactElement } from "react";
import ellipse1 from "../../images/Ellipse1.svg";
import css from "../../css/main.css";

export interface ApplyProps {}

export default function Apply(porps: ApplyProps): ReactElement | null {
  return (
    <>
      <div className="bg-gray-800  p-8">
        <div className="flex justify-center text-xl main-text">
          $1,000 - $35,000 Same Day Loans
        </div>
        <div className="flex justify-center  text-xl main-text">
          Any Reason | All Credit OK
        </div>
      </div>
      <div className="border-4 border-yellow-500 "></div>

      <div className="pt-20 pb-20 pl-10  relative">
        <div className="absolute -mt-8 -ml-10 flex justify-items-center align-middle">
          <img src={ellipse1} className=" " />
        </div>
        <div className="absolute  text-opacity-80 text-yellow-600  font-bold  text-9xl ">
          1
        </div>

        <div
          className="  p-14  flex justify-center text-white text-2xl  w-9/12 rounded-r-full"
          style={{ background: "#2759AB" }}
        >
          How much money do you need?
        </div>
      </div>
      <div className="flex  justify-center">
        <div className="w-1/2 flex justify-end  align-middle text-xl p-4">
          Loan amount*
        </div>
        <div className="h-120 w-1/2 form flex justify-start">
          <input
            type="text"
            id="fname"
            className=" h-12 "
            placeholder="Street Address"
          />
        </div>
      </div>
    </>
  );
}
