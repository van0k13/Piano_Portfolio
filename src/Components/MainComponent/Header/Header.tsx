import React, { useState } from 'react';
import { HeaderComponent } from '../../../types';
import styles from './Header.module.scss'
import NavMenu from './NavMenu/NavMenu';


interface iProps {
  headerComponent: HeaderComponent
}

const Header: React.FC<iProps> = ({ headerComponent }) => {
  const { navElements, logoText } = headerComponent
  const [openedBurger, setOpenedBurger] = useState(false);

  const CN = 'mobileHeaderBlock';
  const CNN = 'burger-menu';
  const burgerStateClassName = !openedBurger ? `${CN}_${CNN}-opened` : `${CN}_${CNN}-closed`;

  return (
    <div className={styles[CN]}>
      <div className={styles[`${CN}_${CNN}`]} onClick={() => setOpenedBurger(!openedBurger)}>
        <span className={styles[burgerStateClassName]} />
      </div>
      <NavMenu
        elements={navElements}
        open={openedBurger}
        onClose={() => setOpenedBurger(!openedBurger)}
        logoText={logoText}
      />
    </div>
  );
}

export default Header;
