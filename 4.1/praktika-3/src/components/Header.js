import React from 'react'
import './Header.css'

export default function Header(props) {
    return (
        <div>
            <h1 className='Header-page-title'>{props.title}</h1>
            <img src={props.image} alt="Motivational Michael Jordan poster" className='Header-image' />
        </div>
    )
}