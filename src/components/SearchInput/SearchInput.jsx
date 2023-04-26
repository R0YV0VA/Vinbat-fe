import React from 'react';
import Cookies from 'universal-cookie';
import routes from '../../routes';
import { useNavigate  } from 'react-router-dom'
import './SearchInput.css';

const SearchInput = () =>{
    const cookies = new Cookies();
    const navigate = useNavigate();
    return (
        <div className='search'>
        <input className="search-input" placeholder='Знайти товар...'/>
        <button className="search-button" onClick={() => navigate(routes.HOME)}>Пошук</button>
        </div>
    );
}
export default SearchInput;