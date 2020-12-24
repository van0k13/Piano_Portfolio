import React, { useState } from 'react';
import Fade from 'react-awesome-reveal'
import styles from './HomeVideo.module.scss'
import HomeVideoBody from './Body/HomeVideoBody';
import { constantVariables, Project } from '../../../types';
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';

interface iProps {
  homeVideoComponent: {
    projects: Project[],
    headerTextH1Value: string,
    headerTextSpanValue: string,
    buttonName: string[]
  }
}

const Homevideo: React.FC<iProps> = ({homeVideoComponent}) => {
  const [filterValue, setFilterValue] = useState('All');
  const {projects, headerTextH1Value, headerTextSpanValue, buttonName} = homeVideoComponent;
  const {PHOTO_TYPE, VIDEO_TYPE} = constantVariables;
  return <Fade>
    <div id = {'homeVideo'}className={styles.homeVideoBlock}>
      <div className={styles.container}>
        <HeaderComponent h1Value={headerTextH1Value} spanValue={headerTextSpanValue}/>
        <HomeVideoBody buttonNames={buttonName} setFilterValue={setFilterValue}
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
