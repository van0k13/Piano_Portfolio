import React from 'react';
import Fade from 'react-awesome-reveal'
import styles from './Footer.module.scss'
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header'


const Footer = () => {
  return (
    <Fade >
    <div id = {'find me on'} className={styles.footer}>
      <div className={styles.container}>
        <HeaderComponent h1Value={'Olga'} spanValue={'Lavrenyuk'}/>
        <div className={styles.socials}>
          <a href='https://www.facebook.com/olya.lavreniyk'>
            <div className={styles.img1}>
            </div>
          </a>
          <a href='https://www.instagram.com/olga_lavch/'>
            <div className={styles.img2}>
            </div>
          </a>
          <a href='https://www.instagram.com/olga_lavch/'>
            <div className={styles.img3}>
            </div>
          </a>
          <a href='https://t.me/olga_lavch'>
            <div className={styles.img4}>
            </div>
          </a>
        </div>
        <div className={styles.bottom}>
          © 2020 Olga Inc. All Rights Reserved
        </div>
      </div>
    </div>
    </Fade>
  );
}

export default Footer;
