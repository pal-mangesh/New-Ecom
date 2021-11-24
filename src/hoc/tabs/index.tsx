import React, { ReactElement } from "react";
import { useState } from "react";
import "../../css/main.css";
import speaker from "../../images/speaker.png";
import cart from "../../images/cart.svg";
import wishlist1 from "../../images/wishlist.svg";
import campare1 from "../../images/capmare.svg";
import CardProduct from "../../components/card-product";

export interface TabsProps {}

export default function Tabs(props: TabsProps): ReactElement | null {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="-max-w-1366 mx-auto p-8 flex w-full">
        <div className="container">
          <div className="block-tabs">
            <button
              className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(1)}
            >
              Feature
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)}
            >
              On Sale
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3)}
            >
              Top Rated
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <div className="flex w-full justify-items-center justify-center h-full  ">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
              </div>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <div className="flex w-full justify-items-center justify-center h-full  ">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
              </div>
            </div>

            <div
              className={
                toggleState === 3 ? "content  active-content" : "content"
              }
            >
              <div className="flex w-full justify-items-center justify-center h-full  ">
                <CardProduct />
                <CardProduct />
                <CardProduct />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
