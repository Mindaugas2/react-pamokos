import React, { useState } from 'react'
import Photos from './Photos';
import Posts from './Posts';
import Comments from './Comments';

export default function Praktika6() {
    const [state, setState] = useState();

    return (
        <div className="container">
            <h2>6 užduotis</h2>
            <h3>Which kind of data would you like to generate?</h3>

            <div className="row">
                <div className="col">
                    <button type="button" className="btn btn-primary" onClick={() => setState("photos")}>Photos</button>
                    <button type="button" className="btn btn-secondary ms-4" onClick={() => setState("posts")}>Posts</button>
                    <button type="button" className="btn btn-success ms-4" onClick={() => setState("comments")}>Comments</button>
                </div>
            </div>

            <div className="row mt-4">
                {state === "photos" && <Photos />}
                {state === "posts" && <Posts />}
                {state === "comments" && <Comments />}
            </div>
        </div>
    );
}
