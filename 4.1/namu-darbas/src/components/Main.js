import React from 'react'
import MainCard from './MainCard'
import { v4 as uuidv4 } from 'uuid';

export default function Main() {

    let data = [
        {
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            time: "6 mins"
        },
        {
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            time: "69 mins"
        },
        {
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            time: "420 mins"
        },
        {
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            time: "500 mins"
        },
        {
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            time: "1 mins"
        },
        {
            text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
            time: "2 mins"
        }
    ];

    let list = data.map(item => {
        return <MainCard key={uuidv4()} cardText={item.text} cardTime={item.time} />
    });

    return (
        <main role="main">
            <section className="jumbotron text-center">
                <div className="container">
                    <h1 className="jumbotron-heading">Album example</h1>
                    <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
                    <p>
                        <a href="lt.vtmc" className="btn btn-primary my-2">Main call to action</a>
                        <a href="lt.vtmc" className="btn btn-secondary my-2">Secondary action</a>
                    </p>
                </div>
            </section>

            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row">
                        {list}
                    </div>
                </div>
            </div>
        </main>
    )
}
