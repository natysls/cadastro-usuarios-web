# Cadastro de Usuários Web

Este projeto é uma aplicação web para cadastro e gerenciamento de usuários, usando ReactJS com JavaScript e consome a api de usuários feita em Node.js.

## Funcionalidades

- Cadastro de novos usuários
- Listagem de usuários cadastrados
- Remoção de usuários

## Tecnologias Utilizadas

- **ReactJS** – Biblioteca para construção da interface de usuário.
- **Vite** – Ferramenta de build e desenvolvimento rápido para projetos frontend.
- **Axios** – Cliente HTTP para requisições à API.
- **API Node.js** – API de usuários disponível em: [natysls/usuarios-node-api](https://github.com/natysls/usuarios-node-api)


## Como Executar

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/cadastro-usuarios-web.git
    ```
2. Instale as dependências:
    ```bash
    cd cadastro-usuarios-web
    npm install
    ```
3. Inicie a API de usuários:
    ```bash
    node --watch server.js
    ```
4. Inicie a aplicação:
    ```bash
    npm run dev
    ```

A aplicação estará disponível em `http://localhost:5173`, e estará consumindo a API Node.js de usuários na rota `http://localhost:3000`. Será esperada essa tela:

![alt text](image.png)

## 📺 Fonte da Aula
Este projeto foi baseado na seguinte aula do Youtube:
[Aprendendo React do Zero, Conectando Back e Front End, e Consumindo API](https://youtu.be/PyrMT0GA3sE?si=TFYwPy-aiu8kAaR8)