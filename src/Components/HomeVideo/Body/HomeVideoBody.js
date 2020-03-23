import React from 'react';
import styles from './HomeVideoBody.module.css'

const HomeVideoBody = (props) => {
  const projectsElements = props.projects.map(p =>
    <div key={p.id} className={styles.project}>
      <img src={p.img} />
      
    </div>
  )
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => props.setFilterValue('All')}>All</button>
        <button className={styles.button} onClick={() => props.setFilterValue('Photo')}>Photos</button>
        <button className={styles.button} onClick={() => props.setFilterValue('Video')}>Videos</button>
      </div>
      <div className={styles.projectsContainer}>
        {projectsElements}
      </div>
    </div>

  );
}

export default HomeVideoBody;
