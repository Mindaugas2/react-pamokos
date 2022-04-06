import React, { useState } from 'react'
import TODOContent from './TODOContent';

export default function TODOList() {

    const data = [
        {
            id: 1,
            title: "Make a cake",
            status: false,
            changeStatus: { changeStatus },
            deleteTODO: { deleteTODO }
        },
        {
            id: 2,
            title: "No alcohol today",
            status: false,
            changeStatus: { changeStatus },
            deleteTODO: { deleteTODO }
        },
        {
            id: 3,
            title: "Wear shirt that says 'LIFE'",
            status: false,
            changeStatus: { changeStatus },
            deleteTODO: { deleteTODO }
        },
        {
            id: 4,
            title: "Sleep",
            status: false,
            changeStatus: { changeStatus },
            deleteTODO: { deleteTODO }
        },
        {
            id: 5,
            title: "Make TODO list",
            status: false,
            changeStatus: { changeStatus },
            deleteTODO: { deleteTODO }
        },
        {
            id: 6,
            title: "Look at list",
            status: false,
            changeStatus: { changeStatus },
            deleteTODO: { deleteTODO }
        },
        {
            id: 7,
            title: "PANIC!",
            status: false,
            changeStatus: { changeStatus },
            deleteTODO: { deleteTODO }
        }
    ]

    const [tasks, setTasks] = useState(data);

    function changeStatus(id) {
        const updateTasks = [...tasks];

        updateTasks.forEach(task => {
            if (task.id === id) {
                task.status = true;
            }
        })

        setTasks(updateTasks);
    }

    function deleteTODO(id) {
        const updateTasks = tasks.filter(task => task.id !== id);

        setTasks(updateTasks);
    }

    const TODOList = tasks.map(post => {
        return (
            <TODOContent
                key={post.id}
                id={post.id}
                title={post.title}
                status={post.status}
                changeStatus={changeStatus}
                deleteTODO={deleteTODO}
            />
        )
    })

    return (
        <div className="container">
            <div className='row'>
                {TODOList.length ? TODOList : "EMPTY :("}
            </div>
        </div>
    )
}
