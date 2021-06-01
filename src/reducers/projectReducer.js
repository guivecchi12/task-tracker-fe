import { FETCH_PROJECTS, NEW_PROJECT, EDIT_PROJECT, REMOVE_PROJECT } from '../actions/types'

const initialState = []
export default function projectReducer(state = initialState, action){
    switch(action.type){
        case FETCH_PROJECTS:
            return{
                ...state,
                projects: action.payload
            };

        case NEW_PROJECT:
            return{
                ...state,
                projects: action.payload
            }
        
        case EDIT_PROJECT:
            return{...state}

        case REMOVE_PROJECT:
            const newProjects = state.projects.filter(proj => proj.id !== action.payload.removed.id)
            return{
                ...state,
                projects: newProjects
            }

        default:
            return state;
    }
}