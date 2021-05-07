// import { useState } from 'react'
import Task from './Task'
const Tasks = ({tasks, onDelete}) => {
    tasks = tasks??[]
    return (
        <>
            {tasks.map((task) => (
                <Task key1={task.id} task={task} onDelete={onDelete}/>
            ))}
        </>
    )
}

export default Tasks
