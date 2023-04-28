import React, { useEffect, useState } from 'react'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import { loginAsync } from '../../redux/actions';
import Loading from '../../components/Loading/Loading';

import Alert from '../../components/Alert/Alert';
import './Login.css';


const Login = () => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const isAlert = useSelector(state => state.alert.isAlert)
    

    const makeLogin = () => {
    const credentials = {
        login: login,
        password: password
    }
    console.log(credentials)
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