import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setMyAccountAsync, isPopUpActive, setLoginNameAsync, changePasswordAsync, alertAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';
import PopUpForm from '../../components/PopUpForm/PopUpForm';
import { removeAccessToken } from '../../utils/accessToken';
import validator from 'validator'

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
    const isPopUp = useSelector(state => state.isPopUpActive.isActive)
    const PopUpType = useSelector(state => state.isPopUpActive.type)

    const logout = () => {
        removeAccessToken()
        window.location = '/'
    }

    const editPopUp = () => {
    const props = {
        isActive: true,
        type: 'edit'
    }
    dispatch(isPopUpActive(props))
    }

    const changePasswordPopUp = () => {
    const props = {
        isActive: true,
        type: 'changePassword'
    }
    dispatch(isPopUpActive(props))
    }

    const [namePopUp, setNamePopUp] = useState('')
    const [loginPopUp, setLoginPopUp] = useState('')
    const changeLoginName = () => {
        if (namePopUp === '' && loginPopUp === '') {
            const props = {
                isAlert: true,
                type: 'warning',
                message: 'Заповніть одне з полів'
            }
            dispatch(alertAsync(props))
            return
        }
        if (!validator.isEmail(loginPopUp) && loginPopUp !== '') {
            const props = {
                isAlert: true,
                type: 'warning',
                message: 'Невірна електронна пошта'
            }
            dispatch(alertAsync(props))
            return
        }
        const props = {
            name: namePopUp,
            login: loginPopUp
        }
        dispatch(setLoginNameAsync(props))
    }
    
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [repeatNewPassword, setRepeatNewPassword] = useState('')
    const changePassword = () => {
        if (oldPassword === '' || newPassword === '' || repeatNewPassword === '') {
            const props = {
                isAlert: true,
                type: 'warning',
                message: 'Заповніть всі поля'
            }
            dispatch(alertAsync(props))
            return
        }
        if (newPassword !== repeatNewPassword) {
            const props = {
                isAlert: true,
                type: 'warning',
                message: 'Паролі не співпадають'
            }
            dispatch(alertAsync(props))
            return
        }
        if (newPassword.length < 6) {
            const props = {
                isAlert: true,
                type: 'warning',
                message: 'Пароль має бути не менше 6 символів'
            }
            dispatch(alertAsync(props))
            return
        }
        const props = {
            oldpassword: oldPassword,
            newpassword: newPassword
        }
        dispatch(changePasswordAsync(props))
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
            <input type='text' value={namePopUp} onChange={(e) => setNamePopUp(e.target.value)} />
            <label>Логін</label>
            <input type='text' value={loginPopUp} onChange={(e) => setLoginPopUp(e.target.value)} />
            <button onClick={changeLoginName}>Зберегти</button>
        </PopUpForm>
        }
        {isPopUp && PopUpType === 'changePassword' &&
        <PopUpForm title='Змінити пароль'>
            <label>Старий пароль</label>
            <input type='password' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)} />
            <label>Новий пароль</label>
            <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
            <label>Повторіть новий пароль</label>
            <input type='password' value={repeatNewPassword} onChange={(e) => setRepeatNewPassword(e.target.value)} />
            <button onClick={changePassword}>Зберегти</button>
        </PopUpForm>
        }
        <div className='myAccount'>
            <div className='myAccount__info'>
                <h1>Мій акаунт</h1>
                <p>Ім'я: {name}</p>
                <p>Логін: {login}</p>
                <button onClick={editPopUp}>Редагувати</button>
                <button onClick={changePasswordPopUp}>Змінити пароль</button>
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