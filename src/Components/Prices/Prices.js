import React from 'react';
import styles from './Prices.module.css'

const Prices = () => {
  return (
      <div className={styles.pricesBlock}>
        <div className={styles.headerContainer}><h1>Pr<span>ices</span></h1></div>
        <div className={styles.bodyContainer}>
          <div className={styles.remoteLocalContainer}>Remote leçons
            <div className={styles.spanContainer}> 
              <span>1 leçon</span>
              <span>20$</span>
            </div>
            <div className={styles.spanContainer}> 
              <span>5 leçons</span>
              <span>85$</span>
            </div>
            <div className={styles.spanContainer}> 
              <span>10 leçons</span>
              <span>160$</span>
            </div>
          </div>

          <div className={styles.remoteLocalContainer}>Local leçons
          <div className={styles.spanContainer}> 
              <span>1 leçon</span>
              <span>30$</span>
            </div>
            <div className={styles.spanContainer}> 
              <span>5 leçons</span>
              <span>115$</span>
            </div>
            <div className={styles.spanContainer}> 
              <span>10 leçons</span>
              <span>250$</span>
            </div></div>
        </div>
      </div>
  );
}

export default Prices;
