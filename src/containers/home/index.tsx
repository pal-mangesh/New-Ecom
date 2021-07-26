import React, { ReactElement } from "react";
import Button from "../../components/button";
import Hero from "../../hoc/hero";
import Features from "../../hoc/features";
import HCSec2 from "../../hoc/hc-sec-2";
import HCSec3 from "../../hoc/hc-sec-3";
import HCSec4 from "../../hoc/why-us";
import APR from "../../hoc/APR";
import HomePageBlogSec from "../../hoc/Home-blog-sec";
import PaymentIcons from "../../hoc/Payment-icon"
import CardSec from "../../hoc/card-sec-1";
import AchivementAndCriteria   from "../../hoc/AchivementAndCriteria";
import Implication from "../../hoc/us-implication";
import Disclosures from "../../hoc/us-disclosures";
import Representative from "../../hoc/Representative";
import MailInfo from "../../hoc/Mailing-info";
import CardBanner from "../../Card-banner";
import WhyUS from "../../hoc/why-us";



export interface HomeContainerProps {}

export default function HomeContainer(
  props: HomeContainerProps
): ReactElement | null {
  return (
    <> 
      <Hero /> 
      <CardSec/>
      <CardBanner />
      <WhyUS />
      <AchivementAndCriteria />
      <APR/>
      <PaymentIcons/>
      <Representative />
      <Disclosures />
      <Implication />
      <HomePageBlogSec />
      <MailInfo />
      
    </>
  );
}
