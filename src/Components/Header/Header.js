import React from 'react';
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <div className={styles.headers}>Headers</div>
      <div className={styles.languages}>Languages</div>
    </div>

  );
}

export default Header;
