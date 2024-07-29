import { useState } from "react"
import NewTask from "./NewTask"
import ToDo from "./ToDo";
import Edit from "./Edit";

const ToDoList = () => {
    const [todoValue, setTodo] = useState([]);
    const createTodo = todo => {
        setTodo([...todoValue, {id: self.crypto.randomUUID(), task: todo, isEditing: false}])
    }
    const deleteTodo = id => {
        setTodo(todoValue.filter(todo => todo.id !== id));
    }
    const editTodo = id => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todoValue, isEditing: !todo.isEditing} : todo))
    }
    const editTask = (task, id) => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todoValue, task, isEditing: !todo.isEditing} : todo))
    }
    return (
        <div className="container bg-gray-700 mt-20 p-8 mx-auto rounded-md lg:w-2/3">
            <NewTask createTodo={createTodo} />
            {
                todoValue.map((todo, index) => (
                    todo.isEditing ? (
                        <Edit key={index} editTodo={editTask} task={todo}/>
                    ) : (
                        <ToDo task={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo}/>
                    )
                ))
            }
        </div>
    )
}

export default ToDoList