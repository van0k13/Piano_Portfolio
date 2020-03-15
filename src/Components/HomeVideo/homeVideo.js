import React from 'react';
import styles from './HomeVideo.module.css'
import HomeVideoHeader from './Header/HomeVideoHeader.js';
import HomeVideoBody from './Body/HomeVideoBody.js';

const Homevideo = () => {
  return (
    <div className={styles.homeVideoBlock}>
      <div className={styles.container}>
        <HomeVideoHeader />
        <HomeVideoBody />
      </div>
    </div>
  );
}

export default Homevideo;
