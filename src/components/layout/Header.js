import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import logopng from '../../img/costs_logo.png';

export default function Header() {
  return (
    <header className={styles.header_container}>
      <img src={logopng} alt='Logo do site' />
      <ul className={styles.header_containerList}>
        <li className={styles.header_list}>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.header_list}>
          <Link to="/projetos">Projetos</Link>
        </li>
        <li className={styles.header_list}>
          <Link to="/empresa">Empresa</Link>
        </li>
        <li className={styles.header_list}>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </header>
  )
}
