import React ,{useEffect, useState} from "react";
import axios from "axios";
// import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


export default function App() {

    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3004/employees")
        .then(res=> {
            setEmployees(res.data);
            console.log("useState OK");
        })
    }, []);


    


    return (
        <div>
        <h1>Hello World</h1>




        </div>
    )
    }