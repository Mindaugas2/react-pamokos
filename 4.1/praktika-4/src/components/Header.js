import React from 'react'
import './Header.css'

export default function Header({ title, image }) {
    return (
        <div>
            <h1 className='Header-page-title'>{title}</h1>
            <img src={image} alt="Motivational Michael Jordan poster" className='Header-image' />
        </div>
    )
}