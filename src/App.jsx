import ToDoList from "./components/ToDoList"
import { TbPencilCheck } from "react-icons/tb";

function App() {
  return (
    <div className="bg-sky-100 w-full h-lvh py-20 text-sky-600">
      <h1 className="text-center text-5xl font-bold"><span className="text-black">[</span> To Do App <span className="text-black">]</span> <TbPencilCheck className="inline"/></h1>
      <ToDoList />
    </div>
  )
}

export default App
