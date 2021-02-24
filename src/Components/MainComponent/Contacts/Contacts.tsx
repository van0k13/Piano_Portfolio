import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from "axios";
import Fade from 'react-awesome-reveal';
import styles from './Contacts.module.scss';
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { Button } from '../../SupportiveComponents/ButtonComponent/Button';
import ModalContainerNotify from '../../SupportiveComponents/ModalComponent/modalContainerNotify';
import { ContactComopnent } from '../../../types';


interface iProps {
  contactComopnent: ContactComopnent
};

const Contacts: React.FC<iProps> = ({ contactComopnent }) => {

  const { contactImage, headerTextH1Value, headerTextSpanValue, submitForm, sendButton  } = contactComopnent;

  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [modalWindowToggled, setModalWindowTogled] = useState(false);

  const onSubmitHandler = () => {
    if (name.trim() && email.trim() && text.trim()) {
      setModalWindowTogled(true)

      return async () => {
        const res = await axios.post('https://smtp-for-portfolio.herokuapp.com/sendMessage',
          { name, email, text })
        res.data === 'Success' ? alert('success') : alert('not success')
      }
    };
  };

  return (
    <Fade >
      <div id='contacts' className={styles.contacts} style={{ backgroundImage: `url(${contactImage})` }}>
        <div className={styles.container}>
          <HeaderComponent h1Value={headerTextH1Value} spanValue={headerTextSpanValue} transBackground />
          <form className={styles.form}>
            <input
              className={styles.formInput}
              value={name} onChange={(v) => setName(v.target.value)}
              type='input' placeholder={t(submitForm.name)} />
            <input
              className={styles.formInput}
              value={email} onChange={(v) => setEmail(v.target.value)}
              type='email' placeholder={t(submitForm.email)} />
            <textarea
              className={styles.formInput}
              value={text} onChange={(v) => setText(v.target.value)}
              rows={8} placeholder={t(submitForm.text)} />
          </form>
          <div className={styles.contactButton}>
            <Button buttonName={t(sendButton)} buttonPromiseOnClick={onSubmitHandler} />
          </div>
        </div>
        <ModalContainerNotify
          isOpenModalNotify={modalWindowToggled}
          setIsOpenModalNotify={setModalWindowTogled}
          titleName={'Data sending'}
          answerFromModal={() => setModalWindowTogled(false)}
          errorMessage={'the data was sent successfully'}
        />
      </div>
    </Fade>
  );
};

export default Contacts;
