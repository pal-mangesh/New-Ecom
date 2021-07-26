import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Sec2Image from "../../images/Rectangle 23 (1).png";

export interface APRProps {}

export default function APR(props: APRProps): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto  pt-20   ">
        <Heading position="center">
          <h3 className="text-center ">APR RATES</h3>
        </Heading>
        <div className="">
          <h6 className="pt-14 pb-20 text-justify text-gray-600">
            Powerfinancesolutions.com refers consumers to trusted, reputable
            lenders who are able to provide loan information and advice – we do
            not charge for this service.<br/><br/> Powerfinancesolutions.com is not a
            lender. Because of this, we are not able to confirm the exact rate
            of APR that you will be charged. Should you have reached our site
            via a paid Google advert, you will have seen repayment terms ranging
            from 6 to 60 months, together with illustrated rates of no greater
            than 35.95% APR (calculation consistent with the Truth In Lending
            Act, TILA).<br/><br/> To apply for a loan, you should be 18 years or older.
            The rate of APR you will be charged will be set by the moneylender.
            The figure can differ and, will be based both on the information
            that you provide to the lender within your loan request and the data
            the loan provider supplied to you. The lender will always notify you
            of the APR they can offer you.<br/><br/> APR rates are based on how
            creditworthy you are, the rates are subject to change without notice
            which could result in the rate and amount you pay back varying.<br/><br/> Once
            your application has been acknowledged by a moneylender, they will
            provide you with all the facts associated with the loan. This will
            incorporate the APR, any related loan finance charges and all of the
            terms you will be agreeing to. It is prudent that you read all
            information submitted to you by the lender to ensure that you can
            make an informed decision prior to accepting a loan offer.<br/><br/> If you
            have any questions related to APR or loan related services, please
            contact us for more assistance.
          </h6>
        </div>
      </div>
    </>
  );
}
