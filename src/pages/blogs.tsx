import React, { ReactElement } from "react";
import Blogsc1 from "../containers/blog-sc-1";
import DefaultLayout from "../layouts/default";

export interface HomeContainerProps {}

export default function HomeContainer(
  props: HomeContainerProps
): ReactElement | null {
  return (
    <>
      <DefaultLayout title="Blogs">
        <Blogsc1 />
      </DefaultLayout>
    </>
  );
}
