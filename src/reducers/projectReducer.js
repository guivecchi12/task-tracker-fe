import { FETCH_PROJECTS, NEW_PROJECT } from '../actions/types'

const initialState = []
export default function projectReducer(state = initialState, action){
    switch(action.type){
        case FETCH_PROJECTS:
            console.log("PROJECT REDUCER Action: ", action)
            console.log("PROJECT REDUCER STATE: ", state)
            return{
                ...state,
                projects: [...state.projects, action.payload]
            };
        case NEW_PROJECT:
            return{
                ...state,
                projects: action.payload
            }
        default:
            return state;
    }
}