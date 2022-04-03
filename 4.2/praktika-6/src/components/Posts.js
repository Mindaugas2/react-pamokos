import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getPosts() {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            const data = await response.json();
            setPosts(data);
        };

        getPosts();
    }, []);

    const list = posts.slice(0, 48).map(x => {
        return (
            <div className="col-3" key={uuidv4()}>
                <h2>{x.title}</h2>
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
