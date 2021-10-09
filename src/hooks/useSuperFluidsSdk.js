import { useEffect, useState } from "react";
const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const { Web3Provider } = require("@ethersproject/providers");



const useSuperFluidsSdk = ()=>{
    const [userObject, setUserObject] = useState({})
    const sfSdk = async()=>{
        const sf = new SuperfluidSDK.Framework({
            ethers: new Web3Provider(window.ethereum)
        });
        await sf.initialize()
        setUserObject(sf)
    }
    useEffect(() => {
      sfSdk() 
    }, [])

    return userObject;
}

export default useSuperFluidsSdk;
