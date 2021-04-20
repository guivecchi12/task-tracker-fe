import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Divider } from 'antd';

import { fetchProjects } from '../actions/projectActions';
import { fetchTasks } from '../actions/taskActions';


class Project extends Component {
    constructor(props){
        super(props);
        this.state = {projects:this.props.projects, tasks: this.props.tasks};
        this.props.fetchTasks()
        this.props.fetchProjects()
        this.displayProject()
    }


    displayProject = () => {
        var fullProject = {}
        if(this.state.tasks && this.state.projects){
            this.state.projects.forEach(project=>{
                fullProject[project.id] = {title: project.name, tasks:[]}
                this.state.tasks.forEach(task => {
                    if(task.proj_id === project.id){
                        fullProject[project.id].tasks.push(task)
                    }
                })
            })
        }
        // Object.entries(fullProject).forEach(([key, project]) => {
        //     console.log(project.title)
        //     project.tasks.forEach(task => {
        //         console.log(task)
        //     })

        // })
        return(
            <div className = "projectComponent">
                {this.state.projects ?
                    Object.entries(fullProject).map(([key, project]) => {
                        return(
                            <Row gutter={16} key={key}>
                                <Col className="projectTitle">
                                    <div>{project.title}</div>
                                </Col>
                                {project.tasks.map(task => {
                                    return(
                                        <div>
                                            <Col className="taskName">
                                                <div>{task.name}</div>
                                            </Col>
                                            <Col className="taskName">
                                                <div>{task.description}</div>
                                            </Col>
                                        </div>
                                    )
                                })}
                            </Row>
                        )
                    })
                    : <div> No project found</div>}
            </div>
        )
    }


    
    render(){
        return(
            <div>
                {this.displayProject()}
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