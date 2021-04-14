import {FETCH_PROJECTS, NEW_PROJECT} from './types';
import axios from 'axios';

export const fetchProject = () => dispatch => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/project`)
        .then(res => {
            dispatch({
                type: FETCH_PROJECTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}