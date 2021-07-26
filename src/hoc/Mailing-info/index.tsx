import React, { ReactElement } from "react";
import logo from "../../images/logo.svg";
import MailIcon from "../../images/mail icon.svg";
import LocationIcon from "../../images/location icon.svg";

export interface MailInfoProps {}

export default function MailInfo(props: MailInfoProps): ReactElement | null {
  return (
    <>
      <div
        className="bg-gray-800"
        style={{
          background: `linear-gradient(-45deg, #000000 60%, #161e2e
            60%)`,
        }}
      >
        <div className="-max-w-1366 mx-auto p-10 pl-0 flex  ">
          <div className=" flex w-2/5">
            <div className=" flex align-middle">
              <img src={logo} />
            </div>
            <div className="pl-2 flex items-center text-yellow-600 ">
              Power Finance Solutions
            </div>
          </div>
          <div className="flex flex-row w-3/5 pl-20 ">
          <div className="text-white w-1/2 flex flex-row " ><div className=" flex align-middle"><img src={LocationIcon} className="flex align-middle pt-2 "/></div><div className="pl-6"><div className="font-bold ">Location<br/></div><div className="pt-2 w-2/3 text-sm">887 W coquina dr, Daytona beach, Florida - 32117</div></div></div>
          <div className="text-white w-1/2 flex flex-row" ><div className=" flex align-middle"><img src={MailIcon} className="flex align-middle pt-4"/></div><div className="pl-6"><div className="font-bold ">Email<br/></div><div className="pt-2 w-2/3 text-sm">support@powerfinancesolutions.com</div></div></div>
          </div>
        </div>
      </div>
    </>
  );
}
