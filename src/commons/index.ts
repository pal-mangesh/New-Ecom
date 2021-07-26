const Utils = {
    minifyText : (text:string) => {
        if(text.length>100){
            return text.substr(0,100)+"...";
        } else {
            return text;
        }
    },
    getParamByKey : (key:string) => {
        return;
    }
};

export default Utils;