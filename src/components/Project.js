import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';

import { fetchProjects, addProject, deleteProject } from '../actions/projectActions';
import { fetchTasks, addTask } from '../actions/taskActions';

class Project extends Component {
    constructor(props){
        super(props);
        this.state = {
            projects:this.props.projects,
            tasks: this.props.tasks,
            newProject: {
                name: ''
            },
            newTask: {
                name: '',
                description: '',
                proj_id: 0
            },
            currentProject: {
                id: 0,
                name: ''
            },
            taskForm: false,
            projectForm: false
        };
        this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
        this.handleTaskChange = this.handleTaskChange.bind(this);
        this.handleProjectSubmit = this.handleProjectSubmit.bind(this);
        this.displayProject = this.displayProject.bind(this);
    }

    componentDidMount(){
        this.setState({
            projects:this.props.projects,
            tasks: this.props.tasks
        })
        this.props.fetchTasks()
        this.props.fetchProjects()
    }

    componentDidUpdate(prevProps){
        console.log(this.props, prevProps)
        if(this.props.projects !== prevProps.projects || this.props.tasks !== prevProps.tasks){
            this.setState({
                projects:this.props.projects,
                tasks: this.props.tasks
            })
        }
    }
    
    handleTaskSubmit(event){
        event.preventDefault()
        this.props.addTask(this.state.newTask)
        this.setState({
            newTask: {
                name: '',
                description: '',
                proj_id: 0
            },
            taskForm: false
        })
    }

    handleTaskChange(event){
        this.setState({
            newTask: {
                ...this.state.newTask,
                [event.target.name]: event.target.value,
                proj_id: this.state.currentProject.id
            }
        })
    }

    handleProjectSubmit(event){
        event.preventDefault()
        this.props.addProject(this.state.newProject)
        this.setState({
            newProject: {
                name: ''
            },
            projectForm: false
        })
    }

    displayProject = () => {
        var fullProject = {}
        if(this.state.tasks && this.state.projects){
            this.state.projects.forEach(project=>{
                fullProject[project.id] = {id: project.id, title: project.name, tasks:[]}
                this.state.tasks.forEach(task => {
                    if(task.proj_id === project.id){
                        fullProject[project.id].tasks.push(task)
                    }
                })
            })
        }
        return(
            <div className = "projectComponent">
                {this.state.projects ?
                    Object.entries(fullProject).map(([key, project]) => {
                        return(
                            <Row gutter={16} key={key} className="projectRow">
                                <DeleteOutlined onClick={()=> this.props.deleteProject(project.id)} className="deleteButton"/>
                                <Col className="projectTitle">
                                    <div>{project.title}</div>
                                </Col>
                                {project.tasks.map(task => {
                                    return(
                                        <div className="tasks">
                                            <Col className="taskName">
                                                <div>{task.name}</div>
                                            </Col>
                                            <Col className="taskDescription">
                                                <div>{task.description}</div>
                                            </Col>
                                        </div>
                                    )
                                })}
                                <Button type="primary" className="addButton" onClick={()=>{this.setState({
                                    currentProject:{
                                        id: project.id,
                                        name: project.title
                                        },
                                        taskForm: true
                                        })}}>Add Task</Button>
                            </Row>
                        )
                    })
                    : <div> No project found</div>}
            </div>
        )
    }
    
    render(){
        return(
            <div className="project">
                <Button type="primary" className="addButton" onClick={()=> this.setState({projectForm:true})}>
                    Add New Project
                </Button>
                {this.state.projectForm ?
                    <div>
                       <form onSubmit={this.handleProjectSubmit}>
                                <label>
                                    <span className="form">Project Title: </span>
                                    <input type="text" value={this.state.newProject.name} name="name" onChange={(e)=> this.setState({ newProject: { name: e.target.value }})} />
                                </label>
                                <input type="submit" value="Submit" className="addButton"/>
                            </form> 
                    </div> : null}
                {this.displayProject()}
                    {this.state.taskForm ?
                        <div>
                            Add task to {this.state.currentProject.name}
                            <form onSubmit={this.handleTaskSubmit}>
                                <label>
                                    <span className="form">Task Title: </span>
                                    <input type="text" value={this.state.newTask.name} name="name" onChange={this.handleTaskChange} />
                                </label>
                                <label>
                                    <span className="form">Task Description:</span> 
                                    <input type="text" value={this.state.newTask.description} name="description" onChange={this.handleTaskChange}/>
                                </label>
                                <input type="submit" value="Submit" className="addButton"/>
                            </form>
                        </div>
                    : null}
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        projects: state.projects.projects,
        tasks: state.tasks.tasks
    }
}

export default connect(mapStateToProps, { 
    fetchProjects,
    fetchTasks,
    addProject,
    addTask,
    deleteProject
})(Project);