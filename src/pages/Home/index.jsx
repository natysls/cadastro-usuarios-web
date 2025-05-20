import { useEffect, useState, useRef } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

// React Hooks
// useEffect: Executa os métodos ao iniciar a tela.
// useState: Permite declarar variáveis de estado que podem ser atualizadas e acessadas dentro do componente.
// useRef: Permite criar referências mutáveis que podem ser acessadas diretamente, sem causar re-renderizações do componente.

function Home() {
  const [users, setUsers] = useState([]);
  const inputName = useRef(null);
  const inputAge = useRef(null);
  const inputEmail = useRef(null);

  async function getUsers() {
    const usersFromAPI = await api.get('/usuarios')

    setUsers(usersFromAPI.data);
  }

  async function createUsers() {
    await api.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    });

    getUsers();
  }

  useEffect(() => {
    getUsers()
  }
  , []);

  return (
    <div className="container">
      <form>
        <h1> Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="name" ref={inputName}/>
        <input placeholder="Idade" type="number" name="age" ref={inputAge}/>
        <input placeholder="E-mail" type="text" name="email" ref={inputEmail}/>
        <button type="button" onClick={createUsers}>Cadastrar</button>
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
