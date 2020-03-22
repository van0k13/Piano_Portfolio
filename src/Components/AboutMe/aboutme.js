import React from 'react';
import styles from './AboutMe.module.css'

const AboutMe = () => {
  return (
    <div className={styles.aboutMeBlock}>
      <div className={styles.photoContainer}>

      </div>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>
            About<span>Me</span>
          </h1>
        </div>
        <div className={styles.text}>
         <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
       <p>incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis incididunt
        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <br />
        </div>
        <div >
          <a className={styles.contactsButton}>Contact Me</a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
