import React from 'react';
import styles from './NavMenu.module.css'

const NavMenu = () => {
  return (
      <div className={styles.headers}>
        <div><a href='#'>Home(main)</a></div>
        <div><a href='#'>About</a></div>
        <div><a href='#'>HomeVideo</a></div>
        <div><a href='#'>Prices</a></div>
        <div><a href='#'>Contacts</a></div>
      </div>

  );
}

export default NavMenu;