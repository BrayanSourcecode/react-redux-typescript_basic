import {createSlice} from "@reduxjs/toolkit"
interface myState{
    email:string
    fullname:string
    token:any
}
const initialState:myState={
    email:"",
    fullname:"",
    token:""
}

export const userSlice=createSlice({
name:"user",
initialState:initialState,
reducers:{
 setUser:(state,action)=>{
    state.email=action.payload.email
    state.fullname=action.payload.fullname
    state.token=action.payload.token
 }
}
})


