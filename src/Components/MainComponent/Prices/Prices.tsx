import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Fade from 'react-awesome-reveal'
import styles from './Prices.module.scss'
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { Button } from '../../SupportiveComponents/ButtonComponent/Button';
import { PricesComponent } from '../../../types';

interface iProps {
  pricesComponent: PricesComponent
}

const Prices: React.FC<iProps> = ({pricesComponent}) => {

  const [toggleValue, setToggleValue] = useState(false)

  const {headerTextH1Value, headerTextSpanValue, prices, localText, remoteText, buttons: {local, remote}} = pricesComponent;

  const { t } = useTranslation();

  const remoteLessonsElements = prices.map((l,i) => {

    return ( 
      <div className={styles.spanContainer} key={i}> 
        <span className={styles.spanText}>{t(l.lessonText)}</span>
        {toggleValue ? <span>{l.localLessons} $</span> : <span>{l.remoteLessons} $</span>} 
      </div>
    )
  });

  return <Fade>
      <div id='prices' className={styles.pricesBlock}>
        <HeaderComponent h1Value={headerTextH1Value} spanValue={headerTextSpanValue} />
        <div className={styles.bodyContainer}>
          <h2>{toggleValue ? t(localText) : t(remoteText)}</h2>
          <hr />
          <Button buttonName={toggleValue? t(remote) : t(local)} 
            buttonOnClickBoolean={() => setToggleValue((prevValue) => !prevValue )} />
         {remoteLessonsElements}
        </div>
      </div>
      </Fade>;
}

export default Prices;
