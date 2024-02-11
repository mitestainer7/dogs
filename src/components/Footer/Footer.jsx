import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../../assets/dogs-footer.svg?react';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer>
        <Dogs />
        <p>Dogs. Alguns direitos reservados</p>
      </footer>
    </div>
  )
}

export default Footer