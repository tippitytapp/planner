import React, {useState} from "react";
import { useDispatch } from "react-redux";
import * as XLSX from "xlsx";
import { setHeadings, setOriginalData, setRows } from "../../store/reducers/TableReducer";

function FileUpload(){
   const [data, setData]  = useState(null)
   const [fileName, setFileName] = useState("")
    const dispatch = useDispatch()
   function handleChange(event){
    console.log(event.target.files)
       if (event.target.files[0].type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"){

       const reader = new FileReader()
       reader.onload = (e) =>{
        let data = e.target.result;
        let workbook  = XLSX.read(data, {type: "binary"})
        let worksheet = workbook.Sheets[workbook.SheetNames[0]]
        let parsed = XLSX.utils.sheet_to_json(worksheet, {header: 1})
        setData(parsed)
        if(parsed.length > 0){
            let headings = parsed[0]
            let rows = parsed.slice(1)
            let realRows = []
            rows.forEach(r =>{if( r.length > 0){
                let newRow = {}
                headings.forEach(head => newRow[head]="--")
                r.forEach((c, i) => {console.log(c);newRow[headings[i]]=c})
                console.log(newRow)
                realRows.push(newRow)
            }})
            console.log(realRows)
            dispatch(setHeadings(headings))
            dispatch(setRows(realRows))
            dispatch(setOriginalData({headings, rows:realRows}))
        }
       }
       reader.readAsBinaryString(event.target.files[0])
    }
    setFileName(event.target.files[0].name)
    console.log(event.target.files[0].name)
   
   }
    return (
        <div className="file-upload-container">
            <input type="file" onDrop={e=>{e.preventDefault(); e.stopPropagation();handleChange(e)}}onChange={(e)=>{e.preventDefault(); e.stopPropagation();handleChange(e)}} />
            <div className="btn">Choose File</div>
            {fileName ? <div className="text">{fileName}</div> : null}
            {data ? JSON.stringify(data[0]) : null}

        </div>
    );

}

export default FileUpload