import { TaskItem } from './TaskItem'
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

export function TaskList() {

    const { tasks } = useContext(TaskContext)

    return (

        <div className='flex-column-container'>

            <h1>Lista de tareas</h1>
            {
                tasks.length === 0 ?
                
                <h3 className='no-content'>No hay tareas pendientes</h3> :

                <div className="flex-row-container">
                    {
                        tasks.map((task) => (
                            <TaskItem key={task.id} {...task} />
                        ))
                    }
                </div>
            }
        </div>
    )
}
