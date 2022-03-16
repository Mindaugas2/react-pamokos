import React from 'react'
import './Box.css';

export default function Box({ color }) {
  return (
    <div className="col-3">
      <div className="Box" style={{ backgroundColor: color }}></div>
    </div>
  )
}
