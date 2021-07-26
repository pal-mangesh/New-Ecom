import React, { ReactElement } from "react";
import Button from "../../components/button/index";
import arrow from "../../images/arrow.svg";
import blogsm1 from "../../images/blogsm1.png";
import WhyUS from "../why-us";
import {Link} from "gatsby"; 

export interface FooterProps {}




export default function Footer(props: FooterProps): ReactElement | null {
  
  const whyUSHandler = ()=>{
    
    <WhyUS/>
  }




  return (
    <>
      <div
        className="w-full pt-16 text-gray-300"
        style={{ backgroundColor: "#000000" }}
      >
        <div className="-max-w-1366 flex justify-center   mx-auto ">
          <div className="w-1/4 ">
            <div className="text-white  flex w-4/5 flex-row ">
              <div className="p-2 tracking-wide text-base pl-0 pb-8">
                <div className="font-bold tracking-widest">
                  About
                  <br />
                </div>
                <div className="pt-8 tracking-wide w-full text-sm">
                  Rates from 3.95% APR in just 2 minutes <br />
                  <br /> Apply in minutes Your Needs - Your Way NO Origination
                  Fees
                </div>
              </div>
            </div>
          </div>
          <div className="  pl-24 w-4/12">
            <div className="font-bold p-2 pl-0 pb-0 text-white  tracking-widest" >
              Quick Links 
              <br />
            </div>

            <div className="pt-6 flex text-white text-widest text-sm">
              <div className="flex  align-middle flex-col ">
                <div className=" flex flex-row ">
                  <div className="p-2 tracking-wide pl-0">
                    <img src={arrow} />
                  </div>
                  <div className="p-2 pl-0 tracking-widest text-sm" ><Link to="/why Us">
                    WHY US?</Link>
                  </div>
                </div>
                <div className=" flex flex-row ">
                  <img src={arrow} />
                  <div className="p-2 tracking-wide text-sm"><Link to="/criteria">CRITERIA</Link></div>
                </div>
                <div className=" flex flex-row ">
                  <img src={arrow} />
                  <div className="p-2 tracking-wide text-sm"><Link to="/blogs">BLOG</Link></div>
                </div>
                <div className=" flex flex-row ">
                  <img src={arrow} />
                  <div className="p-2 tracking-wide text-sm"><Link to="/apply">BUSINESS LOAN</Link></div>
                </div>
              </div>
              <div className="flex pl-8 align-middle flex-col ">
                <div className=" flex flex-row ">
                  <img src={arrow} />
                  <div className="p-2 tracking-widest text-sm"><Link to="/apr">APR</Link></div>
                </div>
                <div className=" flex flex-row ">
                  <img src={arrow} />
                  <div className="p-2 tracking-wide text-sm"><Link to="/contact">CONTACT US</Link></div>
                </div>
                <div className=" flex flex-row ">
                  <img src={arrow} />
                  <div className="p-2 tracking-wide text-sm"><Link to="/apply">HOUSING LOAN</Link></div>
                </div>
                <div className=" flex flex-row ">
                  <img src={arrow} />
                  <div className="p-2 tracking-wide text-sm"><Link to="/apply">PERSONAL LOAN</Link></div>
                </div>
              </div>
            </div>
          </div>

          <div className="pl-40">
            <div className="font-bold p-2  pl-0 pb-0 text-white tracking-widest">
              Latest Posts <br />
            </div>
            <div className="pt-6 flex text-white text-widest text-base">
              <div className="flex  align-middle flex-col ">
                <div className=" flex flex-row ">
                  <div className="p-2 pl-0 ">
                    <img src={blogsm1} />
                  </div>
                  <div>
                    <div className="pl-4 pt-4  tracking-widest text-sm ">
                      Choosing Right Education Loan
                    </div>
                    <div className="pl-4 pt-1  tracking-widest text-yellow-500 text-xs ">
                      April 21, 2021
                    </div>
                  </div>
                </div>
                <div className=" pt-2 flex flex-row ">
                  <div className="p-2 pl-0 ">
                    <img src={blogsm1} />
                  </div>
                  <div>
                    <div className="pl-4 pt-4  tracking-widest text-sm ">
                      Choosing Right Education Loan
                    </div>
                    <div className="pl-4 pt-1  tracking-widest text-yellow-500 text-xs ">
                      April 21, 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="-max-w-1366 text-gray-200 justify-center  flex mx-auto pt-16 tracking-wide text-base text-justify">
          <div className=" text-sm tracking-wider">Disclaimer: The purpose of this website is to connect potential borrowers with
            the lenders and financial service providers that advertise on this
            website. The operator of this website is neither a lender nor a
            broker and does not make any credit decisions. This website merely
            takes information from consumers and forwards it to lenders and
            third parties who may be able to provide the types of loans that may
            meet the consumers needs. For those consumers who do not qualify for
            a Personal Loan, we will refer you to alternative lenders and
            providers. This website shall not be considered an offer or
            solicitation for a loan. There is no guarantee that you will be
            approved for any type of loan. We do not charge you for the service
            we provide and are not a representative or agent of any lender or
            third party provider. We are compensated by lenders and third
            parties. The time it takes for money to transfer to your account
            will vary by lender and also depend on your individual financial
            institution. You may be required to fax information to your lender
            in order to receive a loan. This service and lenders are not
            available in all states. If you have any question regarding the
            details of your loan, you should contact your lender directly.
            Personal loans and other types of loans should not be considered a
            long term financial solution. They are means to provide short term
            financing to solve immediate financial needs. Lenders and third
            party providers may perform a credit check with one or more credit
            agencies. These credit checks can have an impact on your credit
            score. By submitting your request, you are authorizing the lenders
            and third party providers to independently verify the information
            you submitted and your credit worthiness. Nothing on this website
            shall constitute an offer or solicitation for a loan. Availability:
            Residents of some states in the U.S. may not qualify for a bad
            credit loan as a result of certain lender requirements. The Website
            does not guarantee that completing a loan request form will result
            in you being offered a loan product by a lender, or you being
            offered a product with rates or terms as desired.
          </div>
        </div>
        <div className="-max-w-1366 p-2 mx-auto flex text-sm text-gray-200 tracking-wider justify-center"> ©2018  -<div className="text-yellow-500"> Powerfinancesolutions.com </div> All Rights Reserved.</div>

      </div>
    </>
  );
}
