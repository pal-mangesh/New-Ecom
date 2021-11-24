import React, { ReactElement } from "react";
import BannerImg1 from "../../images/bannerimg1.png";

export interface BannerDealProps {}

export default function BannerDeal(
  props: BannerDealProps
): ReactElement | null {
  return (
    <>
    <div className="pt-20">
        <div className="  flex  bg-gray-200 h-48 justify-items-center justify-center">
          <div className=" flex -max-w-1366  mx-auto w-full ">  
            <div className="font-thin text-gray-400 text-4xl leading-relaxed w-1/2 pl-48 pt-4">
              SHOP AND <div className="font-semibold text-4xl  text-gray-500  flex">SAVE BIG</div> ON HOTEST DEALS
            </div>
            <div className="">
              <img src={BannerImg1} />
            </div>
          </div>
      </div>
      </div>
    </>
  );
}
