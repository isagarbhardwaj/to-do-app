import React from 'react'

export default function DeleteTask() {
  return (
    <div>
        <h1>Do you really want to delete task?</h1>
        <button className='btn btn-danger'>Delete</button>
        <button className='btn btn-light'>Cancel</button>
    </div>
  )
}
