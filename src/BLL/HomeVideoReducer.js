import proj1 from '../assets/img/proj1.jpg'
import proj2 from '../assets/img/proj2.jpg'
import proj3 from '../assets/img/proj3.jpg'
import proj4 from '../assets/img/proj4.jpg'
import proj5 from '../assets/img/proj5.jpg'
import proj6 from '../assets/img/proj6.jfif'
import proj7 from '../assets/img/proj7.jpg'
import proj8 from '../assets/img/proj8.jpg'
import proj9 from '../assets/img/proj.jpg'



const initialState = [
    {id: 1, name: 'Project1', img: proj1, type: 'Video'},
    {id: 2, name: 'Project2', img: proj2, type: 'Video'},
    {id: 3, name: 'Project3', img: proj3, type: 'Video'},
    {id: 4, name: 'Project4', img: proj4, type: 'Video'},
    {id: 5, name: 'Project5', img: proj5, type: 'Video'},
    {id: 6, name: 'Project6', img: proj6, type: 'Photo'},
    {id: 7, name: 'Project7', img: proj7, type: 'Photo'},
    {id: 8, name: 'Project8', img: proj8, type: 'Photo'},
    {id: 9, name: 'Project9', img: proj9, type: 'Photo'}
]


const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
    
    
        default:
            return state;
    }
}


export default projectsReducer;