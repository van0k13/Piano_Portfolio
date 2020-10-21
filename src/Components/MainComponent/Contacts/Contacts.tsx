import React from 'react';
import Fade from 'react-awesome-reveal'
import styles from './Contacts.module.css'
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { Button } from '../../SupportiveComponents/ButtonComponent/Button';

const Contacts = () => {
  return (
    <Fade >
<div id={'contacts'} className={styles.contacts}>
      <div className={styles.container}>
        <HeaderComponent h1Value={'Contact'} spanValue={'Me'} transBackground/>
        <form className={styles.form}>
          <input className={styles.formInput} type='input' placeholder='Name' />
          <input className={styles.formInput} type='input' placeholder='E-mail' />
          <textarea className={styles.formInput} rows = {8} placeholder="Your message" />
        </form>
        <div className={styles.contactButton}>
          <Button buttonName={'Submit'} />
        </div>
      </div>
    </div> 
    </Fade> );
}

export default Contacts;
