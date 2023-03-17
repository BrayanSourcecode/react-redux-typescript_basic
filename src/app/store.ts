import { configureStore } from "@reduxjs/toolkit";
import taskSliceReducer from "../Reducer/Task/taskSlice";


export const store = configureStore({
    reducer: {
        task: taskSliceReducer
    }
})


//  siempre hay que exportar el type en typescrip para poder utilizarlo 
export type RootState = ReturnType<typeof store.getState>;
