import proj1 from './assets/img/girlWithLeaf.jpg'
import proj2 from './assets/img/hands.jpg'
import proj3 from './assets/img/Koti.jpg'
import proj4 from './assets/img/noti.jpg'
import proj5 from './assets/img/piano.png'
import proj6 from './assets/img/piano1.jpg'
import proj7 from './assets/img/piano2.jpg'
import introImage from './assets/img/piano3.jpg'
import aboutMeImage from './assets/img/Koti.jpg'
import sloganImage from './assets/img/noti.jpg'
import contactImage from './assets/img/hands.jpg'



export const initialState = {
    homeVideoComponent: 
    {
        projects: [
            {id: 1, name: 'Project1', img: proj1, type: 'Video'},
            {id: 2, name: 'Project2', img: proj2, type: 'Video'},
            {id: 3, name: 'Project3', img: proj3, type: 'Video'},
            {id: 4, name: 'Project4', img: proj4, type: 'Video'},
            {id: 5, name: 'Project5', img: proj5, type: 'Video'},
            {id: 6, name: 'Project6', img: proj6, type: 'Photo'},
            {id: 7, name: 'Project7', img: proj7, type: 'Photo'}
        ],
        headerTextH1Value: 'My',
        headerTextSpanValue: 'Performance',
        buttonName: ['All', 'Video', 'Photo']
    },
    headerComponent: 
    {
        navElements:[
        {'id': 1, name: 'home'},
        {'id': 2, name: 'about'},
        {'id': 3, name: 'homeVideo'},
        {'id': 4, name: 'prices'},
        {'id': 5, name: 'contacts'},
        {'id': 6, name: 'find me on'}],
        logoText: 'Lavrenyuk'
    },
    aboutMeComponent: 
    {
        aboutMeText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        aboutMeImage,
        headerTextH1Value: 'About',
        headerTextSpanValue: 'Me',
        buttonName: 'Contact Me'
    },
    introComponent:
    {
        h2Text: `Hi, I'm Olga`,
        h1Text: `Professional pianist`,
        introImage
    },
    sloganComponent: 
    {
        sloganText: `I am happy to be able to gift beautiful work within
            a small budget. My purpose is to please clients.`,
        sloganImage
    },
    pricesComponent: 
    {
        headerTextH1Value: 'Lessons',
        headerTextSpanValue: 'Price',
        localText: 'Prices for local lessons',
        remoteText: 'Prices for remote lessons',
        prices: 
        [
                {lessonText: 'One Lesson', localLessons: 20, remoteLessons: 30},
                {lessonText: 'Five Lessons', localLessons: 85, remoteLessons: 115},
                {lessonText: 'Ten Lessons', localLessons: 160, remoteLessons: 250}
        
        ]
    },
    contactComopnent:
    {
        headerTextH1Value: 'Contact',
        headerTextSpanValue: 'Me',
        contactImage
    }
}