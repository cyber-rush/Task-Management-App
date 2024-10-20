'use client';
import Button from '../Button/Button';
import styles from './modal.module.css';

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                {children}
            </div>
        </div>
    );
}
