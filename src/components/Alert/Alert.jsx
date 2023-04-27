import React from 'react';
import { useSelector } from 'react-redux';
import './Alert.css';

const Alert = () =>{
    const message = useSelector(state => state.alert.message)
    const type = useSelector(state => state.alert.type)
    return (
        <div className={`alert alert-${type}`}>
            <strong>{message}</strong>
        </div>
    );
}
export default Alert;