import React from 'react';
import { Element } from '../../../types';
import styles from './Header.module.css'
import NavMenu from './NavMenu/NavMenu';

interface iProps {
  headerComponent: {
    navElements: Element[],
    logoText: string
  }
}

const Header: React.FC<iProps> = ({headerComponent}) => {
  const {navElements, logoText} = headerComponent
  return (
    <div className={styles.headerBlock}>
      <div className={styles.languages}><span>{logoText}</span></div>
      <NavMenu elements={navElements}/>
    </div>

  );
}

export default Header;
