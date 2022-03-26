import React from 'react';
import styles from './Footer.module.css';
import { BsLinkedin, BsYoutube, BsGithub } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import linkedin from 'https://www.linkedin.com/in/allanribeirosantos/';
// import youtube from 'https://www.youtube.com/channel/UCzQ7Tlul19JBSuAMOl_h6XA';
// import github from 'https://github.com/AllanRibeiroSantos';

export default function Footer() {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_social}>
        <BsLinkedin className={styles.footer_social_svg} />
        <BsYoutube className={styles.footer_social_svg} />
        <BsGithub className={styles.footer_social_svg} />
      </div>
      <p className={styles.footer_paragr}><span className={styles.footer_span}>Costs</span> &copy; 2022</p>
    </footer>
  )
}
