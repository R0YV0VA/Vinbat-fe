import React, { useEffect, useState } from 'react'
import battery from "./img/battery.png"
import powerInverter from "./img/power-inverter.webp"
import wheels from "./img/wheels.png"
import "./HomeCatalogue.css";

const HomeCatalogue = () => {
    return (
        <div className="home-catalogue">
            <h1>Наші товари</h1>
            <div className="element-container">
                <div className="element">
                    <img src={wheels} alt="wheel" />
                    <span>
                        <h2>Шини</h2>
                    </span>
                </div>
                <div className="element">
                    <img src={battery} alt="battery" />
                    <span>
                        <h2>Аккумулятори</h2>
                    </span>
                </div>
                <div className="element">
                    <img src={powerInverter} alt="power-inverter" />
                    <span>
                        <h2>Перетворювач напруги</h2>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default HomeCatalogue;