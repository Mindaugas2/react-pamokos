import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Users() {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.github.com/users")
            const data = await response.json()
            setUsers(data)
        }

        fetchData()
    }, [])

    return (
        <div className="container">
            <div className="row">
                {users.map(user => {
                    return (
                        <div className="col-4" key={user.id}>
                            <img src={user.avatar_url} alt="Profile image" className="bd-placeholder-img rounded-circle" width="140" height="140" />
                            <h2>{user.login}</h2>
                            <p><a onClick={() => navigate(user.login)} className="btn btn-secondary">View details &raquo;</a></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
