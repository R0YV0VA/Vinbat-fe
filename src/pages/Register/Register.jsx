import React, { useEffect, useState } from 'react'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { registerAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';
import PhoneInput from 'react-phone-input-2'
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
        if (password !== repassword) {
            alert('Паролі не співпадають')
            return false
        }
        if (password.length < 6) {
            alert('Пароль має бути не менше 6 символів')
            return false
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
                <input type='text' className='form-control' id='name' placeholder="Введіть ім'я" onChange={(e) => setName(e.target.value)} />
                <label htmlFor='login'>Телефон</label>
                <PhoneInput specialLabel='' id='phone' country={'ua'} value={login} onChange={(e) => setLogin(e)} placeholder='380 (97) 000 00 00' />
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