import { BsFillTrashFill } from "react-icons/bs";
import { BsPencilFill } from "react-icons/bs";
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

export function TaskItem({ id, nombre, descripcion, estado }) {
    
    const { deleteTask } = useContext(TaskContext)

    return (

        <div className="card">

            <div className="card-body">
                <h3 className="card-title">{nombre}</h3>
                <p className="card-text">{descripcion}</p>
            </div>
            <hr className='card-separator' />
            <div className='card-footer'>
                <button className='icon-button edit'><BsPencilFill /></button>
                <button className='icon-button delete'
                    onClick={() => deleteTask(id)} ><BsFillTrashFill /></button>
            </div>

            <div className={estado ? 'estado finalizada' : 'estado pendiente'}></div>

        </div>
    )
}
