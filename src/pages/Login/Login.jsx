import React, { useEffect, useState } from 'react'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { loginAsync, alertAsync, isPopUpActive, resetPasswordAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';
import validator from 'validator'
import PopUpForm from '../../components/PopUpForm/PopUpForm';

import Alert from '../../components/Alert/Alert';
import './Login.css';


const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const isAlert = useSelector(state => state.alert.isAlert)
    const isPopUp = useSelector(state => state.isPopUpActive.isActive)
    const PopUpType = useSelector(state => state.isPopUpActive.type)
    const unavailableSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/', '\\', '|', '{', '}', '[', ']', ':', ';', '"', "'", ',', '.', '<', '>', '?', '~', '`']

    const [loginPopUp, setLoginPopUp] = useState('')
    const [passwordPopUp, setPasswordPopUp] = useState('')
    const [passwordRepeatPopUp, setPasswordRepeatPopUp] = useState('')

    const resetPasswordPopUp = () => {
        const props = {
            isActive: true,
            type: 'resetPassword'
        }
        dispatch(isPopUpActive(props))
        }

    const makeResetPassword = () => {
        if (!validator.isEmail(loginPopUp)) {
            const alertProps = {
                isAlert: true,
                type: 'warning',
                message: 'Невірна електронна пошта'
            }
            dispatch(alertAsync(alertProps))
            return false
        }
        if (passwordPopUp !== passwordRepeatPopUp) {
            const alertProps = {
                isAlert: true,
                type: 'warning',
                message: 'Паролі не співпадають'
            }
            dispatch(alertAsync(alertProps))
            return false
        }
        for (let i = 0; i < unavailableSymbols.length; i++) {
            if (passwordPopUp.includes(unavailableSymbols[i])) {
                const alertProps = {
                    isAlert: true,
                    type: 'warning',
                    message: 'Пароль не може містити спеціальні символи'
                }
                dispatch(alertAsync(alertProps))
                return false
            }
        }
        if (passwordPopUp.length < 6) {
            const alertProps = {
                isAlert: true,
                type: 'warning',
                message: 'Пароль має бути не менше 6 символів'
            }
            dispatch(alertAsync(alertProps))
            return false
        }
        const credentials = {
            login: loginPopUp,
            password: passwordPopUp
        }
        dispatch(resetPasswordAsync(credentials))
    }

    const makeLogin = () => {
        if (password.length < 6) {
            const alertProps = {
                isAlert: true,
                type: 'warning',
                message: 'Пароль має бути не менше 6 символів'
            }
            dispatch(alertAsync(alertProps))
            return false
        }
        if (!validator.isEmail(login)) {
            const alertProps = {
                isAlert: true,
                type: 'warning',
                message: 'Невірна електронна пошта'
            }
            dispatch(alertAsync(alertProps))
            return false
        }
        for (let i = 0; i < unavailableSymbols.length; i++) {
            if (password.includes(unavailableSymbols[i])) {
                const alertProps = {
                    isAlert: true,
                    type: 'warning',
                    message: 'Пароль не може містити спеціальні символи'
                }
                dispatch(alertAsync(alertProps))
                return false
            }
        }
    const credentials = {
        login: login,
        password: password
    }
    dispatch(loginAsync(credentials))
    }
return (
    <div className='main'>
        {isAlert && <Alert />}
        {isLoading && <Loading />}
        {isPopUp && PopUpType === 'resetPassword' &&
        <PopUpForm title='Скинути пароль'>
            <label>Логін</label>
            <input type='text' value={loginPopUp} onChange={(e) => setLoginPopUp(e.target.value)} />
            <label>Новий пароль</label>
            <input type='password' value={passwordPopUp} onChange={(e) => setPasswordPopUp(e.target.value)} />
            <label>Повторіть пароль</label>
            <input type='password' value={passwordRepeatPopUp} onChange={(e) => setPasswordRepeatPopUp(e.target.value)} />
            <button onClick={makeResetPassword}>Скинути пароль</button>
        </PopUpForm>
        }
        <div className='login'>
            <h1>Вхід</h1>
            <div className='form-group'>
                <label htmlFor='login'>Електронна пошта</label>
                <input type='email' id='email' className='form-control' value={login} onChange={(e) => setLogin(e.target.value)} placeholder='user@email.com' />
                <label htmlFor='password'>Пароль</label>
                <input type='password' className='form-control' id='password' placeholder='Введіть пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn' onClick={makeLogin}>Увійти</button>
                <button onClick={() => navigate(routes.REGISTER)} className='btn'>Зареєструватися</button>
                <button className='btn' onClick={resetPasswordPopUp} >Забули пароль?</button>
            </div>
        </div>
    </div>
)
}

export default Login;