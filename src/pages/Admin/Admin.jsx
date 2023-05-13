import React, { useEffect, useState } from 'react'
import routes from '../../routes';
import _replace from 'lodash/replace'
import _map from 'lodash/map'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setCatalogPagesAsync, setCatalogGoodsAsync } from '../../redux/actions'

import './Admin.css'


const Admin = () => {
    const { page, category } = useParams()
    const goods = useSelector(state => state.goods.products)
    const allPages = useSelector(state => state.cataloguePages.fullPages)
    const dispatch = useDispatch()
    const pages = []
    const pageOptions = {
        page: page,
        category: category
    }
    const createPages = () => {
        for (let i = 1; i <= allPages; i++) {
            let url = routes.ADMIN
            url = _replace(url, ':page', i)
            url = _replace(url, ':category', category)
            const page = (
                <div className='pagination__page' key={i}>
                    <a href={url}>{i}</a>
                </div>
            )
            pages.push(page)
        }
        return pages
    }
    const createGoods = () => {
        return (
            <div className='goods'>
                {_map(goods, (item, index) => {
                    return (
                        <div className='goods__item' key={index}>
                            <div className='goods__item__img'>
                                <img src={item.image === null ? '/no-image.png' : item.image} alt={item.name} width='120px'/>
                            </div>
                            <div className='goods__item__info'>
                                <h3>{item.name}</h3>
                                <p>Ціна: {item.price} грн</p>
                                <p color='green'>{item.isAvailable === true ? 'Є в наявності' : 'Немає в наявності'}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
    useEffect(() => {
        dispatch(setCatalogPagesAsync())
        dispatch(setCatalogGoodsAsync(pageOptions))
    }, [])
return (
    <div className='main'>
        <div className='background'>
            <h1>Товари</h1>
            {createGoods()}
            <div className='pagination'>
                {createPages()}
            </div>
        </div>
    </div>
)
}

export default Admin;