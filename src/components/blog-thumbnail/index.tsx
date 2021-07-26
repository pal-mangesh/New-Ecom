import React, { ReactElement } from 'react'
import Utils from '../../commons'
import Image from '../img'

export interface IBlog {
  _id?:string;
    title:string,
    article:string,
    author:string,
    readTime:number,
    img:any,
    createdAt:string
}

interface Props {
    blog:IBlog,
    showFullArticle?:boolean
}

function BlogThumbnail({blog, showFullArticle=false}: Props): ReactElement {

    

    return (
        <>
            <div className=" shadow-md mr-4 pt-8">
              <Image src={blog.img.url} className="w-full pt-8 h-96 p-4" />
              <div className="flex align-middle ">
                <h4 className="p-8 pb-0">
                  {blog.title}
                </h4>
                <div className="p-8 pb-0 ">
                  <h6 className=" p-2 flex flex-nowrap w-36 justify-center  text-white rounded-md bg-pink-600">
                    {blog.readTime} mins read
                  </h6>
                </div>
              </div>
              <h6 className="pl-8 pt-4 ">{blog.createdAt}| {blog.author}</h6>
              <div className=" p-8 text-justify break-all">
                {showFullArticle?blog.article: Utils.minifyText(blog.article)}
              </div>
            </div>
        </>
    )
}

export default BlogThumbnail
