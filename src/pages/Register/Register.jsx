import React, { useEffect, useState } from 'react'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { registerAsync, alertAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';
import validator from 'validator'
import Alert from '../../components/Alert/Alert';

import './Register.css';


const Register = () => {
    const [name, setName] = useState('')
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const isAlert = useSelector(state => state.alert.isAlert)

    const validate = () => {
        const unavailableSymbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '=', '/', '\\', '|', '{', '}', '[', ']', ':', ';', '"', "'", ',', '.', '<', '>', '?', '~', '`']
        if (password !== repassword) {
            const alertProps = {
                isAlert: true,
                type: 'warning',
                message: 'Паролі не співпадають'
            }
            dispatch(alertAsync(alertProps))
            return false
        }
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
            if (name.includes(unavailableSymbols[i])) {
                const alertProps = {
                    isAlert: true,
                    type: 'warning',
                    message: 'Ім\'я не може містити спеціальні символи'
                }
                dispatch(alertAsync(alertProps))
                return false
            }
        }
        return true
    }

    const makeRegister = () => {
        if(validate() === false) return
        const credentials = {
            name: name,
            login: login,
            password: password,
        }
        dispatch(registerAsync(credentials))
    }
return (
    <div className='main'>
        {isAlert && <Alert />}
        {isLoading && <Loading />}
        <div className='register'>
            <h1>Реєстрація</h1>
            <div className='form-group'>
                <label htmlFor='name'>Ім'я</label>
                <input type='text' className='form-control' id='name' placeholder="Введіть ім'я" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor='login'>Електронна пошта</label>
                <input type='email' id='email' className='form-control' value={login} onChange={(e) => setLogin(e.target.value)} placeholder='user@email.com' />
                <label htmlFor='password'>Пароль</label>
                <input type='password' className='form-control' id='password' placeholder='Введіть пароль' onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor='password'>Повторіть пароль</label>
                <input type='password' className='form-control' id='repassword' placeholder='Повторіть пароль' onChange={(e) => setRepassword(e.target.value)} />
                <button onClick={makeRegister} className='btn'>Зареєструватися</button>
                <p>Вже маєте аккаунт?</p>
                <button onClick={() => navigate(routes.LOGIN)} className='btn'>Увійти</button>
            </div>
        </div>
    </div>
)
}

export default Register;