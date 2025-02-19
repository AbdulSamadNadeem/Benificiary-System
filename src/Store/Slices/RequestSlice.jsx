import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    currentbenificairay: [],
    allbenificiaries:[]
}

export const RequestSlice = createSlice({
    name:'request',
    initialState,
    reducers:{
        seekersData : (state , {payload} )=>{
            console.log(payload)
                state.currentbenificairay = payload
        } , 
        allseekerdata : (state , {payload})=>{
                  state.allbenificiaries = payload
        }
    }
})
export const {seekersData , allseekerdata}  = RequestSlice.actions
export default RequestSlice.reducer

