import React, { useState } from 'react';
import Fade from 'react-awesome-reveal'
import styles from './HomeVideo.module.css'
import HomeVideoHeader from './Header/HomeVideoHeader';
import HomeVideoBody from './Body/HomeVideoBody';
import { constantVariables, Project } from '../../types';

interface iProps {
  projects: Project[]
}

const Homevideo: React.FC<iProps> = ({projects}) => {
  const [filterValue, setFilterValue] = useState('All')
  const {PHOTO_TYPE, VIDEO_TYPE} = constantVariables;
  return <Fade>
    <div id = {'homeVideo'}className={styles.homeVideoBlock}>
      <div className={styles.container}>
        <HomeVideoHeader />
        <HomeVideoBody setFilterValue={setFilterValue}
        projects={projects.filter(p => {
                        switch (filterValue) {
                            case 'All':
                                return p;
                            case VIDEO_TYPE:
                                return p.type === VIDEO_TYPE;
                            case PHOTO_TYPE:
                                return p.type === PHOTO_TYPE;
                            default:
                                return p;
                        }
                    })}/>
      </div>
    </div>
    </Fade>;
}

export default Homevideo;
