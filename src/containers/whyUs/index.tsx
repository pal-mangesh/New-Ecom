import React, { ReactElement } from "react";
// import Featuer1Icon from "../../images/feature_one_icon.svg";
// import Featuer2Icon from "../../images/feature_two_icon.svg";
// import Featuer3Icon from "../../images/feature_three_icon.svg";


import WhyUS from "../../hoc/why-us";
import CardBanner from "../../Card-banner";
import CardSec from "../../hoc/card-sec-1";
import MailInfo from "../../hoc/Mailing-info";



export interface WhyUsProps {}
export default function WhyUsNavigation(props: WhyUsProps): ReactElement | null {
  
  return (
    <>
      <CardSec/>
      <CardBanner />
      <WhyUS />
      <MailInfo />
     
      
          </>
  );
}
