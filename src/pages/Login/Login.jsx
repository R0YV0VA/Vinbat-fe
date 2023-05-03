import React, { useEffect, useState } from 'react'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { loginAsync, alertAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';
import validator from 'validator'

import Alert from '../../components/Alert/Alert';
import './Login.css';


const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const isAlert = useSelector(state => state.alert.isAlert)
    const unavailableSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/', '\\', '|', '{', '}', '[', ']', ':', ';', '"', "'", ',', '.', '<', '>', '?', '~', '`']

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
        <div className='login'>
            <h1>Вхід</h1>
            <div className='form-group'>
                <label htmlFor='login'>Електронна пошта</label>
                <input type='email' id='email' className='form-control' value={login} onChange={(e) => setLogin(e.target.value)} placeholder='user@email.com' />
                <label htmlFor='password'>Пароль</label>
                <input type='password' className='form-control' id='password' placeholder='Введіть пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='btn' onClick={makeLogin}>Увійти</button>
                <button onClick={() => navigate(routes.REGISTER)} className='btn'>Зареєструватися</button>
                <button className='btn'>Забули пароль?</button>
            </div>
        </div>
    </div>
)
}

export default Login;