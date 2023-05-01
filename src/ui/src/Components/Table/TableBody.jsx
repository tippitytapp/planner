import React from "react";
import { useSelector } from "react-redux";
import TableRow from "./TableRow";

function TableBody(props){
    let {headings, rows} = props
    return (
        <tbody>
           {rows.map(row => <TableRow key={`${JSON.stringify(row)}`} row={row} headings={headings} />)}
        </tbody>
  )
} 
export default TableBody