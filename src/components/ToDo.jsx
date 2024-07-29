import { GrEdit } from "react-icons/gr";
import { GrTrash } from "react-icons/gr";

const ToDo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className="flex justify-between items-center bg-sky-500 py-3 px-4 text-white rounded-md mb-1 cursor-pointer">
        <p className="font-primary">{task.task}</p>
        <div className="flex items-center gap-x-4">
            <GrEdit className="text-xl" onClick={() => editTodo(task.id)}/>
            <GrTrash className="text-xl text-red-500" onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default ToDo