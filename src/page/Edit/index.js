import React, { useState, useEffect } from "react";

import axios from "axios";
import Swal from 'sweetalert2';
import { useParams , Link} from "react-router-dom";

import { List, InputPost } from "../styles";
import Nav from "../../components/Nav/Nav";





function App() {

  const [restaurante, setRestaurante] = useState([]);
  const [prato, setPrato] = useState("");
  const [preco, setPreco] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios.get("http://localhost:3004/restaurante")
      .then(res => {
        setRestaurante(res.data);
        console.log("useState OK");
      })
  }, []);

  useEffect(() => {
    axios.get(` http://localhost:3004/restaurante/${id}`)
      .then(res => {
        setPrato(res.data.prato);
        setPreco(res.data.preco);
        console.log("useState OK");
      });
  }, [id]);



  function handlePut(e) {
    e.preventDefault();
    axios.put(`http://localhost:3004/restaurante/${id}`, {
      prato: String(prato),
      preco: String(preco),
    }).then(res => {
      setRestaurante(restaurante.map(rest => rest.id === id ? res.data : rest));
      setPrato("");
      setPreco("");
    }
    );
  }

  // function handlePost(e) {
  //   e.preventDefault();
  //   axios.post("http://localhost:3004/restaurante", {
  //     prato: String(prato),
  //     preco: String(preco),
  //   }).then(res => {
  //     setRestaurante([...restaurante, res.data]);
  //   });
  // }




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

  return (
    <div >

      <Nav></Nav>

      <InputPost >
        <form onSubmit={(e) => handlePut(e)}>
          <div>
            <input value={prato} onChange={(e) => setPrato(e.target.value)} placeholder="Digite o prato"></input>
          </div>
          <div>
            <input value={preco} onChange={(e) => setPreco(e.target.value)} placeholder="Digite o preço"></input>
          </div>
          <button className="btn btn-outline-success btn-lg" >+ Criar novo Produto</button>

        </form>
      </InputPost>
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
                  <Link to={"/edit/" + restaurant.id}>
                    <button className="btn btn-outline-warning">Editar</button>
                  </Link>
                  <td><button onClick={() => handledelete(restaurant.id)}>Excluir</button></td>
                </tr>

              ))}

            </th>
          </tbody>
        </table>
      </List>

    </div>
  );
}

export default App;
