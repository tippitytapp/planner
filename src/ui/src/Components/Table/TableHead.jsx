import React from "react";

function TableHead(props){
    let {headings} = props
    return (
        <thead className="table-heading">
            <tr className="table-row heading">
            {Array.isArray(headings) ? headings.map((head, i)=>{
                return (
                    <th key={`${JSON.stringify(head)}-${i}-table-heading`}>
                        {head.displayName}
                    </th>
                )
            }) : null
        }       
        </tr>
         </thead>
    )
}

export default TableHead