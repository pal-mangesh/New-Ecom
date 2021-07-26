import * as React from "react";
import DefaultLayout from "../layouts/default";
// import AboutUs from "../pages/about-us";
import HomeContainer from "../containers/home";
export default () => {

  return (
    <>
      <DefaultLayout title="Home">
    <HomeContainer/>
      </DefaultLayout>
    </>
  );
};
