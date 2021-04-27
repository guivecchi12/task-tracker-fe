import { FETCH_PROJECTS, NEW_PROJECT, REMOVE_PROJECT } from '../actions/types'

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
        case REMOVE_PROJECT:
            const newProjects = this.state.projects.filter(proj => proj.id === action.payload.remove.id)
            console.log("before: ", this.state.projects)
            console.log("after: ", newProjects)
            return{
                ...state,
                projects: newProjects
            }
        default:
            return state;
    }
}