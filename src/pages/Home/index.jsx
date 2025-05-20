import { useEffect, useState } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

// React Hooks
// useEffect: Executa os métodos ao iniciar a tela
// useState: Permite a atribuição de valores a variáveis e ser acessável no return

function Home() {
  let [users, setUsers] = useState([]);

  async function getUsers() {
    const usersFromAPI = await api.get('/usuarios')

    setUsers(usersFromAPI.data);
    console.log(users)
  }

  useEffect(() => {
    getUsers()
  }
  , []);

  return (
    <div className="container">
      <form>
        <h1> Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="name" />
        <input placeholder="Idade" type="number" name="age" />
        <input placeholder="E-mail" type="text" name="email" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button>
            <img src={Trash} alt="" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
