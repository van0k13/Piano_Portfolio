



const initialState = [
    {id: 1, name: 'Project1', type: 'Video'},
    {id: 2, name: 'Project2', type: 'Video'},
    {id: 3, name: 'Project2', type: 'Video'},
    {id: 4, name: 'Project2', type: 'Video'},
    {id: 5, name: 'Project3', type: 'Video'},
    {id: 6, name: 'Project4', type: 'Photo'},
    {id: 7, name: 'Project5', type: 'Photo'},
    {id: 8, name: 'Project5', type: 'Photo'},
    {id: 9, name: 'Project5', type: 'Photo'},
    {id: 10, name: 'Project6', type: 'Photo'}
]


const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
    
    
        default:
            return state;
    }
}


export default projectsReducer;