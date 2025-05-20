import "./style.css";
import Trash from "../../assets/trash.svg";

function Home() {
  const users = [
    {
      id: "asddsf",
      name: "Natália",
      age: 26,
      email: "naty@hotmail.com",
    },
    {
      id: "dfgcfb",
      name: "Alex",
      age: 27,
      email: "alex@hotmail.com",
    },
    {
      id: "dfgomjpomkjc",
      name: "Artur",
      age: 22,
      email: "artur@hotmail.com",
    },
  ];

  return (
    <div className="container">
      <form>
        <h1> Cadastro de Usuários</h1>
        <input placeholder="Nome" type="text" name="name" />
        <input placeholder="Idade" type="number" name="age" />
        <input placeholder="E-mail" type="text" name="email" />
        <button type="button">Cadastrar</button>
      </form>

      <h2>Usuário Cadastrado</h2>
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
