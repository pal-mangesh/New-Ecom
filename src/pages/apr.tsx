import * as React from "react";
import DefaultLayout from "../layouts/default";
import APRNav from "../containers/APRnav";

export default () => {
  return (
    <>
      <DefaultLayout title="Apply">
        <APRNav />
      </DefaultLayout>
    </>
  );
};
