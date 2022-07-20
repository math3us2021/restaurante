import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom"
import { List , Add, InputPost} from "../styles";
import Swal from 'sweetalert2';
import axios from "axios";

import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";

export default function Cardapio() {

    const [restaurante, setRestaurante] = useState([]);
    const [prato, setPrato] = useState("");

    useEffect(() => {
        axios.get("http://localhost:3004/restaurante")
            .then(res => {
                setRestaurante(res.data);
                console.log("useState OK");
                console.log(restaurante)
            })
    }, []);


    function deletFunction(id) {
        axios.delete(`http://localhost:3004/restaurante/${id}`)
            .then(res => {
                setRestaurante(restaurante.filter(restaurant => restaurant.id !== id)
                );
            })
    }
    function handledelete(id) {
        Swal.fire({
            title: 'Você deseja excluir o arquivo? Após a exclusão não será possível recuperar o arquivo.',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Excluir',
            denyButtonText: `Manter arquivo`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                Swal.fire('Item Excluido!', '', 'success');
                deletFunction(id);
            } else if (result.isDenied) {
                Swal.fire('Arquivo salvo', '', 'info')
            }
        })
    }

    
    function handleSearth(e) {
        e.preventDefault();
        axios.get(`http://localhost:3004/restaurante?${prato ? `prato=${prato}` : " " }`)
            .then(res => {
                setRestaurante(res.data);
                setPrato("");//limpa o input
    })
    }

    return(
        <div>
            <Nav></Nav>
    
            <InputPost>
                <input value={prato}  onChange={(e)=> setPrato(e.target.value)} placeholder="Digite o prato"></input>
                <button onClick={handleSearth}>Pesquisar</button>
            </InputPost>

            <Add>
                <Link to={"/create"}>
                    <button type="button" className="btn btn-primary btn-lg">+ Adicionar Prato</button>
                </Link>
            </Add>

            <List>
                <table>
                    <tbody>
                        <th>
                            <th>Descrição do prato</th>
                            <th>Preço</th>
                            <th>Editar</th>
                            <th>Excluir</th>

                            {restaurante.map(restaurant => (
                                <tr key={restaurant.id} >
                                    <td><strong>{restaurant.prato}</strong></td>
                                    <td>R$: <strong>{restaurant.preco}</strong></td>
                                    <td>
                                        <Link to={"/edit/" + restaurant.id}>
                                        <button className="btn btn-outline-warning">Editar</button>
                                        </Link>
                                        </td>
                                    <td><button  className="btn btn-outline-danger" onClick={() => handledelete(restaurant.id)}>Excluir</button>
                                    
                                    </td>
                                </tr>

                            ))}

                        </th>
                    </tbody>
                </table>
            </List>
            

        </div>

    )
}