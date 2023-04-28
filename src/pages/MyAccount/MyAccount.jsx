import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { setMyAccountAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';

import Alert from '../../components/Alert/Alert';
import './MyAccount.css';


const MyAccount = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const isAlert = useSelector(state => state.alert.isAlert)
    
    const makeRequest = () => {
        dispatch(setMyAccountAsync())
    }
return (
    <div className='main'>
        {isAlert && <Alert />}
        {isLoading && <Loading />}
        <button onClick={makeRequest}>check</button>
    </div>
)
}

export default MyAccount;