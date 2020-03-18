import React from 'react';
import styles from './Contacts.module.css'

const Contacts = () => {
  return (
<div id={'contacts'} className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.headerContainer}><h1>Contact<span>Me</span></h1>
        </div>
        <form className={styles.form}>
          <input className={styles.formInput} type='input' placeholder='Name' />
          <input className={styles.formInput} type='input' placeholder='E-mail' />
          <textarea className={styles.formInput} type='textarea' rows='8' placeholder="Your message" />
        </form>
        <div className={styles.contactButton}>
          <button className={styles.worksButton}><span>Submit</span></button>
        </div>
      </div>
    </div>  );
}

export default Contacts;
