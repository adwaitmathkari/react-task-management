import React from 'react'
import { useState } from 'react';


const AddTask = ({ addNewTask }) => {
    const [newTask, setNewTask] = useState({ text: '', day: '', reminder: false })
    // const [text, setText] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submit')
        // newTask.text = text
        if (newTask.text === '') {
            alert('Please add task');
            return
        }

        addNewTask(newTask)

        setNewTask({ text: '', day: '', reminder: false })
    }

    return (
        <form className="add-form" onSubmit={onSubmit} >
            <div className="form-control">
                <label>Task</label>
                <input
                    type="text" placeholder="Add Task"
                    value={newTask.text}
                    onChange={(e) => {
                        // let newTaskCopy = {...newTask};
                        // newTaskCopy.text = e.target.value
                        // setNewTask(newTaskCopy);

                        setNewTask({ ...newTask, text: e.target.value })
                    }}
                    // onChange={(e) => setText(e.target.value)}
                ></input>
            </div>

            <div className="form-control">
                <label>Date</label>
                <input
                    type="text" placeholder="Add Date"
                    value={newTask.day}
                    onChange={(e) => setNewTask({ ...newTask, day: e.target.value })}
                ></input>
            </div>

            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={newTask.reminder}
                    value={newTask.reminder}
                    onChange={(e) => setNewTask({ ...newTask, reminder: e.currentTarget.checked })}>
                </input>
            </div>

            <input type="submit" value='Save Task' className="btn btn-block" />

        </form>
    )
}

export default AddTask
