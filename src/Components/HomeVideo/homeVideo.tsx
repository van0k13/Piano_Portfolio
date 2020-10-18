import React, { useState } from 'react';
import styles from './HomeVideo.module.css'
import HomeVideoHeader from './Header/HomeVideoHeader';
import HomeVideoBody from './Body/HomeVideoBody';

const Homevideo = ( {projects}: any ) => {
  const [filterValue, setFilterValue] = useState('All')
  console.log(filterValue)
  return (
    <div className={styles.homeVideoBlock}>
      <div className={styles.container}>
        <HomeVideoHeader />
        <HomeVideoBody setFilterValue={setFilterValue}
        projects={projects.filter((p: any) => {
                        switch (filterValue) {
                            case 'All':
                                return p;
                            case 'Video':
                                return p.type === 'Video';
                            case 'Photo':
                                return p.type === 'Photo';
                            default:
                                return p;
                        }
                    })}/>
      </div>
    </div>
  );
}

export default Homevideo;