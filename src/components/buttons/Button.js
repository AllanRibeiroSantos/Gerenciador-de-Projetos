import React from 'react';
import styles from './Button.module.css';

export default function Button({ value }) {
    return (
        <button className={styles.main_button}>{value}</button>
    )
}