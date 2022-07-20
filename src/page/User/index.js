
import axios from "axios";
import React, { useEffect, useState } from "react";
import { List, InputPostCliente, AddUser, Add } from "../styles";
import { Link } from "react-router-dom"
import Swal from 'sweetalert2';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';


import Nav from "../../components/Nav/Nav";



export default function App() {
    const [clientes, setClientes] = useState([]);
    const [clienteSearch, setClienteSearch] = useState("");
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [rua, setRua] = useState("");
    const [bairro, setBairro] = useState("");
    const [cidade, setCidade] = useState("");
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cadastro, setCadastro] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3004/clientes")
            .then(res => {
                setClientes(res.data);
                console.log("useState OK");
                console.log(clientes)
            }
            )
    }, []);

    function handlePost() {
        axios.post("http://localhost:3004/clientes", {
            nome: String(nome),
            sobrenome: String(sobrenome),
            telefone: String(telefone),
            rua: String(rua),
            bairro: String(bairro),
            estado: String(estado),
            cidade: String(cidade),
            cep: String(cep),

        })
            .then(res => {
                setClientes([...clientes, res.data]);
                console.log("useState OK");
            }
            )
    }


    function handleSearch(e) {
        axios.get(`http://localhost:3004/clientes?${clienteSearch ? `nome=${clienteSearch}` : " "}`)
            .then(res => {
                setClientes(res.data);
                setClienteSearch("");
            })
    }

    function handleCep() {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => {
                setRua(res.data.logradouro);
                setBairro(res.data.bairro);
                setCidade(res.data.localidade);
                setEstado(res.data.uf);
                setCep(res.data.cep);
            }
            )
    }


    function deletFunction(id) {
        axios.delete(`http://localhost:3004/clientes/${id}`)
            .then(res => {
                setClientes(clientes.filter(clientes => clientes.id !== id)
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


    function FormUser() {

        return (
            <InputPostCliente>
                <form onSubmit={(e) => handlePost(e)}>

                    <div className="form-row">
                        <div className="col">
                            <label for="inputAddress">Nome</label>
                            <input type="text" className="form-control" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
                        </div>
                        <div className="col">
                            <label for="inputAddress">Sobrenome</label>
                            <input type="text" className="form-control" placeholder="Sobrenome" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)}></input>
                        </div>
                        <div className="col">
                            <label for="inputAddress">Telefone</label>
                            <input type="text" className="form-control" placeholder="Telefone" value={telefone} onChange={(e) => setTelefone(e.target.value)}></input>
                        </div>
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputEmail4">Rua</label>
                            <input type="text" class="form-control" id="inputEmail4" placeholder="Rua" value={rua} onChange={(e) => setRua(e.target.value)}></input>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputPassword4">Bairro</label>
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}></input>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">Cidade</label>
                            <input type="text" className="form-control" id="inputCity" value={cidade} onChange={(e) => setCidade(e.target.value)}></input>
                        </div>

                        <div className="col">
                            <label for="inputAddress">Estado</label>
                            <input type="text" className="form-control" placeholder="Sobrenome" value={estado} onChange={(e) => setEstado(e.target.value)}></input>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputCEP">CEP</label>
                            <input type="text" className="form-control" name="cep" id="inputCEP" value={cep} onChange={(e) => setCep(e.target.value)} ></input>
                            <button type="button" className="btn btn-primary" onClick={() => handleCep()}>Buscar</button>
                        </div>
                    </div>
                    <div className="form-group">

                    </div>

                    <Add>

                        {/* <button type="submit" className="btn btn-primary btn-lg">Salvar Cliente</button> */}
                        <Button type="submit" variant="contained" endIcon={<SendIcon />}>Cadastrar</Button>
                        <Button color="error" variant="contained" startIcon={<DeleteIcon />} onClick={() => setCadastro(false)}> Desistir </Button>
                    </Add>

                </form>
            </InputPostCliente>

        )
    }

////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <div>
            <Nav></Nav>

            <Add>
                <Button variant="contained" disableElevation value={cadastro}
                    onClick={() => setCadastro(true)} hidden={cadastro}> {/* hidden esconde o cadastro */}
                    + Adicionar Cliente
                </Button>
            </Add>
            {cadastro && FormUser()}  {/* Se cadastro for true, mostra o formulário */}

            <AddUser >
                    <input type="text" value={clienteSearch} onChange={(e)=> setClienteSearch(e.target.value)}
                    ></input>
                    {/* <button onClick={handleSearch} type="submit" className="btn btn-primary btn-lg">Buscar</button> */}
                    <Button type="submit" onClick={handleSearch} variant="contained" endIcon={<SendIcon />}>Buscar</Button>
                    <Button type="submit" onClick={()=> handleSearch(" ")} variant="//#endregion" endIcon={<SendIcon />}>Todos os clientes</Button>
                    {/* <button onClick={()=> handleSearch(" ")} name="zerar" type="submit" className="btn btn-sucess btn-lg">Todos os clientes</button> */}
            </AddUser>



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
    );
}