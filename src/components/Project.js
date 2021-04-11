import axios from 'axios';
import React, {useEffect, } from 'react'

const Project = props =>{
    const url = process.env.REACT_APP_API_URL
    const projects = []

    useEffect(() => {
        console.log("url", url)
        axios
            .get(`${url}/project`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    })

    return(
        <div>
            Project
        </div>
    )
}

export default Project;