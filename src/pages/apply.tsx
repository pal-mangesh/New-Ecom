import * as React from "react";
import DefaultLayout from "../layouts/default";
import Apply from "../containers/apply";

export default () => {
  return (
    <>
      <DefaultLayout title="Apply">
        <Apply />
      </DefaultLayout>
    </>
  );
};
