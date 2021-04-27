import { FETCH_TASKS, NEW_TASK } from '../actions/types'

export default function taskReducer(state = [], action){
    switch(action.type){
        case FETCH_TASKS:
            // console.log("TASKS REDUCER Action: ", action)
            // console.log("TASKS REDUCER STATE: ", state)
            return{
                ...state,
                tasks: action.payload
            }
        case NEW_TASK:
            // console.log('NEW_TASK: ', action)
            // console.log('NEW_TASK STATE: ', state)
            return{
                ...state,
                tasks: action.payload
            }
        default:
            return state;
    }
}