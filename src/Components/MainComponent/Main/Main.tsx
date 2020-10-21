import React from 'react';
import { Fade } from 'react-awesome-reveal';
import styles from './Main.module.css'

interface iProps {
  introComponent: {
    h1Text: string,
    h2Text: string,
    introImage: string
  }
}

const Main: React.FC<iProps> = ({introComponent}) => {
  const {h1Text, h2Text, introImage} = introComponent;
  return <Fade>
    <div id = {'home'} className={styles.mainBlock} style={{backgroundImage: `url(${introImage})`}}>
      <div className={styles.mainDescr}>
        <h2>{h2Text}</h2>
        <h1>{h1Text}</h1>
      </div>
    </div>
  </Fade>;
}

export default Main;
