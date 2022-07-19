import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import { InputPost} from "../styles";


export default function App() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/employees")
            .then(res => {
                setEmployees(res.data);
                console.log("useState OK");
            })
    }, []);




    const columns = [
        { field: 'id', headerName: 'ID' },
        { field: 'nome', headerName: 'Nome', width: 150 },
        { field: 'cargo', headerName: 'Cargo', width: 150 },
        { field: 'salario', headerName: 'Salario', width: 150 },
      ];

    return (
        <div>
            <h1>Hello World</h1>
            
            <div style={{ height: 450, width: '200%' , background: 'rgba(255, 255, 255, .25)' , alignItems: "center"}}>
      <DataGrid rows={employees} columns={columns} />
    </div>


        </div>
    )
}