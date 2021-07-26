import React, { ReactElement } from "react";
import Contact from "../containers/contact";
import DefaultLayout from '../layouts/default';
export interface HomeContainerProps {}

export default function HomeContainer(
  props: HomeContainerProps
): ReactElement | null {
  return (
    <>
    <DefaultLayout title="Contact Us" >

      <Contact />
    </DefaultLayout>
    </>
  );
}
