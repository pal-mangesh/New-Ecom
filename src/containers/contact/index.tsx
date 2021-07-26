import React, { ReactElement } from "react";
import Button from "../../components/button";
import Heading from "../../components/heading";
import Network from "../../commons/network";
import Cookies from "../../commons/cookies";
import LocationIcon from "../../images/location icon.svg";
import MailIcon from "../../images/mail icon.svg";
import logo from "../../images/logo.svg";
import MapBox from "../../components/map-box";
// import Sec2Image from "../../images/sec-2-img.png";

export interface ContactProps {}

export default function Contact(props: ContactProps): ReactElement | null {
  const [formData, setFormData] = React.useState({} as any);

  const submitData = async (e: any) => {
    const { data } = await Network.post("/auth/local", formData);

    if (data && data.jwt) {
      Cookies.put("authKey", data.jwt);
    }
  };

  const onFormFieldChange = (fieldName: string) => (e: any) => {
    const _fd = { ...formData };
    _fd[fieldName] = e.target.value;
    setFormData(_fd);
  };

  const checkAuthValid = async () => {
    console.log(await Network.get("/leads"));
  };

  return (
    <>
      <div className="relative text-white py-8">
        <div className="absolute top-0 w-full h-full" style={{ zIndex: -1 }}>
          <MapBox  />
        </div>
        <div
          className="p-4 rounded-lg w-1/2  mx-auto"
          style={{ background: "rgba(0,0,0,0.5)" }}
        >
          <div className=" py-8 flex flex-col justify-center items-center">
            <div className="text-2xl ">OUR TEAM IS ALWAYS HERE TO HELP !</div>
            <div className="">
              Have questions? We are only a call, email away.
            </div>
          </div>
          <div className="-max-w-1366 mx-auto p-8 ">
            <div className="flex justify-center p-16 mx-auto flex-row">
              <div className="text-white justify-center w-1/2 flex flex-row ">
                <div className=" flex align-middle">
                  <img src={LocationIcon} className="flex align-middle pt-2 " />
                </div>
                <div className="pl-6">
                  <div className="font-bold ">
                    Location
                    <br />
                  </div>
                  <div className="pt-2  text-sm">
                    887 W coquina dr, Daytona beach, Florida - 32117
                  </div>
                </div>
              </div>
              <div className="text-white w-1/2 justify-center flex flex-row">
                <div className=" flex align-middle">
                  <img src={MailIcon} className="flex align-middle pt-4" />
                </div>
                <div className="pl-6">
                  <div className="font-bold ">
                    Email
                    <br />
                  </div>
                  <div className="pt-2  text-sm">
                    support@powerfinancesolutions.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 w-full">
        <div className=" w-full -max-w-1366 mx-auto p-8  flex ">
          <div className=" flex w-1/2">
            <div className=" p-8">
              <div className="pl-2 pt-8"></div>
              <div className="h-120  ">
                <input
                  type="text"
                  id="fname"
                  placeholder="Your First Name"
                  onChange={onFormFieldChange("identifier")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Your Email"
                  onChange={onFormFieldChange("password")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Your Date of Birth (DD/MM/YYYY)"
                  onChange={onFormFieldChange("phone")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Your Credit Score"
                  onChange={onFormFieldChange("message")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Street Address"
                  onChange={onFormFieldChange("message")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="State"
                  onChange={onFormFieldChange("message")}
                />
              </div>

              <div className="pt-8 pl-2">
                <Button onClick={submitData} title="Send Now" />
              </div>
            </div>
          </div>

          <div className=" flex w-1/2">
            <div className=" p-8">
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Your Last Name"
                  onChange={onFormFieldChange("identifier")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Your Phone no."
                  onChange={onFormFieldChange("password")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Loan Amount"
                  onChange={onFormFieldChange("phone")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="Reason For This Loan"
                  onChange={onFormFieldChange("message")}
                />
              </div>
              <div className="pl-2 pt-8"></div>
              <div className="h-120">
                <input
                  type="text"
                  id="fname"
                  className="border-pink-600 h-12 "
                  placeholder="City"
                  onChange={onFormFieldChange("message")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex align-middle p-14 justify-center ">
        <div className=" flex w-2/5 justify-center">
          <div className=" flex align-middle">
            <img src={logo} />
          </div>
          <div className="pl-2 flex items-center text-yellow-600 ">
            Power Finance Solutions
          </div>
        </div>
      </div>
    </>
  );
}
