import React from 'react'
import './PostImage.css'

export default function PostImage({ image }) {
  return (
    <div>
      <img src={image} alt="Michael Jordan going for a shot" className='post-image mx-auto d-block mt-5' />
    </div>
  )
}
