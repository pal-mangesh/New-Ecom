import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Sec2Image from "../../images/Rectangle 23 (1).png";

export interface USImplication {}

export default function Implication(
  props: USIimplication
): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto  pt-20   ">
        <Heading position="center">
          <h3 className="text-center pt-8 pb-8">IMPLICATIONS</h3>
        </Heading>
        <div
          className="  border-l-4  flex-row"
          style={{ borderColor: "#FF8A00" }}
        >
          <div className=" ">
            <h6 className="text-md pl-14 border-yellow-500 border-2 -m-1 rounded-r-full max-w-sm p-2 text-lg  text-yellow-600">
              Late or Missed Payments :{" "}
            </h6>
          </div>
          <h6 className="p-14 pt-8  text-justify text-gray-600">
            When accepting the terms and conditions of your personal loan, you
            are agreeing to repay the loan both: A) with interest and B) in the
            time frame specified in the loan agreement. Generally, failure to
            repay the loan in full, making a late payment or, missing a payment,
            will result in you being charged additional fees by your lender. We
            have NO ability to predict or estimate what supplemental charges
            will be incurred in the event of late, partial, or non-payment of
            loans here at Powerfinancesolutions.com. Nor have we any control or
            knowledge of any loan agreements or details between you and your
            lender. Within your Loan Agreement, you will be provided with
            details on the late, partial, and non-payment policies that your
            lender enforces, please review this fully prior to proceeding with a
            loan offer. Powerfinancesolutions.com strives to partner with only
            the most trustworthy and reputable lenders, those who pursue the
            collection of past-due loan accounts in a fair and reasonable
            manner, ensuring you have the best loan experience.
          </h6>
          <div className=" ">
            <h6 className="text-md pl-14 border-yellow-500 border-2 -m-1 rounded-r-full max-w-sm p-2 text-lg  text-yellow-600">
              Credit Score Impact :{" "}
            </h6>
          </div>
          <h6 className="p-14 pt-8  text-justify text-gray-600">
            To ascertain how creditworthy you are, your credit capacity and/or
            your credit standing, our network of lenders may perform credit
            checks. Submitting a loan request means that you are agreeing to
            allow our lenders to verify your personal information and check your
            credit. Note: missing payments and/or late payments may have a
            negative impact your credit score.
          </h6>
          <div className=" ">
            <h6 className="text-md pl-14 border-yellow-500 border-2 -m-1 rounded-r-full max-w-sm p-2 text-lg  text-yellow-600">
              Truth in Lending Policy :{" "}
            </h6>
          </div>
          <h6 className="p-14 pt-8  text-justify text-gray-600">
            Powerfinancesolutions.com only works with reputable lenders who use
            fair collection practices. As a non-lender,
            Powerfinancesolutions.com has NO involvement in the debt collection
            process of your loan. Your lender will disclose all of their debt
            collection processes within your Loan Agreement. Should you have any
            questions regarding debt collections, please contact your loan
            provider.
          </h6>
        </div>
      </div>
    </>
  );
}
