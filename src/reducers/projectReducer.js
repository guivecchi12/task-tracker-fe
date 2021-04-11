import { FETCH_PROJECTS, NEW_PROJECT } from '../actions/types'

const initialState = {
    projects: [],
    project: {}
}


export default function initial( state = initialState, action){
    switch(action.type){
        case FETCH_PROJECTS:
            return{
                ...state,
                item: action.payload
            };
        default:
            return state;
    }
}