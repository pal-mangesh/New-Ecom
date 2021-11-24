import React, { ReactElement } from "react";
import Shoesdeal from "../../images/shoesdeal.png";

export interface DealsOverProps {}

export default function DealsOver(props: DealsOverProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-8 h-96 border-2 rounded-xl border-yellow-400  m-4 w-full">
        <div className="flex">
          <div className="w-1/2 flex">
            <img className="pt-8 w-72" src={Shoesdeal} />
            <div className="bg-yellow-500 pt-4 font-bold p-2 w-20 h-20  absolute  justify-items-center justify-center align-middle text-center rounded-full">
              Save 50%
            </div>
          </div>
          <div className="w-1/2 justify-center">
            <div className="text-xl leading-8 text-justify text-blue-500">
              Mega sale on footwear Online{" "}
            </div>
            <div className="flex pt-8 ">
              <div className="w-1/2 text-3xl font-semibold line-through flex">
                <div className="pr-2">₹</div>
                <div className="">1999</div>
              </div>
              <div className="w-1/2 flex text-3xl font-semibold text-red-500 justify-end pr-8">
                <div className="pr-2">₹</div>
                <div>999</div>
              </div>
            </div>

            <div className="pt-8">
              <div className="flex">
                <div>Already Sold:</div>
                <div className="pl-8 font-bold">96</div>
              </div>
              <div className="flex pt-2 pb-8">
                <div>Available:</div>
                <div className="pl-8 font-bold">4</div>
              </div>
              <div className="flex w-full">
                <div className="w-9/12 rounded-l-full  border-yellow-500 border-8"></div>
                <div className="border-8 w-3/12 rounded-r-full border-yellow-300"></div>
              </div>
              <div className="justify-center pt-4 text-blue-500 font-bold">Sale Over</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
