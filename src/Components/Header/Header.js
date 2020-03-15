import React from 'react';
import styles from './Header.module.css'
import NavMenu from './NavMenu/NavMenu';

const Header = () => {
  return (
    <div className={styles.headerBlock}>
      <div className={styles.languages}><span>Lavrenyuk</span></div>
      <NavMenu />
    </div>

  );
}

export default Header;
