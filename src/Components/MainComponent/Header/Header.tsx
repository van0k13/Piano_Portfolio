import React, { useState } from 'react';
import { isMobile, isMobileOnly } from 'react-device-detect';
import { Element } from '../../../types';
import Slider from '../../SupportiveComponents/SliderComponent/Slider';
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

  const CN = 'mobileHeaderBlock';
  const CNN = 'burger-menu';  
  const burgerStateClassName = openedBurger ? `${CN}_${CNN}-opened` : `${CN}_${CNN}-closed`;

  return (
    <>
      {
        !isMobile ?
          <div className={styles.headerBlock}>
            <div className={styles.languages}><span>{logoText}</span></div>
            <NavMenu elements={navElements} />
          </div> :
          <div className={styles[CN]}>
            <div className={styles[`${CN}_${CNN}`]} onClick={() => setOpenedBurger(!openedBurger)}>
              <span className={styles[burgerStateClassName]} />
            </div>
            <Slider opened={!openedBurger}>
                <NavMenu elements={navElements} />
            </Slider>
          </div>
      }
    </>
  );
}

export default Header;
