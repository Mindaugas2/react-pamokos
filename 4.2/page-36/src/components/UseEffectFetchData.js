import React, { useEffect, useState } from 'react'

export default function UseEffectFetchData() {
    const url = "https://api.github.com/users";
    const [users, setUsers] = useState([]);
    const getUsers = async () => {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className='col-4'>
            {users.map(user => {
                return <img src={user.avatar_url} alt="#" />
            })};
        </div>
    )
}
