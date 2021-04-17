import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';
import { fetchTasks } from '../actions/taskActions';
const Project = props => {
    const [projects, setProjects] = useState([])
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        props.fetchProjects()
        props.fetchTasks()
        setProjects(props.projects)
        setTasks(props.tasks)
        console.log("PROPS: ", props)
    },[props])

    // console.log("Projects: ", projects)
    // console.log("Tasks: ", props.tasks)

    return(
        <div>
            {/* {projects.length > 0 ? "Found Projects"
                // projects.map(proj => (
                //     <div key = {proj.id}>
                //         <h1>
                //             Project Name: {proj.project}
                //         </h1>
                //         <h3>
                //             Task Name: {proj.taskName}
                //         </h3>
                //         <h5>
                //             Task Description: {proj.taskDescription}
                //         </h5>
                //     </div>
                // ))
                : "No Projects"
            } */}
            HI
        </div>
    )
}

const mapStateToProps = state => {
    console.log("state", state)
    return{
        projects: state.project,
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, { 
    fetchProjects,
    fetchTasks
})(Project);