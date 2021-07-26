import React, { ReactElement } from "react";
import  visaicon from "../../images/visa-icon.svg";
import  mastericon from "../../images/master-icon.svg";
import  paypalicon from "../../images/paypal-icon.svg";
import  payoneericon from "../../images/payoneer-icon.svg";
import  skrillicon from "../../images/skrill-icon.svg";
import  amexicon from "../../images/amex-icon.svg";




export interface PaymentIconsProps {}

export default function PaymentIcons(
  props: PaymentIconsProps
): ReactElement | null {
  return (
    <>
    <div className=" p-8    w-full" style={{ background: " #2759AB"}} >

      <div className="flex  space-x-24 justify-center align-middle ">
       <div className="bg-white   rounded-xl flex   p-2 w-24 h-24 m-4 "><img src={visaicon} className=" max-w-md  p-2 w-20 h-20" /></div> 
       <div className="bg-white   rounded-xl flex  p-2 w-24 h-24 m-4 "> <img src={mastericon} className=" max-w-md p-2 w-20 h-20" /></div>
        <div className="bg-white   rounded-xl flex  p-2 w-24 h-24 m-4 "><img src={paypalicon} className=" max-w-md p-2 w-20 h-20" /></div>
        <div className="bg-white   rounded-xl flex  p-2 w-24 h-24 m-4 "><img src={payoneericon} className=" max-w-md p-2 w-20 h-20" /></div>
        <div className="bg-white   rounded-xl flex  p-2 w-24 h-24 m-4 "><img src={skrillicon} className=" max-w-md p-2 w-20 h-20" /></div>
        <div className="bg-white   rounded-xl flex  p-2 w-24 h-24 m-4 "><img src={amexicon} className=" max-w-md p-2 w-20 h-20" /></div>


      </div>
    </div>
    
    </>
  );
}
