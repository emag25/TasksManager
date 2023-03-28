import './Tasks/styles/task.css'
import { TaskForm } from './Tasks/components/TaskForm'
import { TaskList } from './Tasks/components/TaskList'

function App() {

  return (
    <>
      <TaskForm/>
      <hr />
      <TaskList/>
    </>
  )
}

export default App
