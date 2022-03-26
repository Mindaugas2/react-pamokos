import React from 'react'

export default function PostContent({ id, title, content, img, status, changeStatus }) {

    return (
        <div className="col-4">
            <h3>{title}</h3>
            <img src={img} alt={title} className="img-fluid" />
            <p>{content}</p>
            <p>{status ? "Išmokau" : "Mokausi"}</p>
            <button onClick={() => changeStatus(id)} className="btn btn-light">OK</button>
        </div>
    )
}
