import React from 'react';
import styles from './Slogan.module.css'

interface iProps {
  sloganComponent: {
  sloganText: string,
  sloganImage: string
  }
}

const Slogan: React.FC<iProps> = ({sloganComponent}) => {
  const {sloganText, sloganImage} = sloganComponent;
  return (
    <div className={styles.container} style={{backgroundImage: `url(${sloganImage})`}}>
      <div className={styles.text}>
        {sloganText}
      </div>
    </div>
  )
}

export default Slogan;
