import React from 'react'

export default function PostContent({ header, text }) {
  return (
    <article>
      <h3 className='mt-5'>{header}</h3>
      <p>{text}</p>
    </article>
  )
}
