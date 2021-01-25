import React, { useState } from 'react';
import { isMobile, isMobileOnly } from 'react-device-detect';
import { Element } from '../../../types';
import styles from './Header.module.scss'
import NavMenu from './NavMenu/NavMenu';

interface iProps {
  headerComponent: {
    navElements: Element[],
    logoText: string
  }
}

const Header: React.FC<iProps> = ({ headerComponent }) => {
  const { navElements, logoText } = headerComponent
  const [openedBurger, setOpenedBurger] = useState(false);

  const burgerStateClassName = openedBurger ? "burgerMenuOpened" : "burgerMenuClosed"
  return (
    <>
      {
        !isMobile ?
          <div className={styles.headerBlock}>
            <div className={styles.languages}><span>{logoText}</span></div>
            <NavMenu elements={navElements} />
          </div> :
          <div className={styles.mobileHeaderBlock}>
            <div className={styles[burgerStateClassName]} onClick={() => setOpenedBurger(!openedBurger)}>
              {openedBurger ? 'opened' : 'closed'}
            </div>
          </div>
      }
    </>
  );
}

export default Header;
