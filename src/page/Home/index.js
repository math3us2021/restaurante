import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom"

import { List, AddUser, InputPost } from "../styles";
import Nav from "../../components/Nav/Nav";
import Card from "../../components/Card/Card";
import { Button } from "@mui/material";




function App() {

    const [restaurante, setRestaurante] = useState([]);
    const [prato, setPrato] = useState("");
    const [cardapio, setCardapio] = useState(false);
    const [clientes, setClientes] = useState([]);
    const [user, setUser] = useState("");
    const [openUse, setOpenUse] = useState(false);



    // useEffect(() => {
    //     axios.get("http://localhost:3004/restaurante")
    //         .then(res => {
    //             setRestaurante(res.data);
    //             console.log("useState OK");
    //             console.log(restaurante)
    //         })
    // }, [setPrato]);


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

    function handleSearchUser(e) {
        e.preventDefault();
        axios.get(`http://localhost:3004/clientes?${user ? `nome=${user}` : " "}`)
            .then(res => {
                setClientes(res.data);
                setUser("");//limpa o input

            })
    }
    function searchUser() {
        return (
            <div>
                <List>
                    <table>
                        <tbody>
                            <th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Telefone</th>
                                <th>Rua</th>
                                <th>Bairro</th>
                                <th>Cidade</th>
                                <th>Estado</th>
                                <th>CEP</th>

                                <th>Excluir</th>

                                {clientes.map(cliente => (
                                    <tr key={cliente.id} >
                                        <td><strong>{cliente.nome}</strong></td>
                                        <td><strong>{cliente.sobrenome}</strong></td>
                                        <td><strong>{cliente.telefone}</strong></td>
                                        <td> <strong>{cliente.rua}</strong></td>
                                        <td> <strong>{cliente.bairro}</strong></td>
                                        <td> <strong>{cliente.cidade}</strong></td>
                                        <td> <strong>{cliente.estado}</strong></td>
                                        <td> <strong>{cliente.cep}</strong></td>

                                        <td><button className="btn btn-outline-danger" onClick={() => handledelete(cliente.id)}>Excluir</button>
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


    // function searchUser() {
    //     return (
    //         <div></div>
    //     )
    // }




    function handleSearchCardapio(e) {
        e.preventDefault();
        axios.get(`http://localhost:3004/restaurante?${prato ? `prato=${prato}` : " "}`)
            .then(res => {
                setRestaurante(res.data);
                console.log("useState OK");
                console.log(restaurante);
                setPrato("");//limpa o input
            }
            )
    }

    function searchCardapio() {
        return (
            <div>

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
                                        <td><button className="btn btn-outline-danger" onClick={() => handledelete(restaurant.id)}>Excluir</button>

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
    /////////////////////////////////////////////////////////////////////////////////////////////////
    return (
        <div >

            <Nav></Nav>
            <Card></Card>
            <AddUser>
                <div>
                    <form>
                        <input type="text" placeholder="Buscar prato no cardápio" value={prato} onChange={e => setPrato(e.target.value)} />
                        <div>
                            <button type="submit"
                                onClick={(e) => { handleSearchCardapio(e); setCardapio(true) }} >Buscar</button>
                            <button onClick={() => setCardapio(false)}>Fechar busca</button>
                        </div>
                    </form>
                </div>
                <div>
                    <form>
                        <label>
                            <input type="text" placeholder="Buscar por cliente" value={user} onChange={e => setUser(e.target.value)} />
                            <div>
                                <button type="submit"
                                    onClick={(e) => { handleSearchUser(e); setOpenUse(true) }} >Buscar</button>
                                <button onClick={() => setOpenUse(false)}>Fechar busca</button>
                            </div>
                        </label>
                    </form>
                </div>

                {cardapio && searchCardapio()}
                {openUse && searchUser()}

            </AddUser>

          
            {/* <Footer></Footer> */}



        </div>
    );
}

export default App;
