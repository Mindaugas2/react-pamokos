import React, { useState } from 'react'

export default function KoMokausi({ image, text }) {

    const [learning, setLearning] = useState({
        words: "Aš mokausi ",
        status: false
    });

    function changeStatus() {
        setLearning(prevState => {
            return { ...prevState, status: true };
        })
    }

    return (
        <div className="col-4">
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{learning.words} {text}</h5>
                    <p className="card-text">{learning.status ? "Išmokau" : "Mokausi"}</p>
                    <button onClick={changeStatus} className="btn btn-primary">OK</button>
                </div>
            </div>
        </div>
    )
}
