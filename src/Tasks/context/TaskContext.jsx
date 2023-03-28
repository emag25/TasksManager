import { useEffect, useState, createContext } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider({ children }) {

    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    function createTask(task) {
        const newTask = {
            id: tasks.length + 1,
            ...task
        }
        setTasks([...tasks, newTask])
    }

    function deleteTask(id) {
        const newTasks = tasks.filter((task) => task.id !== id)
        setTasks(newTasks)  
    }

    return (

        <TaskContext.Provider value={{
            tasks,
            createTask,
            deleteTask
        }} >
            { children }
        </TaskContext.Provider>
    )
}
