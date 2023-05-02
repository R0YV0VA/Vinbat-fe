import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isPopUpActive } from "../../redux/actions";
import Alert from "../Alert/Alert";
import "./PopUpForm.css";

const PopUpForm = ({ children, title }) => {
    const isAlert = useSelector(state => state.alert.isAlert);
    const dispatch = useDispatch();

    const closePopUp = () => {
        const props = {
            isActive: false,
            type: ''
        }
        dispatch(isPopUpActive(props));
    };
    return (
        <div className="popUpForm">
        {isAlert && <Alert />}
        <div className="popUpForm__content">
            <div className="popUpForm__title">
                <h1>{title}</h1>
            </div>
            {children}
            <button onClick={closePopUp}>Закрити</button>
        </div>
        </div>
    );
    }

export default PopUpForm;