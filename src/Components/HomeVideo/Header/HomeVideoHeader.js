import React from 'react';
import styles from './HomeVideoHeader.module.css'

const HomeVideoHeader = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>
        My<span>Performance</span>
      </h1>
    </div>
  );
}

export default HomeVideoHeader;
