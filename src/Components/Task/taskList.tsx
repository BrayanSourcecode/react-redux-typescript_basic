import React from "react";
import { Link } from "react-router-dom"
import { RootState } from "../../app/store";
import { useSelector, useDispatch } from "react-redux";

import "../css/taskList.css"
import { deleteTask } from "../../Reducer/Task/taskSlice";

function TaskList() {

    const task = useSelector((state: RootState) => state.task)
    const dispatch = useDispatch()
    // evento para eliminar la tarea con el id que se recibe que ya esta en el estado
    const handleDelete = (id: string) => {
        // con el dispactch llamos ala funcion delete del reducer para eliminar  la tarea
        dispatch(deleteTask(id))
    }

    return (
        <div className="container_listas">
            <header>
                <h1>{task.length}</h1>
                {/* estiqueta que retireciona el create task */}
                <Link to={"create_task"}>
                    Create Task
                </Link>

            </header>

            {task.map(task => (
                // la llave unica es para que no de un error
                <div className="container_list" key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                    <Link to={`/edit_task/${task.id}`}> Editar</Link>
                </div>
            ))}
        </div>
    )
}

export default TaskList