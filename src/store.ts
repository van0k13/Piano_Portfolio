import proj7 from './assets/img/piano2.jpg';
import proj8 from './assets/img/IMG_1238.jpg';
import proj9 from './assets/img/IMG_1452.jpg';
import proj10 from './assets/img/IMG_3215.jpg';
import proj11 from './assets/img/IMG_4420.jpg';
import proj12 from './assets/img/Koti.jpg';
import proj13 from './assets/img/IMG_5476.jpg';
import proj14 from './assets/img/IMG_7889.jpg';
import proj15 from './assets/img/IMG_8087.jpg';
import proj16 from './assets/img/IMG_9253.jpg';
import introImage from './assets/img/piano3.jpg';
import aboutMeImage from './assets/img/IMG_5452.jpg';
import sloganImage from './assets/img/noti.jpg';
import contactImage from './assets/img/hands.jpg';
import facebookImg from './assets/imagesFooterBlock/facebook.svg';
import instaImg from './assets/imagesFooterBlock/instagram.svg';
import telegaImg from './assets/imagesFooterBlock/telegram.svg';
import youtubeImg from './assets/imagesFooterBlock/youtube.png';
import { constantVariables, IInitialState } from './types';
import { langTrans } from './assets/langTrans';

const {PHOTO_TYPE, VIDEO_TYPE} = constantVariables

export const initialState: IInitialState = {
    homeVideoComponent: 
    {
        projects: [
            {id: 7, name: langTrans.Project7, img: proj7, type: PHOTO_TYPE},
            {id: 8, name: langTrans.Project8, img: proj8, type: PHOTO_TYPE},
            {id: 9, name: langTrans.Project9, img: proj9, type: PHOTO_TYPE},
            {id: 10, name: langTrans.Project10, img: proj10, type: PHOTO_TYPE},
            {id: 11, name: langTrans.Project11, img: proj11, type: PHOTO_TYPE},
            {id: 12, name: langTrans.Project12, img: proj12, type: PHOTO_TYPE},
            {id: 13, name: langTrans.Project13, img: proj13, type: PHOTO_TYPE},
            {id: 14, name: langTrans.Project14, img: proj14, type: PHOTO_TYPE},
            {id: 15, name: langTrans.Project15, img: proj15, type: PHOTO_TYPE},
            {id: 16, name: langTrans.Project16, img: proj16, type: PHOTO_TYPE}
        ],
        headerTextH1Value: langTrans.myHVC,
        headerTextSpanValue: langTrans.PerformanceHVC,
        buttonName: [langTrans.allButtonHVC, langTrans.photoButtonHVC, langTrans.videoButtonHVC]
    },
    headerComponent: 
    {
        navElements:[
        {id: 'home', name: langTrans.homeEl},
        {id: 'about', name: langTrans.aboutEl},
        {id: 'homeVideo', name: langTrans.homeVideoEl},
        {id: 'prices', name: langTrans.pricesEl},
        {id: 'contacts', name: langTrans.contactsEl},
        {id: 'find me on', name: langTrans.findMeOnEl}],
        logoText: 'Lavrenyuk'
    },
    aboutMeComponent: 
    {
        aboutMeText: langTrans.aboutMeTextAMC,
        aboutMeImage,
        headerTextH1Value: langTrans.aboutAMC,
        headerTextSpanValue: langTrans.meAMC,
        buttonName: langTrans.contactMeButtonAMC
    },
    introComponent:
    {
        h2Text: langTrans.h2TextIC,
        h1Text: langTrans.h1TextIC,
        introImage
    },
    sloganComponent: 
    {
        sloganText: langTrans.sloganTextSC,
        sloganImage
    },
    pricesComponent: 
    {
        headerTextH1Value: langTrans.lessonsPC,
        headerTextSpanValue: langTrans.pricePC,
        localText: langTrans.localPC,
        remoteText: langTrans.remotePC,
        prices: 
        [
                {lessonText: langTrans.oneLessonTextPC, localLessons: 20, remoteLessons: 30},
                {lessonText: langTrans.fiveLessonsTextPC, localLessons: 85, remoteLessons: 115},
                {lessonText: langTrans.tenLessonsTextPC, localLessons: 160, remoteLessons: 250}
        
        ],
        buttons: {
            local: langTrans.localButtonPC,
            remote: langTrans.remoteButtonPC
        }
    },
    contactComopnent:
    {
        headerTextH1Value: langTrans.contactCC,
        headerTextSpanValue: langTrans.meCC,
        submitForm: {
            name: langTrans.nameCC,
            email: langTrans.emailCC,
            text: langTrans.textCC
        },
        contactImage,
        sendButton: langTrans.sendButtonCC
    },
    footerComponent:
    {
        footerTextH1Value: langTrans.firstNameFC,
        footerTextSpanValue: langTrans.lastNameFC,
        bgImage: {
            facebook: facebookImg,
            insta: instaImg,
            telega: telegaImg,
            youtube: youtubeImg
        },
        links: {
            facebook: 'https://www.facebook.com/olya.lavreniyk',
            insta: 'https://www.instagram.com/olga_lavch/',
            telega: 'https://t.me/olga_lavch',
            youtube: 'https://www.instagram.com/olga_lavch/'
        }
    }
}