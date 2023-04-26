import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { loginAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';

import './Login.css';


const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const cookies = new Cookies();
    
    const makeLogin = () => {
    const credentials = {
        login: login,
        password: password
    }
    dispatch(loginAsync(credentials))
    }
return (
    <div className='main'>
        {isLoading && <Loading />}
        <div className='login'>
            <h1>Вхід</h1>
            <div className='form-group'>
                <label htmlFor='login'>Логін</label>
                <input type='text' className='form-control' id='login' placeholder='Введіть логін' value={login} onChange={(e) => setLogin(e.target.value)} />
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