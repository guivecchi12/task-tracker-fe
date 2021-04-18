import {FETCH_PROJECTS, NEW_PROJECT} from './types';
import axios from 'axios';

export const fetchProjects = () => dispatch => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/project`)
        .then(res => {
            // console.log("PROJECT PAYLOAD: ", res.data)
            dispatch({
                type: FETCH_PROJECTS,
                payload: res.data.projects
            })
        })
        .catch(err => console.log(err));
}