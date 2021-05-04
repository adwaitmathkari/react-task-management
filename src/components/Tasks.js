// import { useState } from 'react'
import Task from './Task'
const Tasks = ({tasks}) => {
    tasks = tasks??[]
    return (
        <>
            {tasks.map((task) => (
                <Task key1={task.id} task = {task} />
            ))}
        </>
    )
}

export default Tasks
