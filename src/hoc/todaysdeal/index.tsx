import React, { ReactElement } from "react";
import Jeansdeal from "../../images/jeansdeal.png";

export interface TodatsDealProps {}

export default function TodatsDeal(
  props: TodatsDealProps
): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-8 h-96 border-2 rounded-xl border-yellow-400  m-4 w-full">
        <div className="flex">
          <div className="w-1/2 flex">
            <img className="pt-12 h-64 w-56 pl-10" src={Jeansdeal} />
            <div className="bg-yellow-500 pt-4 font-bold p-2 w-20 h-20  absolute  justify-items-center justify-center align-middle text-center rounded-full">
              
              Save 50%
            </div>
          </div>
          <div className="w-1/2 justify-center">
            <div className="text-xl leading-8 text-justify text-blue-500">
              Men's Regular and Relaxed Fit Denim Jeans
            </div>
            <div className="flex pt-8 ">
              <div className="w-1/2 text-3xl font-semibold line-through flex">
                <div className="pr-2">₹</div>
                <div className="">19999</div>
              </div>
              <div className="w-1/2 flex text-3xl font-semibold text-red-500 justify-end pr-8">
                <div className="pr-2">₹</div>
                <div>9999</div>
              </div>
            </div>

            <div className="pt-8">
              <h6>Hurry Up! Offer end in :</h6>
              <div className=" pt-4 flex">
                <div className="text-center ">
                  <div className="bg-gray-300 font-semibold text-5xl rounded-xl p-2 ">
                    10
                  </div>
                  <div className="pt-2">Hours</div>
                </div>
                <div className="text-5xl pl-2 pr-2 font-extrabold">:</div>
                <div className="text-center ">
                  <div className="bg-gray-300 font-semibold text-5xl rounded-xl p-2 ">
                    10
                  </div>
                  <div className="pt-2">Mins</div>
                </div>
                <div className="text-5xl pl-2 pr-2 font-extrabold">:</div>
                <div className="text-center ">
                  <div className="bg-gray-300 font-semibold text-5xl rounded-xl p-2 ">
                    10
                  </div>
                  <div className="pt-2">Secs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
