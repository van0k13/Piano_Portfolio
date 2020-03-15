import React from 'react';
import styles from './HomeVideoBody.module.css'

const HomeVideoBody = () => {
  return (
        <div className={styles.bodyContainer}>
          <div className={styles.buttonsContainer}>
            <button className={styles.button}>All</button>
            <button className={styles.button}>Photos</button>
            <button className={styles.button}>Videos</button>
          </div>
          <div className={styles.projectsContainer}>
            <div className={styles.project}>1-st project</div>
            <div className={styles.project}>2-st project</div>
            <div className={styles.project}>3-st project</div>
            <div className={styles.project}>4-st project</div>
            <div className={styles.project}>5-st project</div>
            <div className={styles.project}>6-st project</div>
          </div>
        </div>
      
  );
}

export default HomeVideoBody;
