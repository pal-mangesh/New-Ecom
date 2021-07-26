import React, { ReactElement, useEffect, useState } from "react";
import BlogView from "../containers/blog-view";
import DefaultLayout from "../layouts/default";

export interface BlogContainerProps {}

export default function BlogContainer(
  props: BlogContainerProps
): ReactElement | null {

  const [id,setId] = useState("");

  useEffect(()=>{
    
    const params = window.location.search.substring(1);
    console.log(params);
    setId(params.split("=")[1]);

  },[]);

  return (
    <>
      <DefaultLayout title="Blog">
        <BlogView _id={id}/>
      </DefaultLayout>
    </>
  );
}
