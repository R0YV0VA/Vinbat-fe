import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'
import Loading from '../../components/Loading/Loading';
import Alert from '../../components/Alert/Alert';

import './Support.css';
import { addcaseAsync, alertAsync } from '../../redux/actions';


const Login = () => {
    const [username, setUsername] = useState('')
    const [connection, setConnection] = useState('')
    const [message, setMessage] = useState('')
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading)
    const isAlert = useSelector(state => state.alert.isAlert)

    const makeCase = () => {
        if (username === '' || connection === '' || message === '') {
        const alertProps = {
            isAlert: true,
            type: 'warning',
            message: 'Заповніть всі поля'
        }
        dispatch(alertAsync(alertProps))
        return
    }
        const props = {
            username: username,
            connection: connection,
            message: message
        }
        dispatch(addcaseAsync(props))
    }

return (
    <div className='main'>
        {isAlert && <Alert />}
        {isLoading && <Loading />}
        <div className='background'>
            <h1>Підтримка</h1>
            <div className='support'>
                <div className='support__open_case'>
                    <h2>Відкрити заявку</h2>
                    <input type='text' placeholder='Ваше ім`я' onChange={(e) => setUsername(e.target.value)} />
                    <input type='text' placeholder='Номер телефону, або електронну пошту' onChange={(e) => setConnection(e.target.value)} />
                    <input type='text' placeholder='Ваше запитання' onChange={(e) => setMessage(e.target.value)} />
                    <button onClick={makeCase}>Відправити</button>
                </div>
                <div className='support__contacts'>
                    <h2>Або зв'яжіться з нами</h2>
                    <p>Якщо у вас виникли питання, зв'яжіться з нами за телефоном +380 67 123 45 67</p>
                    <p>Або напишіть нам на електронну пошту: email@mail.com</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default Login;