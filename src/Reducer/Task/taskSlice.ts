import { createSlice } from "@reduxjs/toolkit"
import { Action } from "@remix-run/router"

interface myState {
    id: string
    title: string
    description: string
    complete: boolean
}

// tambiem podemos configurar el estado inicial asi y lo pasamos directamente
const initialState: myState[] = [
    {
        id: "1",
        title: "Task 1",
        description: "Task 1 description",
        complete: false
    },
    {
        id: "2",
        title: "Task 2",
        description: "Task 2 description",
        complete: false
    }
]

export const taskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            // agreamos al estado que es una array el paylod o datos que se reciben
            state.push(action.payload)

        },

        deleteTask:(state,action)=>{
            // buscamos si en el estado se encuentra el id de la tarea que vamos elimar
           const taskFound=state.find(task=> task.id  === action.payload)
         if(taskFound){
            //  si encuentra tarea  buscamos el indice del latarea que encontramos y la quitamos
            state.splice(state.indexOf(taskFound),1)
         }

        },

        updateTask:(state,action)=>{
            // sacamos las propiedades del pyload
            const {id,title,description}=action.payload
            // buscamos la tarea a actualizar
            const taskFound=state.find(task=> task.id  === id)
            // si exisate tarea a actualizar 
            if(taskFound){
                // actaulizamos los datos
               taskFound.title=title
               taskFound.description=description
                
             }
        }
    }
})

export const { addTask ,deleteTask,updateTask} = taskSlice.actions

export default taskSlice.reducer;

