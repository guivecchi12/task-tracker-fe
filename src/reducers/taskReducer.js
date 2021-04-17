import { FETCH_TASKS } from '../actions/types'

export default function taskReducer(state = [], action){
    switch(action.type){
        case FETCH_TASKS:
            console.log("TASKS REDUCER Action: ", action)
            console.log("TASKS REDUCER STATE: ", state)
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        default:
            return state;
    }
}