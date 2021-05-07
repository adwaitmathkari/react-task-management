// import React from 'react'
import {FaTimes} from 'react-icons/fa'

const Task = ({task, key, onDelete}) => {
    return (
        <div className='task'>
            <h3>
                {task.description} 
                <FaTimes
                    style={{ color: 'grey' }}
                    onClick={()=> onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
