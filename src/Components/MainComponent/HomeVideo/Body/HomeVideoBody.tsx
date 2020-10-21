import React, { Dispatch, SetStateAction } from 'react';
import { Project } from '../../../../types';
import { ButtonWithHookSupp } from '../../../SupportiveComponents/ButtonComponent/Button';
import styles from './HomeVideoBody.module.css'

interface iProps {
  projects: Project[],
  setFilterValue: Dispatch<SetStateAction<string>>,
  buttonNames: string[]
}

const HomeVideoBody: React.FC<iProps> = ({setFilterValue, projects, buttonNames}) => {
  const projectsElements = projects.map((p) => 
    <div key={p.id} className={styles.project}>
      <img src={p.img} alt='ptoject'/>
      
    </div>
  )
  const buttonElements = buttonNames.map(b => <ButtonWithHookSupp buttonName={b}
   buttonOnClick={setFilterValue} buttonValue={b} noContainer />)
  return (
    <div className={styles.bodyContainer}>
      <div className={styles.buttonsContainer}>
        {buttonElements}
      </div>
      <div className={styles.projectsContainer}>
        {projectsElements}
      </div>
    </div>

  );
}

export default HomeVideoBody;
