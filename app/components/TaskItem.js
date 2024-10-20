'use client';
import { useState } from 'react';
import styles from '../page.module.css';
import Button from './Button/Button';
import Modal from './Modal/Modal';

export default function TaskItem({ task, onEdit, onDelete, onToggleCompletion }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ ...task });

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        onEdit(task.id, editedTask);
        setIsEditing(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <>
            <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
                <h3
                    style={{
                        color:
                            task.priority === 'high' ? 'red' :
                                task.priority === 'medium' ? 'yellow' : 'green'
                    }}
                >
                    {task.title} {task.completed ? '(Completed)' : ''}
                </h3>
                <p>{task.description}</p>
                <Button variant="primary" onClick={() => onToggleCompletion(task.id)}>
                    {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
                </Button>
                <Button variant="secondary" onClick={handleEdit}>
                    Edit
                </Button>
                <Button variant="danger" onClick={() => onDelete(task.id)}>
                    Delete
                </Button>
            </div>

            <Modal isOpen={isEditing} onClose={() => setIsEditing(false)}>
                <h2>Edit Task</h2>
                <form className={styles.form}>
                    <input
                        type="text"
                        name="title"
                        value={editedTask.title}
                        onChange={handleChange}
                        placeholder="Task Title"
                        required
                    />
                    <textarea
                        name="description"
                        value={editedTask.description}
                        onChange={handleChange}
                        placeholder="Task Description"
                    />
                    <select
                        name="priority"
                        value={editedTask.priority}
                        onChange={handleChange}
                    >
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </select>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                    <Button variant="secondary" onClick={() => setIsEditing(false)}>
                        Cancel
                    </Button>
                </form>
            </Modal>
        </>
    );
}
