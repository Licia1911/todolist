import { React, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './taskForm.css';

export default function TaskForm({ onSubmit }) {
    const [input, setInput] = useState('');

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false,
        }

        onSubmit(newTask);
    }
    return (
        <form className='task-form' onSubmit={handleSubmit}>
            <input
                className='task-input'
                type='text'
                placeholder='Ingresa una tarea'
                name='text'
                onChange={handleChange}
            />
            <button className='task-button'>Agregar tarea</button>
        </form>
    )
}
