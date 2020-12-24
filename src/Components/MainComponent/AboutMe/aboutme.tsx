import React from 'react';
import Fade from 'react-awesome-reveal'
import styles from './AboutMe.module.scss'
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { Button } from '../../SupportiveComponents/ButtonComponent/Button';

interface iProps {
  aboutMeComponent: {
  aboutMeText: string,
  aboutMeImage: string,
  headerTextH1Value: string,
  headerTextSpanValue: string,
  buttonName: string
  }
}

const AboutMe: React.FC<iProps> = ({aboutMeComponent}) => {
  const {aboutMeText, aboutMeImage, headerTextH1Value, headerTextSpanValue,
    buttonName} = aboutMeComponent;
  return (
    <Fade >
    <div id={'about'} className={styles.aboutMeBlock}>
      <div className={styles.photoContainer} style={{backgroundImage: `url(${aboutMeImage})`}} />
      <div className={styles.container}>
        <HeaderComponent h1Value={headerTextH1Value} spanValue={headerTextSpanValue}/>
        <div className={styles.text}>
         <p> {aboutMeText} </p> <br />
        </div>
          <Button buttonName={buttonName}/>
      </div>
    </div>
    </Fade>
  );
}

export default AboutMe;
