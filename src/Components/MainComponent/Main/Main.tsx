import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { IntroComponent } from '../../../types';
import styles from './Main.module.scss'

interface iProps {
  introComponent: IntroComponent
}

const Main: React.FC<iProps> = ({introComponent}) => {

  const {h1Text, h2Text, introImage} = introComponent;

  const { t } = useTranslation();

  return <Fade>
    <div id='home' className={styles.mainBlock} style={{backgroundImage: `url(${introImage})`}}>
      <div className={styles.mainDescr}>
        <h2>{t(h2Text)}</h2>
        <h1>{t(h1Text)}</h1>
      </div>
    </div>
  </Fade>;
}

export default Main;
