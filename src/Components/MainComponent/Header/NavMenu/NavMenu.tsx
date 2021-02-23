
import { Drawer, Typography, List, Divider, ListItem, ListItemText } from '@material-ui/core';
import { Link } from "react-scroll";
import React from 'react';
import { Element } from '../../../../types';
import styles from './NavMenu.module.scss'

interface iProps {
  elements: Element[],
  open: boolean,
  onClose: () => void,
  logoText: string
}

const NavMenu: React.FC<iProps> = ({ elements, open, onClose, logoText }) => {

  const list = () => {
    return <List>
      {elements.map((el, index) => (
        <ListItem button key={index}>
          <Link
            spy={true}
            key={index}
            activeClass={styles.active}
            smooth={true}
            offset={0}
            duration={700}
            to={el.name}
            onClick={onClose}
            className={styles.link}
          >
            {el.name}
          </Link>
        </ListItem>
      ))}
    </List>
  };

  return (
    <div className={styles.headers}>
      <Drawer open={open} onClose={onClose}>
        <Typography variant="h2" gutterBottom style={{marginRight: '50px'}}>
          {logoText}
        </Typography>
        <Divider />
        {list()}
      </Drawer>
    </div>
  );
};

export default NavMenu;