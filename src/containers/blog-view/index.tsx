import React, { ReactElement, useEffect, useState } from "react";
import Network from "../../commons/network";
import BlogThumbnail, { IBlog } from "../../components/blog-thumbnail";
// import Button from "../../components/button";
import Heading from "../../components/heading";

export interface BlogViewProps {
  _id: string;
}

export default function BlogView({ _id }: BlogViewProps): ReactElement | null {
  const [blog, setBlog] = useState();

  // fetch the blogs
  useEffect(() => {
    if (_id && _id.length) {
      fetchBlog();
    }
  }, [_id]);

  const fetchBlog = async () => {
    const { data } = await Network.get("/blogs/" + _id);
    if (data && data._id) {
      setBlog({ ...data });
    }
  };

  return (
    <>
      <div className="-max-w-1366 mx-auto p-8  w-full">
        <div className="w-full">
          {blog ? (
            <>
              <BlogThumbnail blog={blog} showFullArticle={true} />
            </>
          ) : (
            "Loading Blog...."
          )}
        </div>
      </div>
    </>
  );
}
