import {FETCH_PROJECTS, NEW_PROJECT, REMOVE_PROJECT} from './types';
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

export const deleteProject = (id) => dispatch => {
    axios
        .delete(`${process.env.REACT_APP_API_URL}/project/${id}`)
        .then(res => {
            console.log(res)
            dispatch({
                type: REMOVE_PROJECT,
                payload: res.data
            })
        })
        .catch(err => console.log(err))
}