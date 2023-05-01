import React from "react";
import TableCell from "./TableCell";
function TableRow({row, headings}){
    let cells = typeof row === "object" ? Object.values(row) : row.split(",")
    return (
        <tr className="table-row">
           {cells.map((cell, i) => <TableCell key={cell+i} cell={row[headings[i]]}/>)}
        </tr>
    )
}

export default TableRow