import { useState } from "react"

const Edit = ({editTodo, task}) => {

    const [value, setValue] = useState('')
    console.log(task);
    const handleSubmit = (e) => {
        e.preventDefault()
        editTodo(value, task.id);
        setValue('')
    }
  return (
    <form className="mb-4 font-primary w-full text-center" onSubmit={handleSubmit}>
        <input type="text" className="outline-none p-4 bg-transparent border border-sky-600 w-[300px] text-white mb-8 rounded placeholder:text-sky-400" placeholder="Update the task" onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className="bg-sky-600 p-2 text-white cursor-pointer rounded ml-2">Update Task</button>
    </form>
  )
}

export default Edit