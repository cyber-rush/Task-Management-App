'use client';
import styles from './button.module.css';
export default function Button({
    variant = 'primary',
    disabled = false,
    loading = false,
    onClick,
    children,
    ...props
}) {
    // Construct className based on props
    const buttonClasses = `${styles.button} ${styles[variant]} ${disabled || loading ? styles.disabled : ''
        }`;

    return (
        <button
            className={buttonClasses}
            disabled={disabled || loading}
            onClick={onClick}
            {...props}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
}