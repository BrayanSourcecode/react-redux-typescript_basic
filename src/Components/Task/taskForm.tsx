import React from "react";
import { useState, useEffect } from "react";
import { addTask,updateTask } from "../../Reducer/Task/taskSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../app/store";
import { v4 as uuid } from "uuid"

import { useNavigate, useParams } from "react-router-dom"



interface mySatet {
    id?: string
    title: string
    description: string
}
function TaskForm() {


    // aca creamos un estado local que solo se va a utilizar en este componente no es necesario crear uno global
    const [task, setTask] = useState<mySatet>({
        id: "",
        title: "",
        description: ""
    })

    const dispatch = useDispatch();
    const navige = useNavigate();
    //  param es para  obtener el favor que se recibe por la url
    const params = useParams();
    const taskglobal = useSelector((state: RootState) => state.task)

    // funcion para  actualizar el estado local  
    const handleChange = (even: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {

        setTask({...task,[even.target.name]:even.target.value})
    }


    const handleSumit = (even: React.FormEvent<HTMLFormElement>) => {
        even.preventDefault();

        if(params.id){
            dispatch(updateTask(task))
            navige("/")
        }else{
           
            dispatch(addTask({
                // copiamos el task que recimos  y le agreamos un id 
                ...task,
                id: uuid()
            }))
            navige("/")
        }

        
    }

    // cada vez que cargemos el componete
    useEffect(() => {
        // comprobamos si existe parametros por la url
        if (params) {
            // nuscamos en el estado de las tareas existenten si hay una tarea con el id que se recibe 
            // por el params y se  actualiza el estado si la encuentra
            const task_find = taskglobal.find(task => task.id === params.id)
            if (task_find) {
                setTask(task_find)
            }
        }

    },[])
    return (
        <form action="" onSubmit={handleSumit}>
            <input  name="title"type="text" placeholder="title" onChange={handleChange} value={task.title}/>
            <textarea name="description" placeholder="description" onChange={handleChange} value={task.description}></textarea>
            <button>Guardar</button>

        </form>
    )
}

export default TaskForm