import React from 'react';
import styles from './Home.module.css';
import savings from '../../img/savings.svg';
import LinkButton from '../buttons/LinkButton';

export default function Home() {
    return (
        <main className={styles.main_container}>
            <h1 className={styles.main_titulo}>
                Bem-vindo ao <span className={styles.main_titulo_span}>Costs</span>
            </h1>
            <p className={styles.main_paragr}>
                Comece a gerenciar os seus projetos agora mesmo!
            </p>
            <LinkButton to='/novoprojeto' value="Criar Projeto" />
            <img className={styles.main_savings_img} src={savings} />
        </main>
    )
}