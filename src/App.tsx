import React from 'react';
import styles from'./App.module.css';
import AboutMe from './Components/AboutMe/aboutme';
import Contacts from './Components/Contacts/Contacts';
import Homevideo from './Components/HomeVideo/homeVideo';
import Main from './Components/Main/Main';
import Prices from './Components/Prices/Prices';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Slogan from './Components/Slogan/Slogan';
import { BrowserRouter } from 'react-router-dom';
import { initialState } from './store';

const App = () => {
  return (
    <div className={styles.App}>
      <Header navElements={initialState.navElements}/>
      <Main />
      <AboutMe />
      <Homevideo projects={initialState.projects}/>
      <Slogan />
      <Prices />
      <Contacts />
      <Footer />
    </div>
  );
}

const MainApp = () => {
  return (
    <BrowserRouter>
    <App />
    </BrowserRouter>
  )
}

export default MainApp;
