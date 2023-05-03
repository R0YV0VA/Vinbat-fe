import React, { useEffect, useState } from 'react'
import maxim from "./img/maxim.jpg"
import vova from "./img/vova.jpg"
import vlad from "./img/vlad.jpg"

import './About.css';


const About = () => {
return (
    <div className='main'>
        <div className='about'>
            <h1>Про нас</h1>
            <p>Ми - команда вінницьких підприємців які пропонують вам можливість швидко та зручо обрати вам необхідні автомобільні запчастини та замовляти їх всього у два кліка.</p>
            <p>Ми пропонуємо вам широкий асортимент запчастин для автомобілів, мотоциклів та інших транспортних засобів. Ви можете замовити запчастини для будь-якого автомобіля, навіть якщо ви не знаєте його марку або модель. Для цього вам потрібно лише вказати VIN-код вашого автомобіля.</p>
        </div>
        <div className='about'>
            <h1>Наша команда</h1>
            <div className='team'>
                <div className='team-member'>
                    <img src={maxim} alt='team-member' />
                    <h3>Бандит в законі</h3>
                    <p>Розробник</p>
                </div>
                <div className='team-member'>
                    <img src={vova} alt='team-member' />
                    <h3>Дніпровський тємщик</h3>
                    <p>Розробник</p>
                </div>
                <div className='team-member'>
                    <img src={vlad} alt='team-member' />
                    <h3>Жид</h3>
                    <p>Розробник</p>
                </div>
            </div>
        </div>
    </div>
)
}

export default About;