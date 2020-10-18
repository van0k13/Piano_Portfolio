import proj1 from './assets/img/girlWithLeaf.jpg'
import proj2 from './assets/img/hands.jpg'
import proj3 from './assets/img/Koti.jpg'
import proj4 from './assets/img/noti.jpg'
import proj5 from './assets/img/piano.png'
import proj6 from './assets/img/piano1.jpg'
import proj7 from './assets/img/piano1.jpg'



export const initialState = {
    'projects': [
        {id: 1, name: 'Project1', img: proj1, type: 'Video'},
        {id: 2, name: 'Project2', img: proj2, type: 'Video'},
        {id: 3, name: 'Project3', img: proj3, type: 'Video'},
        {id: 4, name: 'Project4', img: proj4, type: 'Video'},
        {id: 5, name: 'Project5', img: proj5, type: 'Video'},
        {id: 6, name: 'Project6', img: proj6, type: 'Photo'},
        {id: 7, name: 'Project7', img: proj7, type: 'Photo'}
    ],
    'navElements': [
        {'id': 1, name: 'home'},
        {'id': 2, name: 'about'},
        {'id': 3, name: 'homeVideo'},
        {'id': 4, name: 'prices'},
        {'id': 5, name: 'contacts'},
        {'id': 6, name: 'find me on'},
    ]
}