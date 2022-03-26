import React, { useState } from 'react'
import PostContent from './PostContent';

export default function PostsList() {

    const data = [
        {
            id: 1,
            title: "HTML",
            content: "Aš mokausi HTML",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/220px-HTML5_logo_and_wordmark.svg.png",
            status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 2,
            title: "CSS",
            content: "Aš mokausi CSS",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
            status: false,
            changeStatus: { changeStatus }
        },
        {
            id: 3,
            title: "JavaScript",
            content: "Aš mokausi JavaScript",
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
            status: false,
            changeStatus: { changeStatus }
        }
    ]

    const [posts, setPosts] = useState(data);

    function changeStatus(id) {
        const updatePosts = [...posts];

        updatePosts.forEach(post => {
            if (post.id === id) {
                post.status = true;
            }
        })

        setPosts(updatePosts);
    }

    const postsList = posts.map(post => {
        return (
            <PostContent
                key={post.id}
                id={post.id}
                title={post.title}
                content={post.content}
                img={post.img}
                status={post.status}
                changeStatus={changeStatus}
            />
        )
    })

    return (
        <div className="container">
            <div className='row'>
                {postsList.length ? postsList : "EMPTY :("}
            </div>
        </div>
    )
}
