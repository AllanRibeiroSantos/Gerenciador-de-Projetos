import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LinkButton.module.css';

export default function LinkButton({ to, text }) {
    return (
        <Link className={styles.main_linkbutton} to={to}>{text}</Link>
    )
}