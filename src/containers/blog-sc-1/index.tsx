import { Link } from "gatsby";
import React, { ReactElement, useEffect, useState } from "react";
import Network from "../../commons/network";
import BlogThumbnail, { IBlog } from "../../components/blog-thumbnail";
// import Button from "../../components/button";
import Heading from "../../components/heading";

export interface BlogSc1Props {}

export default function BlogSc1(props: BlogSc1Props): ReactElement | null {
  const [blogs, setBlogs] = useState([] as IBlog[]);

  // fetch the blogs
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try{
      const { data } = await Network.get("/blogs");
    if (data && data.length) {
      setBlogs([...data]);
    }
  }catch(e){
    console.log("could not fetch blogs!");
  }
  };

  return (
    <>
      <div className="-max-w-1366 mx-auto p-8  w-full">
        <div className="w-full">
          <Heading>
            <h3>Blogs</h3>
          </Heading>

          {blogs && blogs.length ? (
            <>
              <div className="w-full">
                {blogs.splice(0, 1).map((b: IBlog) => (
                  <>
                    <Link to={"/blog?id=" + b._id}>
                      <BlogThumbnail blog={b} />
                    </Link>
                  </>
                ))}
              </div>
              <div className="flex items-center flex-wrap">
                {blogs.map((b: IBlog) => (
                  <div className="w-full md:w-1/2">
                    <Link to={"/blog?id=" + b._id}>
                      <BlogThumbnail blog={b} />
                    </Link>
                  </div>
                ))}
              </div>
            </>
          ) : (
            "Loading data...."
          )}
        </div>
      </div>
    </>
  );
}
