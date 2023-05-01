import React, { useEffect, useState } from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import { useSelector } from "react-redux";
import { prepHeadings, prepareRows } from "../../actions/TableDataActions";
export default function Table(){
    const {headings, rows, origininalData} = useSelector((state)=>state.tableData)

    const [h, setH] = useState(prepHeadings(headings, rows))
    const [r, setR] = useState(prepareRows(headings, rows))
    useEffect(()=>{
        setH(prepHeadings(headings, rows))
        setR(prepareRows(headings, rows))
    },[headings, rows])
    return (
        <div className="table-container">
            <table>
                <TableHead headings={h}/>
                <TableBody headings={h} rows={r}/>
            </table>
        </div>
    )
}