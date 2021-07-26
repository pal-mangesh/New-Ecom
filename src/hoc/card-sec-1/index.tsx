import React, { ReactElement } from "react";
import Heading from "../../components/heading";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import css from "../../css/main.css";
import Line4 from "../../images/Line 4.svg";

export interface CardProps {}

export default function CardSec(props: CardProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-8  w-full">
        <div className="w-full pt-8 ">
          <Heading position="center">
            <div className="flex  justify-center ">ABOUT US</div>
          </Heading>
        </div>
        <div className="text-xl flex justify-center text-gray-600 pt-2">
          Our company gives you options other lenders don’t ..
        </div>

        <div className="flex pt-4 w-full ">
          <div className=" w-1/2 m-8  mb-0 border rounded-xl ">
            <div className="flex justify-center">
              <img src={Line4} className="  flex  pt-0 w-3/4" />
            </div>
            <div className="align-top p-4">
              <h4 className="pt-4 main-text">Free to use,no hidden fees</h4>
              <h6 className="pt-8 text-gray-600">
                No origination fees, closing fees, or prepayment penalties. No
                fees, as long as you pay on time.
              </h6>
            </div>
            <img src={image1} className="w-full rounded-b-xl  align-bottom pt-8" />
          </div>
          <div className=" w-1/2 m-8 mb-0 border rounded-xl ">
            <div className="flex justify-center">
              <img src={Line4} className="  flex  pt-0 w-3/4" />
            </div>
            <div className="align-top p-4">
              <h4 className="pt-4 main-text">One Simple Form to start</h4>
              <h6 className="pt-8 text-gray-600">
                Apply in just minutes with our quick application. That means
                whenever you’re ready, so are we.
              </h6>
            </div>
            <img src={image2} className="w-full rounded-b-xl  align-bottom pt-8" />
          </div>
        </div>
        <div className="flex pt-8 w-full ">
          <div className=" w-1/2 m-8 mb-0 border rounded-xl ">
            <div className="flex justify-center">
              <img src={Line4} className="  flex  pt-0 w-3/4" />
            </div>
            <div className="align-top p-4">
              <h4 className="pt-4 main-text">Fast, secure</h4>
              <h6 className="pt-8 text-gray-600">
                Our team is here to help you reach your financial goals. Our
                expert Client Success team is here to help you along the way.<br/><br/>
              </h6>
            </div>
            <img src={image3} className="w-full rounded-b-xl align-bottom pt-8" />
          </div>
          <div className=" w-1/2 m-8 mb-0 border rounded-xl ">
            <div className="flex justify-center">
              <img src={Line4} className="  flex  pt-0 w-3/4" />
            </div>
            <div className="align-top p-4">
              <h4 className="pt-4 main-text">More lenders, more options</h4>
              <h6 className="pt-8 text-gray-600">
                We can help connect you to lenders that offer loans that may
                work for you. Through our service, you may be able to connect
                with a lender regardless of your credit history
              </h6>
            </div>
            <img src={image4} className="w-full rounded-b-xl align-bottom pt-8" />
          </div>
        </div>
      </div>
    </>
  );
}
