import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';

export default function Example() {

    const [task, setTask] = useState({
        taskTitle: "Make a cake",
        status: false
    });

    function changeStatus() {
        setTask(prevState => {
            return { ...prevState, status: true };
        });
    }

    return (
        <div className='col'>
            <h3><span>{task.status ? <AiOutlineLike /> : <AiOutlineDislike />}</span>{task.taskTitle}</h3>
            <button onClick={changeStatus} type="button" className='btn btn-success'>Change status</button>
        </div>
    )
}
