import React from 'react'

export default function MainCard({ cardText, cardTime }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4 box-shadow">
                <img className="card-img-top" data-src="holder.js/100px225?theme=thumb&bg=55595c&fg=eceeef&text=Thumbnail" alt="" />
                <div className="card-body">
                    <p className="card-text">{cardText}</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">{cardTime}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
