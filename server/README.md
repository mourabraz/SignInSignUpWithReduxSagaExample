# _Backend_ do exemplo de SignIn e SignUp em ReactJS e ReactNative com redux e saga

## Para banco de dados será usado o Sqlite

## Início

(usou-se o yarn, mas pode ser usado o npm com os devidos ajustes)

```sh
cd backend
```

1 - Instale as dependências com

```sh
yarn
```

2 - Adicione os seguintes arquivos:

2.1 - o arquivo `.env` com base no arquivo `.env.example`

2.2 - o arquivo com o nome `database.sqlite` dentro da pasta database da raiz do projecto, ou renomeie o `database.sqlite.example` para `database.sqlite`

3 - Rode as migrations

```sh
yarn sequelize db:migrate
```

4 - Para iniciar o server

```sh
yarn dev
```

## Sistema de Autenticação

1. O usuário deve realizar seu cadastro com nome, email e senha;
2. O usuário poderá se autenticar utilizando o email e a senha;
3. A autenticação do usuário é feita por meio de token JWT; e
4. A parte de autenticação é bem simples e não tem verificações de integridade e de validações de token.

## Rotas

Junto segue o arquivo (Insominia_2019-10-17.json) para importar as rotas para o [Insomnia](https://insomnia.rest/)

| Método | Rota      | Privado |                                               |
| :----: | :-------- | :-----: | --------------------------------------------- |
|  POST  | /users    |   NÃO   | criação de conta                              |
|  POST  | /sessions |   NÃO   | autenticação de usuário                       |
|  PUT   | /users    |   SIM   | [NÃO IMPLEMENTDO] edição dos dados do usuário |

## **Atenção ao uso do cors que está aberto para qualquer origem de requisição e para qualquer método**
