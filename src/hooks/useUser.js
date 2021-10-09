import UseSuperFluidsSdk from "./useSuperFluidsSdk";
import useWallet from "./useWallet";

      
  const useUser =()=>{
      const sf = UseSuperFluidsSdk()
      const walletAddress = useWallet()
      if(!sf?.user) return sf
      const user = sf?.user({
        address: walletAddress[0],
        token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
    });

    return user
  }

  export default useUser;