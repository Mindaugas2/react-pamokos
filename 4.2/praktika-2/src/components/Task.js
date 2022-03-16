import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

export default function Task() {

    const [like, setLike] = useState(0);
    const [dislike, setDislike] = useState(0);

    return (
        <div className="container">
            <div className="row">
                <div className='col'>
                    <div className="card" style={{ width: "28rem" }}>
                        <img src="https://reactjs.org/logo-og.png" className="card-img-top" alt="React" />
                        <div className="card-body">
                            <h5 className="card-title">Post</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequatur tempora, atque minima natus distinctio eum dolor nulla. In eos assumenda consequatur voluptatum dignissimos officiis vitae vel minus eaque molestias!</p>
                            <button onClick={() => setLike(like + 1)} type="button" className="btn btn-success"><AiOutlineLike /> Like {like}</button>
                            <button onClick={() => setDislike(dislike + 1)} type="button" className="btn btn-danger ms-2"><AiOutlineDislike /> Dislike {dislike}</button>
                            <button onClick={() => setLike(0) + setDislike(0)} type="button" className="btn btn-info ms-2">Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
