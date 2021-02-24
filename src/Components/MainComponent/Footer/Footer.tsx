import React from 'react';
import { useTranslation } from 'react-i18next';
import Fade from 'react-awesome-reveal';
import styles from './Footer.module.scss';
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { FooterComponent } from '../../../types';


interface iProps {
  footerComponent: FooterComponent
}

const Footer: React.FC<iProps> = ({footerComponent}) => {

  const {footerTextH1Value, footerTextSpanValue, bgImage, links} = footerComponent;

  const { t } = useTranslation();

  return (
    <Fade >
      <div id='find me on' className={styles.footer}>
        <div className={styles.container}>
          <HeaderComponent h1Value={t(footerTextH1Value)} spanValue={t(footerTextSpanValue)} />
          <div className={styles.socials}>
            <a href={links.facebook}>
              <div className={styles.img1} style={{
                background: `url(${bgImage.facebook})`
              }}>
              </div>
            </a>
            <a href={links.insta}>
              <div className={styles.img2} style={{
                background: `url(${bgImage.insta})`
              }}>
              </div>
            </a>
            <a href={links.youtube}>
              <div className={styles.img3} style={{
                background: `url(${bgImage.youtube})`
              }}>
              </div>
            </a>
            <a href={links.telega}>
              <div className={styles.img4} style={{
                background: `url(${bgImage.telega})`
              }}>
              </div>
            </a>
          </div>
          <div className={styles.bottom}>
            © 2021 Olga Inc. All Rights Reserved
        </div>
        </div>
      </div>
    </Fade>
  );
}

export default Footer;
