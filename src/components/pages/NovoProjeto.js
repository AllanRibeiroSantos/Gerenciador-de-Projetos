import React from 'react'
import SubmitButton from '../buttons/SubmitButton';
import styles from './NovoProjeto.module.css';

export default function NovoProjeto() {
  return (
    <main className={styles.main_novoprojeto_container}>
      <h1 className={styles.novoprojeto_titulo}>Criar Projeto</h1>
      <p className={styles.novoprojeto_paragr}>Crie seu projeto para depois adicionar os serviços</p>
      <form className={styles.novoprojeto_form}>
        <label className={styles.novoprojeto_form_label}>
          Nome do projeto:
        </label>
        <input className={styles.novoprojeto_form_input}
          type='text'
          placeholder='Insira o nome'>
        </input>
        <label className={styles.novoprojeto_form_label}>
          Orçamento do projeto:
        </label>
        <input className={styles.novoprojeto_form_input}
          type='text'
          placeholder='Insira o orçamento total'>
        </input>
        <label className={styles.novoprojeto_form_label}>
          Selecione a categoria:
        </label>
        <select>
          <option selected disabled>Selecione uma opção</option>
        </select>
        <SubmitButton value='Criar Projeto' />
      </form>
    </main>
  )
}