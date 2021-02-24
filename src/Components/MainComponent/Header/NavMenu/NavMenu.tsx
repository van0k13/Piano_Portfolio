
import { Drawer, Typography, List, Divider, ListItem, ButtonGroup, Button } from '@material-ui/core';
import { Link } from "react-scroll";
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Element } from '../../../../types';
import styles from './NavMenu.module.scss'

interface iProps {
  elements: Element[],
  open: boolean,
  onClose: () => void,
  logoText: string
}

const NavMenu: React.FC<iProps> = ({ elements, open, onClose, logoText }) => {

  const { t, i18n } = useTranslation();

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
            to={el.id}
            onClick={onClose}
            className={styles.link}
          >
            {t(el.name)}
          </Link>
        </ListItem>
      ))}
    </List>
  };

  const handleLangClick = (lang: string) => {
    i18n.changeLanguage(lang);
  }

  return (
    <div className={styles.headers}>
      <Drawer open={open} onClose={onClose}>
        <Typography variant="h2" gutterBottom style={{ marginRight: '50px' }}>
          {logoText}
        </Typography>
        <Divider />
        {list()}
        <ButtonGroup variant="text" color="primary" aria-label="text primary button group" style={{position: "absolute", bottom: "0", margin: "0 0 25px 10px"}}>
          <Button onClick={() => handleLangClick('en')}>English</Button>
          <Button onClick={() => handleLangClick('ua')}>Ukrainian</Button>
          <Button onClick={() => handleLangClick('rus')}>Parussian</Button>
        </ButtonGroup>
      </Drawer>
    </div>
  );
};

export default NavMenu;