import React from 'react';
import Fade from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';
import { Link } from "react-scroll";
import styles from './AboutMe.module.scss'
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { AboutMeComponent } from '../../../types';

interface iProps {
  aboutMeComponent: AboutMeComponent
}

const AboutMe: React.FC<iProps> = ({ aboutMeComponent }) => {

  const { aboutMeText, aboutMeImage, headerTextH1Value, headerTextSpanValue,
    buttonName } = aboutMeComponent;

  const { t } = useTranslation();

  return (
    <Fade >
      <div id='about' className={styles.aboutMeBlock} >
        <div className={styles.photoContainer} style={{ backgroundImage: `url(${aboutMeImage})` }} />
        <div className={styles.container}>
          <HeaderComponent h1Value={t(headerTextH1Value)} spanValue={t(headerTextSpanValue)} />
          <div className={styles.text}>
            <p> {t(aboutMeText)} </p> <br />
          </div>
          <div className={styles.linkContainer}>
            <Link
              spy={true}
              smooth={true}
              offset={0}
              duration={700}
              to='contacts'
              className={styles.link}
            >
              {t(buttonName)}
            </Link>
          </div>
        </div>
      </div>
    </Fade >
  );
}

export default AboutMe;
