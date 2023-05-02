import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMyAccountAsync, isPopUpActive } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';
import Cookies from 'universal-cookie';
import PopUpForm from '../../components/PopUpForm/PopUpForm';

import Alert from '../../components/Alert/Alert';
import './MyAccount.css';


const MyAccount = () => {
    const cookies = new Cookies();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const isAlert = useSelector(state => state.alert.isAlert)
    const name = useSelector(state => state.myAccount.name)
    const login = useSelector(state => state.myAccount.login)
    const purchasesAmount = useSelector(state => state.myAccount.purchasesAmount)
    const discount= useSelector(state => state.myAccount.discount)
    const status = useSelector(state => state.myAccount.status)
    const isPopUp = useSelector(state => state.isPopUpActive.isActive)
    const PopUpType = useSelector(state => state.isPopUpActive.type)

    const logout = () => {
        cookies.remove('token')
        window.location = '/'
    }

    const edit = () => {
    const props = {
        isActive: true,
        type: 'edit'
    }
    dispatch(isPopUpActive(props))
    }

    const changePassword = () => {
    const props = {
        isActive: true,
        type: 'changePassword'
    }
    dispatch(isPopUpActive(props))
    }

    useEffect(() => {
        dispatch(setMyAccountAsync())
    }, [])
return (
    <div className='main'>
        {isAlert && <Alert />}
        {isLoading && <Loading />}
        {isPopUp && PopUpType === 'edit' &&
        <PopUpForm title='Внесіть зміни'>
            <label>Ім'я</label>
            <input type='text' />
            <label>Логін</label>
            <input type='text' />
            <button>Зберегти</button>
        </PopUpForm>
        }
        {isPopUp && PopUpType === 'changePassword' &&
        <PopUpForm title='Змінити пароль'>
            <label>Старий пароль</label>
            <input type='password' />
            <label>Новий пароль</label>
            <input type='password' />
            <label>Повторіть новий пароль</label>
            <input type='password' />
            <button>Зберегти</button>
        </PopUpForm>
        }
        <div className='myAccount'>
            <div className='myAccount__info'>
                <h1>Мій акаунт</h1>
                <p>Ім'я: {name}</p>
                <p>Логін: {login}</p>
                <button onClick={edit}>Редагувати</button>
                <button onClick={changePassword}>Змінити пароль</button>
                <button onClick={logout}>Вийти</button>
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