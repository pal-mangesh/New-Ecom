import React, { ReactElement } from "react";
import "../../css/main.css";
import speaker from "../../images/speaker.png";
import cart from "../../images/cart.svg";
import wishlist1 from "../../images/wishlist.svg";
import campare1 from "../../images/capmare.svg";

export interface CardProductProps {}

export default function CardProduct(
  props: CardProductProps
): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto flex w-full">
        <div className="flex w-full h-full  ">
          <div className="w-60 h-96 shadow-md m-4 rounded-md justify-items-center p-4">
            <div className="text-xs ">Audio Speaker</div>
            <div className="text-md font-light text-blue-500 pt-4">
              Wireless Audio System{" "}
            </div>
            <img className="pt-4 w-full h-48" src={speaker} />
            <div className="flex  justify-center border-b pt-4">
              <div className="p-2 pr-1 text-base font-bold">₹</div>
              <div className="p-2 text-base font-bold">1999</div>
              <div className="justify-end justify-items-end">
                <img className="pl-12 pr-4 pb-2 align-middle" src={cart} />
              </div>
            </div>
            <div className="flex pt-4 ">
              <div className="w-1/2 flex  justify-items-center">
                <img className="pr-2" src={wishlist1} />
                <div className="font-light text-xs">Wishlist</div>
              </div>
              <div className="w-1/2 flex justify-items-center">
                <img className="pr-2" src={campare1} />
                <div className="font-light text-xs">Campare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
