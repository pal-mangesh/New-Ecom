import React, { ReactElement } from "react";
import Service1 from "../../images/service1.svg";
import Service2 from "../../images/service2.svg";
import Service3 from "../../images/service3.svg";
import Service4 from "../../images/service4.svg";
import Service5 from "../../images/service5.svg";

export interface ServicesProps {}

export default function Services(props: ServicesProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto  p-8 pt-32 text-center  w-full">
        <div className="text-center w-full border-b  pb-4 pt-8">
          Our Services
        </div>
        <div className="flex justify-items-center justify-center text-center items-center pt-8">
            <div className="w-1/5 "><img className="pl-16 pb-8" src={Service1}/><div className="text-xl pb-2">Free Delivery</div><div>from 50</div></div>
            <div className="w-1/5 "><img className="pl-16 pb-8" src={Service2}/><div className="text-xl pb-2">365 days</div><div>for free return</div></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Service3}/><div className="text-xl pb-2">Payment</div><div>Secure System</div></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Service4}/><div className="text-xl pb-2">Only Best</div><div>Brands</div></div>
            <div className="w-1/5"><img className="pl-16 pb-8" src={Service5}/><div className="text-xl pb-2">99% Positive</div><div>Feedbacks</div></div>
        </div>
      </div>
    </>
  );
}
