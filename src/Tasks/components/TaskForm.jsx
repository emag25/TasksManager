import { useContext, useState } from "react"
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {

  const {createTask} = useContext(TaskContext)

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const HandleSubmit = (e) => {
    e.preventDefault()
    const task = {
      nombre,
      descripcion,
      estado: false
    }
    createTask(task)
    setNombre('')
    setDescripcion('')
  }
    
  return (
    <form className="flex-column-container" onSubmit={HandleSubmit} >

      <h1>Nueva tarea</h1>

      <input type="text"
        placeholder="Nombre de la tarea"
        onChange={(e) => setNombre(e.target.value)}
        value={nombre} autoFocus/>
      
      <input type="text"
        placeholder="Descripcion de la tarea"
        onChange={(e) => setDescripcion(e.target.value)}
        value={descripcion} />
      
      <button type="submit">Guardar</button>

    </form>
  )
}

