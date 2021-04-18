import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../actions/projectActions';
import { fetchTasks } from '../actions/taskActions';

class Project extends Component {
    componentDidMount(){
        this.props.fetchProjects()
        this.props.fetchTasks()
    }
    addTasksToProject(projects, tasks){
        var projWithTasks = []
        var addTasks = []
        var i, j;
        if(projects && tasks){
            for(i=0; i<projects.length; i++){
                for(j=0; j<tasks.length; j++){
                    if(tasks[j].proj_id === projects[i].id){
                        addTasks.push(tasks[j])
                    }
                }
                addTasks.unshift(projects[i])
                projWithTasks.push(addTasks)
                addTasks = []
            }
        }
        return projWithTasks;
    }
    
    render(){
        // console.log("Projects: ", this.props.projects)
        // console.log("Tasks: ", this.props.tasks)
        const projects = this.addTasksToProject(this.props.projects, this.props.tasks)
        // console.log("Projects in render: ", projects)
        return(
            <div>
                {projects[0].map(proj => {
                    return(
                        <div>
                            {proj.description ? 
                                <div>
                                    <h3>
                                        Task: {proj.name}
                                    </h3>
                                    <h4>
                                        Description: {proj.description}
                                    </h4>
                                </div>
                            :
                                <div>
                                    <h1>
                                        Project: {proj.name}
                                    </h1>
                                </div>    
                        }
                        </div>
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = state => {
    // console.log("state", state)
    return {
        projects: state.projects.projects,
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, { 
    fetchProjects,
    fetchTasks
})(Project);