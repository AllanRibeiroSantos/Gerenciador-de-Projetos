import React from 'react'
import styles from './Select.module.css';

export default function Select({ text, name, options, handleOnChange, value }) {
	// handleOnChange e value serão utilizados mais para frente

	function getCategorias () {
		return options.map(categorias =>
			<option key={categorias.id}>{categorias.name}</option>
		)
	}

	return (
		<>
			<label className={styles.form_label} htmlFor={name}>
				{text}
			</label>
			<select name={name} id={name}>
				<option selected disabled>Selecione a categoria</option>
				{getCategorias()}
			</select>
		</>
	)
}
