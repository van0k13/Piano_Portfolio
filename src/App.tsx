import React from 'react';
import styles from './App.module.scss';
import AboutMe from './Components/MainComponent/AboutMe/aboutme';
import Contacts from './Components/MainComponent/Contacts/Contacts';
import Homevideo from './Components/MainComponent/HomeVideo/homeVideo';
import Main from './Components/MainComponent/Main/Main';
import Prices from './Components/MainComponent/Prices/Prices';
import Footer from './Components/MainComponent/Footer/Footer';
import Header from './Components/MainComponent/Header/Header';
import Slogan from './Components/MainComponent/Slogan/Slogan';
import { BrowserRouter } from 'react-router-dom';
import { initialState } from './store';
import { IInitialState } from './types';


const App: React.FC = () => {
  const { headerComponent, aboutMeComponent, homeVideoComponent, introComponent,
    sloganComponent, pricesComponent, contactComopnent, footerComponent }: IInitialState = initialState;

  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Header headerComponent={headerComponent} />
        <Main introComponent={introComponent} />
        <AboutMe aboutMeComponent={aboutMeComponent} />
        <Homevideo homeVideoComponent={homeVideoComponent} />
        <Slogan sloganComponent={sloganComponent} />
        <Prices pricesComponent={pricesComponent} />
        <Contacts contactComopnent={contactComopnent} />
        <Footer footerComponent={footerComponent} />
      </div>
    </BrowserRouter>
  );
};

export default App;
