import { FETCH_PROJECTS, NEW_PROJECT } from '../actions/types'

const initialState = {
    department: [],
    users: [],
    projects: [],
    tasks: {}
}
export default function projectReducer(state = initialState, action){
    switch(action.type){
        case FETCH_PROJECTS:
            return{
                ...state,
                projects: action.payload.projects
            };
        default:
            return state;
    }
}