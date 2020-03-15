import React from 'react';
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={styles.aboutMeBlock}>
      <div className={styles.container}>
      <div className={styles.title}>
        <h1>
          About<span>Me</span>
        </h1>
      </div>
      <div className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis <br />
      </div>
      </div>
    </div>
  );
}

export default AboutMe;
