import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Sec2Image from "../../images/Rectangle 23 (1).png";

export interface USDisclosures {}

export default function Disclosures(props: USDisclosures): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto     ">
        <Heading position="center">
          <h3 className="text-center pt-8 pb-8">DISCLOSURES</h3>
        </Heading>
        <div
          className="  border-l-4  flex-row"
          style={{ borderColor: "#FF8A00" }}
        >
          <div className=" ">
            <h6 className="text-md pl-14 border-yellow-500 border-2 -m-1 rounded-r-full max-w-sm p-2 text-lg  text-yellow-600">
              Lender Network Disclosure :
            </h6>
          </div>
          <h6 className="p-14 pt-8  text-justify text-gray-600">
            Powerfinancesolutions.com is not a lender – we provide no loans,
            make no lending decisions, nor do we influence lenders in their
            decisions. We pride ourselves in providing a free, no-obligation
            service to consumers looking to borrow funds. We connect those very
            people, people like you, to trusted, reputable lenders who are
            willing to lend to them. When using Powerfinancesolutions.com to
            secure your loan requirements, you’ll benefit from our bespoke
            financial technology. Not only will you be able to access a network
            of lenders quickly and with ease with just one application, we’ll
            filter out the companies that don’t match your needs or personal
            circumstances. All of the lenders in our network employ their own
            unique lending criteria and have individual terms and conditions.
            With this in mind, when you’re approved for a loan and receive your
            no obligation loan offer, be sure to read the documents carefully to
            ascertain that it’s the right offer for you! Remember, you’re not
            obliged to proceed.
          </h6>
          <div className=" ">
            <h6 className="text-md pl-14 border-yellow-500 border-2 -m-1 rounded-r-full max-w-sm p-2 text-lg  text-yellow-600">
              Credit Check Disclosure :
            </h6>
          </div>
          <h6 className="p-14 pt-8  text-justify text-gray-600">
            Powerfinancesolutions.com are not lenders so make NO loan or credit
            decisions. The trusted lenders that we work with may, however, carry
            out credit checks to ascertain how creditworthy you are, your credit
            standing and/or your credit capacity. There are three reporting
            credit bureaus that the credit checks may be carried out with:
            Experian, Equifax, and TransUnion. By submitting your loan request,
            you are agreeing to allow our lenders to verify your personal
            information and check your credit. Please borrow responsibly and
            remember that a missed or late payment can have a negative credit
            impact.
          </h6>
          <div className=" ">
            <h6 className="text-md pl-14 border-yellow-500 border-2 -m-1 rounded-r-full max-w-sm p-2 text-lg  text-yellow-600">
              Truth in Lending Policy :{" "}
            </h6>
          </div>
          <h6 className="p-14 pt-8  text-justify text-gray-600">
            To work with Powerfinancesolutions.com, the lenders in our network
            must all comply with to the Truth in Lending Act. This means that
            they always supply loan offers and contractual agreements that are
            easily understood as best practice and as required by Federal Law.
            Truth in Lending helps protect you the consumer against predatory
            and unscrupulous lending. Please remember the choice to proceed with
            a loan is all yours, you are under no obligation to accept a loan
            offer. Before agreeing to go ahead with the agreement, please read
            all of the paperwork the lender provides you with care to ensure
            that you understand all of the information about your loan (APR,
            charges etc). You also need to consider and be certain that you can
            afford the repayments, and that you are totally satisfied with the
            offer that has been made to you before signing. If in doubt, ask the
            lender to clarify details. An informed choice is the best choice.
          </h6>
          <div className=" ">
            <h6 className="text-md pl-14 border-yellow-500 border-2 -m-1 rounded-r-full max-w-sm p-2 text-lg  text-yellow-600">
              State Availability Disclosure :{" "}
            </h6>
          </div>
          <h6 className="p-14 pt-8 pb-0 text-justify text-gray-600">
            The State availability of our services via our reputable lending
            network is entirely dependent on lenders that operate or offer their
            financial products and services within any particular state. Be
            aware that some lenders may charge APR rates that exceed the limit
            of the specific State Usury Law, because of this, they can’t legally
            operate within that State. The amount of interest that you can
            legally be charged is set by each State. These Usury Laws are there
            to protect consumers from unscrupulous lenders and excessive
            interest rates. Usury Laws are somewhat complicated by a multitude
            of legal loopholes and exceptions – resulting in it frequently
            becoming necessary for a differing rate for each situation. As a
            consumer, you have the right to waive the Usury Law set interest
            rates, this can be done via your contract with the lender. As a
            result, State Interest Rate Laws that apply to your State of
            residence may have no bearing on the actual rates you have agreed to
            pay. Lending criteria vary from State to State, this will mean that
            not all of our trusted lenders operate in every State. In fact, due
            to a lender’s eligibility criteria or State legislation, a lender
            has the option to decline your application and residents of some US
            states may not be eligible for instalment loans products at all.
            Powerfinancesolutions.com connects consumers with lenders that
            adhere to the specific State Usury Laws and that charge (including
            fees and interest), a minimum APR rate of 3.95% to a maximum APR
            rate of 35.95%, but within the legal limits that have been set by
            that State. Responsibility for ensuring that any agreement you enter
            into meets State legislation is that of the lender. A useful point
            of contact regarding any concerns you may have regarding unlawful
            interest rates would be your State Office. They are best placed to
            advise you on the Usury Laws that will affect you.
            Powerfinancesolutions.com does not undertake solicitation for loan
            products and does not constitute a loan offer for any loan products
            that are prohibited by State Law. This service is void where
            prohibited.
          </h6>
        </div>
      </div>
    </>
  );
}
