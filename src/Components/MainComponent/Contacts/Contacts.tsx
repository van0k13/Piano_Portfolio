import React, { useState } from 'react'
import axios from "axios";
import Fade from 'react-awesome-reveal'
import styles from './Contacts.module.css'
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { Button } from '../../SupportiveComponents/ButtonComponent/Button';
import ModalContainerNotify from '../../SupportiveComponents/ModalComponent/modalContainerNotify';


interface iProps {
  contactComopnent: {
    headerTextH1Value: string,
    headerTextSpanValue: string,
    contactImage: string
  }
}

const Contacts: React.FC<iProps> = ({ contactComopnent }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const { contactImage, headerTextH1Value, headerTextSpanValue } = contactComopnent;
  const [modalWindowToggled, setModalWindowTogled] = useState(false)
  const onSubmitHandler = () => {
    if (name.trim() && email.trim() && text.trim()) {
      setModalWindowTogled(true)
      return async () => {
        const res = await axios.post('https://smtp-for-portfolio.herokuapp.com/sendMessage',
          { name, email, text })
        res.data === 'Success' ? alert('success') : alert('not success')
      }
    }
  }
  return (
    <Fade >
      <div id={'contacts'} className={styles.contacts} style={{ backgroundImage: `url(${contactImage})` }}>
        <div className={styles.container}>
          <HeaderComponent h1Value={headerTextH1Value} spanValue={headerTextSpanValue} transBackground />
          <form className={styles.form}>
            <input
              className={styles.formInput}
              value={name} onChange={(v) => setName(v.target.value)}
              type='input' placeholder='Name' />
            <input
              className={styles.formInput}
              value={email} onChange={(v) => setEmail(v.target.value)}
              type='email' placeholder='E-mail' />
            <textarea 
              className={styles.formInput}
              value={text} onChange={(v) => setText(v.target.value)}
              rows={8} placeholder="Your message" />
          </form>
          <div className={styles.contactButton}>
            <Button buttonName={'Submit'} buttonPromiseOnClick={onSubmitHandler} />
          </div>
        </div>
        <ModalContainerNotify 
          isOpenModalNotify={modalWindowToggled}
          setIsOpenModalNotify={setModalWindowTogled}
          titleName={'Data sending'}
          answerFromModal={()=>setModalWindowTogled(false)}
          errorMessage={'the data was sent successfully'}
        />
      </div>
    </Fade>);
}

export default Contacts;
