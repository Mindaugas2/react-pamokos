import React from 'react'
import { FaCheck, FaChevronRight } from 'react-icons/fa';

export default function TODOContent({ id, title, status, changeStatus, deleteTODO }) {

    return (
        <>
            <div className="col-4">
                <div className={status ? "alert alert-success" : "alert alert-warning"}>
                    <p>{status ? <FaCheck /> : <FaChevronRight />} {title}</p>
                </div>
            </div>
            <div className="col-8">
                <button onClick={() => changeStatus(id)} className="btn btn-light">{status ? "Done" : "Check"}</button>
                <button onClick={() => deleteTODO(id)} className="btn btn-danger">Delete</button>
            </div>
        </>
    )
}
