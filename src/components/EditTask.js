import React, { Component } from 'react'

export default class EditTask extends Component {
  render() {
    return (
        <div>
            <form>
                <div className="form-group">
                        <label for="inputAddress">New Task</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="Do the cleaning.." />
                    </div>
                    <button id='add_to_list' className="btn btn-success">Save</button>
                </form>
        </div>
    )
  }
}