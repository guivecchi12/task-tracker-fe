import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { fetchProject } from '../actions/projectActions';
const Project = props => {
    const [projects, setProjects] = useState([])
    
    useEffect(()=>{
        props.fetchProject()
        setProjects(props.project)
    },[])

    // console.log("Projects", projects)
    return(
        <div>
            {projects.length > 0 ?
                projects.map(proj => (
                    <div key = {proj.id}>
                        <h5>
                            Project ID: {proj.id}
                        </h5>
                        <h3>
                            Project name: {proj.name}
                        </h3>
                        <h5>
                            User ID: {proj.user_id}
                        </h5>
                    </div>
                ))
                : "No Projects"
            }
        </div>
    )
}

const mapStateToProps = state => {
    return{
        project: state.project.projects
    }
}

export default connect(mapStateToProps, { fetchProject })(
    Project
);