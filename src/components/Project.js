import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';
import { fetchTasks } from '../actions/taskActions';

class Project extends Component {
    componentDidMount(){
        this.props.fetchProjects()
        this.props.fetchTasks()
    }
    render(){
        console.log("Projects: ", this.props.projects)
        console.log("Tasks: ", this.props.tasks)
        
        return(
            <div>
                HI
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("state", state)
    return {
        projects: state.projects.projects,
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, { 
    fetchProjects,
    fetchTasks
})(Project);