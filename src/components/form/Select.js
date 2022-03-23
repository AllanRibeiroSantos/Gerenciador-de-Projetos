import React from 'react'
import styles from './Select.module.css';

export default function Select({ selected, disabled, text, name }) {
	return (
		<>
			<label className={styles.novoprojeto_form_label} htmlFor={name}>
					Selecione a categoria:
			</label>
			<select name={name}>
				<option
					selected={selected}
					disabled={disabled}>
					{text}
				</option>
			</select>
		</>
	)
}