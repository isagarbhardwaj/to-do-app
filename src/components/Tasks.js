import React, { Component } from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import EditTask from './EditTask';
import DeleteTask from './DeleteTask';

export default class Tasks extends Component {
  render() {
    return (
      <div>
        <table className="table">
            <thead className="thead-light border rounded">
                <tr>
                    <th scope="col">Status</th>
                    <th scope="col">Description</th>
                    <th scope="col">Last Edited</th>
                    <th scope="col" className='text-end'>Actions</th>
                </tr>
            </thead>
            <tbody className='border rounded'>
                <tr>
                    <td>
                        <input type='checkbox' className='form-check-input form-check form-switch' role="switch"/>
                    </td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td className='text-end'>
                    <Popup trigger= {<button className='btn btn-warning'><span>Edit</span></button>} modal >
                        <EditTask />
                    </Popup>
                    <Popup trigger= {<button className='btn btn-warning'><span>Delete</span></button>} modal >
                        <DeleteTask />
                    </Popup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' className='form-check-input form-check form-switch' role="switch"/>
                    </td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td className='text-end'>
                        <button className='btn btn-warning'>Edit / Delete</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type='checkbox' className='form-check-input form-check form-switch' role="switch"/>
                    </td>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td className='text-end'>
                        <button className='btn btn-warning'>Edit / Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
      </div>
    )
  }
}