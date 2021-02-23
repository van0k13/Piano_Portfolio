import proj7 from './assets/img/piano2.jpg'
import proj8 from './assets/img/IMG_1238.jpg'
import proj9 from './assets/img/IMG_1452.jpg'
import proj10 from './assets/img/IMG_3215.jpg'
import proj11 from './assets/img/IMG_4420.jpg'
import proj12 from './assets/img/IMG_5452.jpg'
import proj13 from './assets/img/IMG_5476.jpg'
import proj14 from './assets/img/IMG_7889.jpg'
import proj15 from './assets/img/IMG_8087.jpg'
import proj16 from './assets/img/IMG_9253.jpg'
import introImage from './assets/img/piano3.jpg'
import aboutMeImage from './assets/img/Koti.jpg'
import sloganImage from './assets/img/noti.jpg'
import contactImage from './assets/img/hands.jpg'
import { IInitialState } from './types'



export const initialState: IInitialState = {
    homeVideoComponent: 
    {
        projects: [
            {id: 7, name: 'Project7', img: proj7, type: 'Photo'},
            {id: 8, name: 'Project8', img: proj8, type: 'Photo'},
            {id: 9, name: 'Project9', img: proj9, type: 'Photo'},
            {id: 10, name: 'Project10', img: proj10, type: 'Photo'},
            {id: 11, name: 'Project11', img: proj11, type: 'Photo'},
            {id: 12, name: 'Project12', img: proj12, type: 'Photo'},
            {id: 13, name: 'Project13', img: proj13, type: 'Photo'},
            {id: 14, name: 'Project14', img: proj14, type: 'Photo'},
            {id: 15, name: 'Project15', img: proj15, type: 'Photo'},
            {id: 16, name: 'Project16', img: proj16, type: 'Photo'}
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