import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'

import './Register.css';


const Register = () => {
    const navigate = useNavigate();
return (
    <div className='main'>
        <div className='register'>
            <h1>Реєстрація</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='name'>Ім'я</label>
                    <input type='text' className='form-control' id='name' placeholder="Введіть ім'я" />
                    <label htmlFor='login'>Логін</label>
                    <input type='text' className='form-control' id='login' placeholder='Введіть логін' />
                    <label htmlFor='password'>Пароль</label>
                    <input type='password' className='form-control' id='password' placeholder='Введіть пароль' />
                    <label htmlFor='password'>Повторіть пароль</label>
                    <input type='password' className='form-control' id='password' placeholder='Введіть пароль' />
                    <button className='btn'>Зареєструватися</button>
                    <p>Вже маєте аккаунт?</p>
                    <button onClick={() => navigate(routes.LOGIN)} className='btn'>Увійти</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Register;