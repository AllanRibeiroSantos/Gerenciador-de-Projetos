import React from 'react'
import styles from './Input.module.css';

export default function Input({ type, placeholder, name, text }) {
	return (
		<>
			<label className={styles.form_label} htmlFor={name}>{text}</label>
			<input className={styles.form_input} type={type} placeholder={placeholder} name={name}/>
		</>
	)
}
