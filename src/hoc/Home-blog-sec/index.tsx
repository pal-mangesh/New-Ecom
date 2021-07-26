import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import blog1 from "../../images/blog1.png";
import blog2 from "../../images/blog2.png";
import blog3 from "../../images/blog3.png";
import blog4 from "../../images/blog4.png";
import blog5 from "../../images/blog5.png";
import blog6 from "../../images/blog6.png";

export interface BlogSec {}

export default function HomePageBlogSec(props: BlogSec): ReactElement | null {
  return (
    <>
      <div className="-max-w-1366 mx-auto  pt-20   ">
        <Heading position="center">
          <h3 className="text-center ">NEWS & UPDATES</h3>
        </Heading>
        <h6 className="text-gray-600 flex pb-20 pt-2  justify-center text-center">
          Latest From Our Blog
        </h6>
        <div className="flex justify-items-center  flex-row">
          <div className="w-1/3 flex flex-col  justify-center ">
            <div className="flex justify-center">
              <img src={blog1} className="w-4/5 flex justify-center " />
            </div>
            <div className=" flex justify-center relative ">
              <div className="bg-yellow-500 w-1/3 flex justify-center p-2 absolute  -m-5 rounded-full text-white">
                April 21, 2021
              </div>
            </div>
            <div className=" flex pt-8 justify-center">
              <h6 className="flex">Bigger Home is the goal right ?</h6>
            </div>
            <div className="flex p-1 justify-center text-yellow-500 font-bold">
              Read More
            </div>
          </div>
          <div className="w-1/3 flex flex-col  justify-center ">
            <div className="flex justify-center">
              <img src={blog2} className="w-4/5 flex justify-center " />
            </div>
            <div className=" flex justify-center relative ">
              <div className="bg-yellow-500 w-1/3 flex justify-center p-2 absolute  -m-5 rounded-full text-white">
                April 21, 2021
              </div>
            </div>
            <div className=" flex pt-8 justify-center">
              <h6 className="flex">Bigger Home is the goal right ?</h6>
            </div>
            <div className="flex p-1 justify-center text-yellow-500 font-bold">
              Read More
            </div>
          </div>
          <div className="w-1/3 flex flex-col  justify-center ">
            <div className="flex justify-center">
              <img src={blog3} className="w-4/5 flex justify-center " />
            </div>
            <div className=" flex justify-center relative ">
              <div className="bg-yellow-500 w-1/3 flex justify-center p-2 absolute  -m-5 rounded-full text-white">
                April 21, 2021
              </div>
            </div>
            <div className=" flex pt-8 justify-center">
              <h6 className="flex">Bigger Home is the goal right ?</h6>
            </div>
            <div className="flex p-1 justify-center text-yellow-500 font-bold">
              Read More
            </div>
          </div>
        </div>
      </div>

      <div className="-max-w-1366 mx-auto  pt-10 pb-20  ">
        
        
        <div className="flex justify-items-center  flex-row">
          <div className="w-1/3 flex flex-col  justify-center ">
            <div className="flex justify-center">
              <img src={blog4} className="w-4/5 flex justify-center " />
            </div>
            <div className=" flex justify-center relative ">
              <div className="bg-yellow-500 w-1/3 flex justify-center p-2 absolute -m-5 rounded-full text-white">
                April 21, 2021
              </div>
            </div>
            <div className=" flex pt-8 justify-center">
              <h6 className="flex">Bigger Home is the goal right ?</h6>
            </div>
            <div className="flex p-1 justify-center text-yellow-500 font-bold">
              Read More
            </div>
          </div>
          <div className="w-1/3 flex flex-col  justify-center ">
            <div className="flex justify-center">
              <img src={blog5} className="w-4/5 flex justify-center " />
            </div>
            <div className=" flex justify-center relative ">
              <div className="bg-yellow-500 w-1/3 flex justify-center p-2 absolute  -m-5 rounded-full text-white">
                April 21, 2021
              </div>
            </div>
            <div className=" flex pt-8 justify-center">
              <h6 className="flex">Bigger Home is the goal right ?</h6>
            </div>
            <div className="flex p-1 justify-center text-yellow-500 font-bold">
              Read More
            </div>
          </div>
          <div className="w-1/3 flex flex-col  justify-center ">
            <div className="flex justify-center">
              <img src={blog6} className="w-4/5 flex justify-center " />
            </div>
            <div className=" flex justify-center relative ">
              <div className="bg-yellow-500 w-1/3 flex justify-center p-2 absolute  -m-5 rounded-full text-white">
                April 21, 2021
              </div>
            </div>
            <div className=" flex pt-8 justify-center">
              <h6 className="flex">Bigger Home is the goal right ?</h6>
            </div>
            <div className="flex p-1 justify-center text-yellow-500 font-bold">
              Read More
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
