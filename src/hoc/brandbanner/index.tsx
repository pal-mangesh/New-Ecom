import React, { ReactElement } from "react";
import Brand1 from "../../images/Brand1.svg";
import Brand2 from "../../images/Brand2.svg";
import Brand3 from "../../images/Brand3.svg";
import Brand4 from "../../images/Brand4.svg";
import Brand5 from "../../images/Brand5.svg";
import Brand6 from "../../images/Brand6.svg";
import Brand7 from "../../images/Brand7.svg";
import Brand8 from "../../images/Brand8.svg";
import Brand9 from "../../images/Brand9.svg";
import Brand10 from "../../images/Brand10.svg";
import Brand11 from "../../images/Brand11.svg";
import Brand12 from "../../images/Brand12.svg";

export interface BrandBannerProps {}

export default function BrandBanner(props: BrandBannerProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto  p-8 pt-32 text-center  w-full">
        <div className="text-center w-full border-b  pb-4 pt-8">
          Top Brands
        </div>
        <div className="flex justify-items-center justify-center text-center items-center pt-8">
            <div className="w-1/5 "><img className="pl-16 pb-8" src={Brand1}/></div>
            <div className="w-1/5 "><img className="pl-16 pb-8" src={Brand2}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand3}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand4}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand5}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand6}/></div>
        </div>
        <div className="flex justify-items-center justify-center text-center items-center pt-8">
            <div className="w-1/5 "><img className="pl-16 pb-8" src={Brand7}/></div>
            <div className="w-1/5 "><img className="pl-16 pb-8" src={Brand8}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand9}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand10}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand11}/></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Brand12}/></div>
        </div>
      </div>
    </>
  );
}
