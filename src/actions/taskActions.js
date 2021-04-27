import {FETCH_TASKS, NEW_TASK} from './types';
import axios from 'axios';

export const fetchTasks = () => dispatch => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/task`)
        .then(res => {
            // console.log("TASK PAYLOAD: ", res.data)
            dispatch({
                type: FETCH_TASKS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const addTask = (task) => dispatch => {
    axios
        .post(`${process.env.REACT_APP_API_URL}/task`, task)
        .then(res => {
            // console.log("addTask Action: ", res)
            dispatch({
                type: NEW_TASK,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}