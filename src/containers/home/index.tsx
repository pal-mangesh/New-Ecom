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
import CardSec from "../../hoc/card-sec-2";
import AchivementAndCriteria   from "../../hoc/AchivementAndCriteria";
import Implication from "../../hoc/us-implication";
import BrandBanner from "../../hoc/brandbanner";
import Services from "../../hoc/services";
import MailInfo from "../../hoc/Mailing-info";
import BannerDeal from "../../components/bannerdeal";
import Tabs from "../../hoc/tabs";
import Dealstab from "../../hoc/deals-of-the-day";



export interface HomeContainerProps {}

export default function HomeContainer(
  props: HomeContainerProps
): ReactElement | null {
  return (
    <> 
      <Hero /> 
      <CardSec/>
      <Tabs/>
      <Dealstab/>
      <BannerDeal/>
      <Services/>
      <BannerDeal/>
      <BrandBanner/>
      <BannerDeal/>
      <HomePageBlogSec />
      <MailInfo />
      
    </>
  );
}
