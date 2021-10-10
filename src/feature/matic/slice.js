import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'



// export const startFlow = async (
//     idaContract,
//     exchangeAddress,
//     inputTokenAddress,
//     outputTokenAddress,
//     amount
//   ) => {
//     const address = await getAddress();
//     const superFluid = await getSuperFluid();
//     const sfUser = superFluid.user({
//       address,
//       token: inputTokenAddress,
//     });
//     let call = [];
//     const isSubscribed = await idaContract.methods
//       .getSubscription(
//         outputTokenAddress,
//         exchangeAddress, // publisher
//         0, // indexId
//         sfUser.address,
//       )
//       .call();
//     try {
//       if (isSubscribed.approved) {
//         await sfUser.flow({
//           recipient: await superFluid.user({
//             address: exchangeAddress,
//             token: inputTokenAddress,
//           }), // address: would be rickosheaAppaddress, currently not deployed
//           flowRate: amount.toString(),
//         });
//       } else {
//         call = [
//           [
//             201, // approve the ticket fee
//             superFluid.agreements.ida.address,
//             web3.eth.abi.encodeParameters(
//               ['bytes', 'bytes'],
//               [
//                 superFluid.agreements.ida.contract.methods
//                   .approveSubscription(
//                     outputTokenAddress,
//                     exchangeAddress,
//                     0, // INDEX_ID
//                     '0x',
//                   )
//                   .encodeABI(), // callData
//                 '0x', // userData
//               ],
//             ),
//           ],
//           [
//             201, // approve the RIC subsidy
//             superFluid.agreements.ida.address,
//             web3.eth.abi.encodeParameters(
//               ['bytes', 'bytes'],
//               [
//                 superFluid.agreements.ida.contract.methods
//                   .approveSubscription(
//                     RICAddress,
//                     exchangeAddress,
//                     1, // INDEX_ID
//                     '0x',
//                   )
//                   .encodeABI(), // callData
//                 '0x', // userData
//               ],
//             ),
//           ],
//           [
//             201, // create constant flow (10/mo)
//             superFluid.agreements.cfa.address,
//             web3.eth.abi.encodeParameters(
//               ['bytes', 'bytes'],
//               [
//                 superFluid.agreements.cfa.contract.methods
//                   .createFlow(
//                     inputTokenAddress,
//                     exchangeAddress,
//                     amount.toString(),
//                     '0x',
//                   )
//                   .encodeABI(), // callData
//                 '0x', // userData
//               ],
//             ),
//           ],
//         ];
//         await superFluid.host.batchCall(call);
//       }
//     } catch (e) {
//       throw new Error(e);
//     }
//   };

export const getUserAsync = createAsyncThunk(
    'userSlice/fetchUser',
    async ()=>{
    const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
    return (response.data)

    }
)

export const matic = createSlice({
    name:'matic',
    initialState:{
        data:[],
        status:null,
        error:null
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
        .addCase(getUserAsync.pending, (state) => {
         state.status ='pending'
        })
        .addCase(getUserAsync.fulfilled, (state, {payload}) => {
       
           state.data=[...payload]
           state.status = 'fulfilled'
        })
        .addCase(getUserAsync.rejected, (state) => {
            state.status = 'rejected'    
        })
    }

})

export default matic.reducer;