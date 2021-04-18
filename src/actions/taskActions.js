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