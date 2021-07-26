import React, { ReactElement } from "react";
import Helmet from "react-helmet";
export interface HelmetContainerProps {
  children?: any;
}

export default function HelmetContainer({
  children,
}: HelmetContainerProps): ReactElement | null {
  return (
    <>
      <Helmet>{children}</Helmet>
    </>
  );
}
