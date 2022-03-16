import React from 'react'

export default function PostContent(props) {
  return (
    <article>
        <h3 className='mt-5'>{props.header}</h3>
        <p>{props.text}</p>
    </article>
  )
}
