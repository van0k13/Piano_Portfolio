import React from 'react';
import styles from'./App.module.css';
import AboutMe from './Components/AboutMe/aboutme';
import Contacts from './Components/Contacts/Contacts';
import Homevideo from './Components/HomeVideo/homeVideo';
import Main from './Components/Main/Main';
import Prices from './Components/Prices/Prices';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

const App = () => {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <AboutMe />
      <Homevideo />
      <Prices />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
