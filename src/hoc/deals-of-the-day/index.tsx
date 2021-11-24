import React, { ReactElement } from "react";
import DealsOver from "../../hoc/dealsover";
import TodaysDeal from "../../hoc/todaysdeal";

export interface DealsProps {}

export default function Dealstab(props: DealsProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-8 text-center  w-full">
        <div className="text-center w-full border-b pb-4 pt-8">Deals of the day</div>

        <div className=" flex justify-center pt-4  w-full">
         <div className="w-1/2 pr-2"> <TodaysDeal /></div>
         <div className="w-1/2 pl-2"> <DealsOver /></div>

        </div>
      </div>
    </>
  );
}
