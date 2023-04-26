import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';

import HomeSlider from '../../components/Slider/HomeSlider';
import HomeCatalogue from '../../components/HomeCatalogue/HomeCatalogue';

const Home = () => {
return (
    <>
        <HomeSlider />
        <HomeCatalogue />
    </>
)
}

export default Home;