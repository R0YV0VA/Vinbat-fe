import React from 'react';
import lottie from "lottie-web";
import loadingAnimation from '../../animations/loading_bull.json'
import './Loading.css';

const Loading = () =>{
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#loading-animation"),
            animationData: loadingAnimation,
        });
      }, []);
    return (
        <div className='loading'>
            <h1>Завантаження</h1>
            <div id="loading-animation" className='loading-animation'></div>
        </div>
    );
}
export default Loading;