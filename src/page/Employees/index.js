import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Nav from "../../components/Nav/Nav";


export default function App() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/employees")
            .then(res => {
                setEmployees(res.data);
                console.log("useState OK");
                console.log(employees)
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
            <Nav></Nav>
           
            
            <div style={{ height: 350, width: '100%' , background: 'rgb(87, 84, 84)' , color:"#fff" , textAlign: "center"}}>
      <DataGrid rows={employees} columns={columns} />
    </div>


        </div>
    )
}