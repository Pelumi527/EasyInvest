

export const useEagerConnect = async()=> {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

// const UseEagerConnect =()=>{
//     const walletAddress = await window.ethereum.request({
//     method: 'eth_requestAccounts',
//     params: [
//       {
//         eth_accounts: {}
//       }
//     ]
//   });
// }