
import React, { useEffect , useState } from "react";


import Nav from "../../components/Nav/Nav";



export default function App() {
   
    const [cep, setCep] = useState("");

    function handleCep(e) {
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setCep(data.cep);
            }
            )
    }
  


    return (
        <div>
            <Nav></Nav>

            <form>

                <div className="form-row">
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Nome"></input>
                    </div>
                    <div className="col">
                        <input type="text" className="form-control" placeholder="Sobrenome"></input>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" className="form-control" id="inputPassword4" placeholder="Senha"></input>
                    </div>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Endereço</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"></input>
                </div>
                <div className="form-group">
                    <label for="inputAddress2">Endereço 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc."></input>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" className="form-control" id="inputCity"></input>
                    </div>
                    <div className="form-group col-md-4">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" className="form-control">
                            <option selected>Escolher...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label for="inputCEP">CEP</label>
                        <input type="text" className="form-control" name="cep" id="inputCEP" ></input>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"></input>
                        <label className="form-check-label" for="gridCheck">
                            Clique em mim
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Entrar</button>
            </form>

        </div>
    );
}