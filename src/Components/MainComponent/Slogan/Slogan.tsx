import React from 'react';
import { useTranslation } from 'react-i18next';
import { SloganComponent } from '../../../types';
import styles from './Slogan.module.scss'

interface iProps {
  sloganComponent: SloganComponent
}

const Slogan: React.FC<iProps> = ({sloganComponent}) => {

  const {sloganText, sloganImage} = sloganComponent;

  const { t } = useTranslation();

  return (
    <div className={styles.container} style={{backgroundImage: `url(${sloganImage})`}}>
      <div className={styles.text}>
        {t(sloganText)}
      </div>
    </div>
  )
}

export default Slogan;
