import React, { useEffect, useState } from 'react'
import routes from '../../routes';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from '../NotFound/NotFound';
import { setCatalogPagesAsync } from '../../redux/actions'

import './Admin.css'


const Admin = () => {
    const status = useSelector(state => state.myAccount.status)
    const allPages = useSelector(state => state.cataloguePages.fullPages)
    const dispatch = useDispatch()
    const pages = []

    const createPages = () => {
        for (let i = 1; i <= allPages; i++) {
            const page = (
                <div className='pagination__page' key={i}>
                    <a href='#'>{i}</a>
                </div>
            )
            pages.push(page)
        }
        return pages
    }
    useEffect(() => {
        dispatch(setCatalogPagesAsync())
    }, [])
return (
    <div className='main'>
        <div className='background'>
            <h1>Товари</h1>
            <div className='pagination'>
                {createPages()}
            </div>
        </div>
    </div>
)
}

export default Admin;