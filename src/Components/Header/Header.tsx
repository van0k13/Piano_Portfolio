import React from 'react';
import { Element } from '../../types';
import styles from './Header.module.css'
import NavMenu from './NavMenu/NavMenu';

type iProps = {
  navElements: Element[]
}

const Header: React.FC<iProps> = ({navElements}) => {
  return (
    <div className={styles.headerBlock}>
      <div className={styles.languages}><span>Lavrenyuk</span></div>
      <NavMenu elements={navElements}/>
    </div>

  );
}

export default Header;
