import React, { Component } from 'react'
import '../static/Todo.css';
import Tasks from './Tasks';
import Popup from 'reactjs-popup';
import NewTask from './NewTask';

export default class Todo extends Component {
  render() {
    function add_new() {
        alert("You can add new task..!!");
    }
    return (
      <div className='container mt-5'>
        <div className='text-center'>
            <h1>
                To Do List
            </h1>
        </div>
        <div className='d-flex justify-content-between mb-4'>
        <Popup trigger=
            {<button id='add_new' className='btn btn-primary d-flex-inline' onClick={add_new}>Add Task</button>}
            modal > 
            <NewTask />
            </Popup>
            <select id='taskType' className='form-control d-flex-inline'>
                <option id='all' value={"all"}>All</option>
                <option id='open' value={"open"}>Open</option>
                <option id='completed' value={"completed"}>Completed</option>
            </select>
        </div>
        <Tasks />
      </div>
    )
  }
}