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
    const name = useSelector(state => state.myAccount.name)
    const login = useSelector(state => state.myAccount.login)
    const purchasesAmount = useSelector(state => state.myAccount.purchasesAmount)
    const discount= useSelector(state => state.myAccount.discount)
    const status = useSelector(state => state.myAccount.status)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setMyAccountAsync())
    }, [])
return (
    <div className='main'>
        {isAlert && <Alert />}
        {isLoading && <Loading />}
        <div className='myAccount'>
            <div className='myAccount__info'>
                <h1>Мій акаунт</h1>
                <p>Ім'я: {name}</p>
                <p>Логін: {login}</p>
                <button>Редагувати</button>
                <button>Змінити пароль</button>
                <p>Сума покупок: {purchasesAmount}</p>
                <p>Знижка: {discount}%</p>
            </div>
            <div className='myAccount__about'>
                <h1>Про знижку</h1>
                <p>Знижка надається постійним клієнтам залежно від суми покупок.</p>
                <p>Знижка не надається при покупці товарів, які вже мають знижку.</p>
                <p>Знижка не надається при покупці товарів, які продаються за акційною ціною.</p>
            </div>
        </div>
    </div>
)
}

export default MyAccount;