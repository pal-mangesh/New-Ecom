import React, { ReactElement } from "react";
import MailInfo from "../../hoc/Mailing-info";
import PaymentIcons from "../../hoc/Payment-icon";
import Representative from "../../hoc/Representative";
export interface APRProps {}

export default function APRNav(porps: APRProps): ReactElement | null {
  return (
    <>
      <PaymentIcons />
      <Representative />
      <MailInfo />
    </>
  );
}
