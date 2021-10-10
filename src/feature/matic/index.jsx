import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useWeb3React } from '@web3-react/core'
import { matic } from './slice'
import { useEagerConnect } from '../../hooks/UseEagerConnect'

function MaticScreen() {
    const [account, setAccount] = useState('')
    const dispatch = useDispatch()


    const handleApprove = async()=>{
        let result  = await window.ethereum.request({ method: 'eth_requestAccounts' })
       console.log(result)
       setAccount(result)
    
     console.log('account in matic', account)
       dispatch(matic(account))
    }
    
    return (
        <div>
           current account is  {account}

           <input />
           <button className='btn btn-small btn-success' onClick ={handleApprove}>Start</button>
        </div>
    )
}

export default MaticScreen
