import React from 'react';
import {Link} from "react-scroll";
import { Element } from '../../../types';
import styles from './NavMenu.module.css'

type iProps = {
  elements: Element[]
}

const NavMenu: React.FC<iProps> = ({elements}) => {
  const navMenuElements = elements.map(e =>
    <Link spy={true}
          activeClass={styles.active}
          smooth={true}
          offset={0}
          duration={700} to={e.name} className={styles.link}>{e.name}
    </Link>
)
  return (
      <div className={styles.headers}>
        {navMenuElements}
      </div>

  );
}

export default NavMenu;