"use client"
import { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskForm from './components/TaskForm';
import styles from './page.module.css';
import { initialTasks } from "./util/data"

export default function Home() {
  const [tasks, setTasks] = useState(initialTasks);

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const editTask = (id, updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === id ? updatedTask : task))
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

 const sortTasks = (tasks) => {
  return tasks.sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1; // Completed tasks at the bottom
    }
    const priorityOrder = { high: 1, medium: 2, low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
}

  return (
    <div className={styles.container}>
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <div className={styles.taskList}>
        {sortedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={editTask}
            onDelete={deleteTask}
            onToggleCompletion={toggleCompletion}
          />
        ))}
      </div>
    </div>
  );
}
