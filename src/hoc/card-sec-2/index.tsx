import React, { ReactElement } from "react";
import Heading from "../../components/heading";
import image1 from "../../images/image1.png";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import css from "../../css/main.css";
import Line4 from "../../images/Line 4.svg";
import shopnow from "../../images/shopnow.svg";
import jean from "../../images/jean.png";
import speaker from "../../images/speaker.png";
import tshirt from "../../images/tshirt.png";

export interface CardProps {}

export default function CardSec(props: CardProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto p-14 flex w-full">
        <div className=" w-1/3 flex">
          <div className="flex justify-center   justify-items-center shadow-md bg-gradient-to-l from-gray-100  rounded-md h-44  ">
            <div className=" flex w-1/2">
              <div className="p-8  ">
                <img className="h-32 w-36" src={jean} />
              </div>
            </div>
            <div className="w-1/2">
              <div className=" flex  p-4 pt-6">
                <h6>
                  CATCH BIG <div className="font-semibold">DEALS</div> ON THE
                  JEANS
                </h6>
              </div>
              <div className="flex">
                <div className="p-4  font-semibold flex text-sm">Shop now</div>{" "}
                <div className="flex">
                  <img src={shopnow} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3 flex">
          <div className="flex justify-center   justify-items-center shadow-md bg-gradient-to-l from-gray-100  rounded-md h-44  ">
            <div className=" flex w-1/2">
              <div className="p-8  ">
                <img className="h-32 w-36" src={tshirt} />
              </div>
            </div>
            <div className="w-1/2">
              <div className=" flex p-4 pt-6">
                <h6>
                  CATCH BIG <div className="font-semibold">DEALS</div> ON THE
                  T-SHIRTS
                </h6>
              </div>
              <div className="flex">
                <div className="p-4  font-semibold flex text-sm">Shop now</div>{" "}
                <div className="flex">
                  <img src={shopnow} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-1/3 flex">
          <div className="flex justify-center   justify-items-center shadow-md bg-gradient-to-l from-gray-100  rounded-md h-44  ">
            <div className=" flex w-1/2">
              <div className="p-8  ">
                <img className="h-32 w-36" src={speaker} />
              </div>
            </div>
            <div className="w-1/2">
              <div className=" flex p-4 pt-6">
                <h6>
                  CATCH BIG <div className="font-semibold">DEALS</div> ON THE
                  SPEAKERS
                </h6>
              </div>
              <div className="flex">
                <div className="p-4  font-semibold flex text-sm">Shop now</div>{" "}
                <div className="flex">
                  <img src={shopnow} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
