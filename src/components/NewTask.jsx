import { useState } from "react"

const NewTask = ({createTodo}) => {

    const [value, setValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        createTodo(value);
        setValue('')
    }
  return (
    <form className="mb-4 font-primary w-full text-center" onSubmit={handleSubmit}>
        <input type="text" name="" id="" className="outline-none p-4 bg-transparent border border-sky-600 w-full lg:w-2/3 text-white mb-8 rounded placeholder:text-sky-400" placeholder="New Task" onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit" className="bg-sky-600 p-3 text-white cursor-pointer rounded ml-4">Add Task</button>
    </form>
  )
}

export default NewTask