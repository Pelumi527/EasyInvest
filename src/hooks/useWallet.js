import {useEffect, useState} from 'react'

const useWallet =()=>{
    const [wallet, setWallet] = useState({})

    const getWallet =async()=>{
        const walletAddress = await window.ethereum.request({
            method: 'eth_requestAccounts',
            params: [
              {
                eth_accounts: {}
              }
            ]
          });
          setWallet(walletAddress)
    }


      useEffect(() => {
          getWallet()
        //  effect
  
      }, [])
return wallet
}

export default useWallet;