import React from 'react';
import Fade from 'react-awesome-reveal'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <Fade >
    <div id = {'find me on'} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.headerContainer}>
          <h2 className={styles.top}>Olga <span>Lavrenyuk</span></h2>
        </div>
        <div className={styles.socials}>
          <a href='https://www.facebook.com/profile.php?id=100001654446507'>
            <div className={styles.img1}>
            </div>
          </a>
          <a href='https://www.instagram.com/van0k13/?hl=ru'>
            <div className={styles.img2}>
            </div>
          </a>
          <a href='https://www.instagram.com/van0k13/?hl=ru'>
            <div className={styles.img3}>
            </div>
          </a>
          <a href='https://web.telegram.org/@kazak13v#/im'>
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
