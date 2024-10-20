'use client';
import { useState } from 'react';
import styles from '../page.module.css';
import Button from './Button/Button';

export default function TaskForm({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('low');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            id: Date.now(),
            title,
            description,
            priority,
            completed: false,
        };
        onAddTask(newTask);
        setTitle('');
        setDescription('');
        setPriority('low');
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                className={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                required
            />
            <textarea
                value={description}
                className={styles.textarea}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
            />
            <select
                value={priority}
                className={styles.select}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>
            <Button type="submit" className={styles.button} >
                Add Task
            </Button>
        </form>
    );
}
