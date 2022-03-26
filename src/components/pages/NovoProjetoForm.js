import React from 'react'
import { useEffect, useState } from 'react';
import SubmitButton from '../buttons/SubmitButton';
import Input from '../form/Input';
import Select from '../form/Select';
import styles from './NovoProjetoForm.module.css';

export default function NovoProjetoForm() {

	const [categorias, setCategorias] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/categorias', {
			method: 'GET',
			headers: {
				'Content-Type': 'aplication/json'
			}
		})
		 .then(resposta => resposta.json())
		 .then(data => setCategorias(data))
		 .catch(erro => console.log(erro))
	}, []);

	return (
		<form className={styles.novoprojeto_form}>
			<Input
				type='text'
				name='nomeProjeto'
				placeholder='Insira o nome'
				text='Nome do projeto:'
			/>
			<Input
				type='number'
				name='orcamento'
				placeholder='Insira o orçamento total'
				text='Orçamento do projeto:'
			/>
			<Select options={categorias} text='Selecione a categoria:' />
			<SubmitButton text='Criar Projeto' />
		</form>
	)
}
