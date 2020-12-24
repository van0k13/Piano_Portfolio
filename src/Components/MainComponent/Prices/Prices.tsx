import React, { useState } from 'react';
import Fade from 'react-awesome-reveal'
import styles from './Prices.module.scss'
import { HeaderComponent } from '../../SupportiveComponents/HeaderComponent/Header';
import { Button } from '../../SupportiveComponents/ButtonComponent/Button';

interface iProps {
  pricesComponent: 
    {
        headerTextH1Value: string,
        headerTextSpanValue: string,
        localText: string,
        remoteText: string,
        prices: 
        {
          lessonText: string, localLessons: number, remoteLessons: number
        }[]
    }
}

const Prices: React.FC<iProps> = ({pricesComponent}) => {
  const [toggleValue, setToggleValue] = useState(false)
  const {headerTextH1Value, headerTextSpanValue, prices, localText, remoteText} = pricesComponent;
  const remoteLessonsElements = prices.map(l => {
    return ( 
      <div className={styles.spanContainer}> 
        <span className={styles.spanText}>{l.lessonText}</span>
        {toggleValue ? <span>{l.localLessons} $</span> : <span>{l.remoteLessons} $</span>} 
      </div>
    )
  })
  return <Fade>
      <div id={'prices'} className={styles.pricesBlock}>
        <HeaderComponent h1Value={headerTextH1Value} spanValue={headerTextSpanValue}/>
        <div className={styles.bodyContainer}>
          <h2>{toggleValue ? localText : remoteText}</h2>
          <hr />
          <Button buttonName={toggleValue? 'Check remote' : 'Check local'} 
            buttonOnClickBoolean={() => setToggleValue((prevValue) => !prevValue )}/>
         {remoteLessonsElements}
        </div>
      </div>
      </Fade>;
}

export default Prices;
