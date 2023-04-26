import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom'

import './Support.css';


const Login = () => {
    const navigate = useNavigate();
return (
    <div className='main'>
        <div className='background'>
            <h1>Підтримка</h1>
            <div className='support'>
                <div className='support__open_case w-50'>
                    <h2>Відкрити заявку</h2>
                    <input type='text' placeholder='Ваше ім`я' />
                    <input type='text' placeholder='Номер телефону, або електронну пошту' />
                    <input type='text' placeholder='Ваше запитання' />
                    <button>Відправити</button>
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