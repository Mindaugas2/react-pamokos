import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Comments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function getComments() {
            const response = await fetch("https://jsonplaceholder.typicode.com/comments");
            const data = await response.json();
            setComments(data);
        };

        getComments();
    }, []);

    const list = comments.slice(0, 48).map(x => {
        return (
            <div className="col-3" key={uuidv4()}>
                <p>{x.name}</p>
                <p>{x.email}</p>
                <p>{x.body}</p>
            </div>
        )
    })

    return (
        <>
            {list}
        </>
    )
}
