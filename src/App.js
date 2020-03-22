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
import { connect, Provider } from 'react-redux';
import store from './BLL/Store';

const App = (props) => {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <AboutMe />
      <Homevideo projects={props.projects}/>
      <Slogan />
      <Prices />
      <Contacts />
      <Footer />
    </div>
  );
}

const mstp = (state) => ({
  projects: state.projects
})

const AppContainer = connect(mstp)(App)
const MainApp = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <AppContainer />
    </Provider>
    </BrowserRouter>
  )
}

export default MainApp;
