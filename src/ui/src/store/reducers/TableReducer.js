import { createReducer } from "@reduxjs/toolkit";

export const initState = {
    headings: [],
    rows:[],
    originalData:{headings:[], rows:[]}
}

const TableReducer = createReducer(initState, builder=>{
    builder.addCase("SET_DATA", (state, action) => { state.originalData = { ...action.payload } })
        .addCase("SET_HEADINGS", (state, action)=>{ return {...state, headings: action.payload}})
        .addCase("SET_ROWS", (state, action)=> {return {...state, rows:action.payload}})
        .addCase("RESET_DATA",(state, action)=>  state = initState)
    })

export function setOriginalData(data){
    return {type:"SET_DATA", payload:data}
}
export function setHeadings(data){
    return {type:"SET_HEADINGS", payload:data}
}
export function setRows (data){
    return {type:"SET_ROWS", payload:data}
}
export function resetData(){
    return {type: "RESET_DATA"}
}
export default TableReducer