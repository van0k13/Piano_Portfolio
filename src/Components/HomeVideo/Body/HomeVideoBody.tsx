import React, { Dispatch, SetStateAction } from 'react';
import { constantVariables, Project } from '../../../types';
import styles from './HomeVideoBody.module.css'

interface iProps {
  projects: Project[];
  setFilterValue: Dispatch<SetStateAction<string>>;
}

const HomeVideoBody: React.FC<iProps> = (props) => {
  const {PHOTO_TYPE, VIDEO_TYPE} = constantVariables;
  const projectsElements = props.projects.map((p) => 
    <div key={p.id} className={styles.project}>
      <img src={p.img} />
      
    </div>
  )
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.buttonsContainer}>
        <button className={styles.button} onClick={() => props.setFilterValue('All')}>All</button>
        <button className={styles.button} onClick={() => props.setFilterValue(PHOTO_TYPE)}>{PHOTO_TYPE}</button>
        <button className={styles.button} onClick={() => props.setFilterValue(VIDEO_TYPE)}>{VIDEO_TYPE}</button>
      </div>
      <div className={styles.projectsContainer}>
        {projectsElements}
      </div>
    </div>

  );
}

export default HomeVideoBody;
