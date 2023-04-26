import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import "./HomeCatalogue.css";

const HomeCatalogue = () => {
    return (
        <div className="home-catalogue">
            <h1>Наші товари</h1>
            <div className="element-container">
                <div className="element">
                    <img src="img/home-catalogue/wheels.png" alt="wheel" />
                    <span>
                        <h2>Шини</h2>
                    </span>
                </div>
                <div className="element">
                    <img src="img/home-catalogue/battery.png" alt="battery" />
                    <span>
                        <h2>Аккумулятори</h2>
                    </span>
                </div>
                <div className="element">
                    <img src="img/home-catalogue/power-inverter.webp" alt="power-inverter" />
                    <span>
                        <h2>Перетворювач напруги</h2>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HomeCatalogue;