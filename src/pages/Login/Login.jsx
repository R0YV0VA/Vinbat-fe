import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'

import './Login.css';


const Login = () => {
    const navigate = useNavigate();
return (
    <div className='main'>
        <div className='login'>
            <h1>Вхід</h1>
            <form>
                <div className='form-group'>
                    <label htmlFor='login'>Логін</label>
                    <input type='text' className='form-control' id='login' placeholder='Введіть логін' />
                    <label htmlFor='password'>Пароль</label>
                    <input type='password' className='form-control' id='password' placeholder='Введіть пароль' />
                    <button className='btn'>Увійти</button>
                    <button onClick={ () => navigate(routes.REGISTER)} className='btn'>Зареєструватися</button>
                    <button className='btn'>Забули пароль?</button>
                </div>
            </form>
        </div>
    </div>
)
}

export default Login;