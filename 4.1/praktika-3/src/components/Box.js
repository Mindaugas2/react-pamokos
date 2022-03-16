import React from 'react'
import './Box.css';

export default function Box(props) {
  return (
    <div>
        <div className="Box" style={{backgroundColor: props.color}}></div>
    </div>
  )
}
