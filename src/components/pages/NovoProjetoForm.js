import React from 'react'
import SubmitButton from '../buttons/SubmitButton';
import Input from '../form/Input';
import styles from './NovoProjetoForm.module.css';

export default function NovoProjetoForm() {
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
			<label className={styles.novoprojeto_form_label}>
				Selecione a categoria:
			</label>
			<select>
				<option selected={true} disabled={true}>Selecione uma opção</option>
			</select>
			<SubmitButton text='Criar Projeto' />
		</form>
  )
}