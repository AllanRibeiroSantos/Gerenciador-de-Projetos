import React from 'react'
import styles from './NovoProjeto.module.css';
import NovoProjetoForm from './NovoProjetoForm';

export default function NovoProjeto() {
  return (
    <main className={styles.main_novoprojeto_container}>
      <h1 className={styles.novoprojeto_titulo}>Criar Projeto</h1>
      <p className={styles.novoprojeto_paragr}>Crie seu projeto para depois adicionar os serviços</p>
      <NovoProjetoForm />
    </main>
  )
}
