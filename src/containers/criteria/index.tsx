import React, { ReactElement } from "react";
import MailInfo from "../../hoc/Mailing-info";
import Criteriasec from "../../hoc/AchivementAndCriteria"




export interface CriteriaProps {}

export default function Criteria(porps: CriteriaProps):ReactElement | null {
  return (
    <>
    <Criteriasec/>
    <div className="pb-64"></div>
    <MailInfo />
    </>
  )
}

