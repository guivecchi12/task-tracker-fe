import {FETCH_PROJECTS, NEW_PROJECT} from './types';
import axios from 'axios';

export const fetchProjects = () => dispatch => {
    axios
        .get(`${process.env.REACT_APP_API_URL}/project`)
        .then(res => {
            // console.log("PROJECT PAYLOAD: ", res.data)
            dispatch({
                type: FETCH_PROJECTS,
                payload: res.data
            })
        })
        .catch(err => console.log(err));
}

export const addProject = (project) => dispatch => {
    axios
        .post(`${process.env.REACT_APP_API_URL}/project`, project)
        .then(res => {
            dispatch({
                type: NEW_PROJECT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}