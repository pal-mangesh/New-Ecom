import Axios from "axios";
import cookies from "../cookies";

const getHeaders = () => {
  const authKey = cookies.get("authKey");
  if (authKey && authKey.length) {
    return {
      headers: {
        Authorization: "Bearer " + authKey,
      },
    };
  }
  return {};
};

const hostname=  "http://localhost:1337";

const Network =  {
  get: async (url: string) => {
    try{
    const response = await Axios.get(hostname+url,getHeaders());
    return response;
    }catch(e){
      console.log("could not make server request!");
    }
  },
  post: async (url: string, data: any) => {
    const response = await Axios.post(hostname+url, data, getHeaders());
    return response;
  },
};

export default Network;