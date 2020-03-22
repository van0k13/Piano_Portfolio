import { combineReducers, createStore } from "redux";
import projectsReducer from "./HomeVideoReducer";



const reducerPack = combineReducers({
    projects: projectsReducer
});

const store = createStore(reducerPack);


export default store