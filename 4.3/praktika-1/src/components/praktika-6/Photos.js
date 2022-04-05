import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Photos() {

  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function getPhotos() {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos");
      const data = await response.json();
      setPhotos(data);
    };

    getPhotos();
  }, []);

  const list = photos.slice(0, 48).map(x => {
    return (
      <figure className="col-2" key={uuidv4()}>
        <img src={x.thumbnailUrl} alt="thumbnail" />
        <figcaption>{x.title}</figcaption>
      </figure>
    )
  })

  return (
    <>
      {list}
    </>
  )
}
