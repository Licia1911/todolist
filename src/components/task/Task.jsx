import React from 'react';
import './task.css';

export default function Task({ id, text, completed, completeTask, deleteTask }) {
    return (
        <div className={completed ? 'task-container completed' : 'task-container'}>
            <div className='text-task' onClick={() => completeTask(id)}>
                {text}
            </div>
            <div className='task-icon-container' onClick={() => deleteTask(id)}>
            </div>
        </div>
    )
}
