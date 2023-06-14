<p align="center">
  <a href="" rel="noopener">
 <img width=500px height=400px src="https://github.com/ThiagoKS-7/crm-api/assets/83460816/0b163dfb-986c-4882-9afb-382383aab2a3" alt="Project logo"></a>
</p>

<h3 align="center">Node.js CRM REST-API</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/ThiagoKS-7/crm-api.svg)](https://github.com/ThiagoKS-7/crm-api/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/ThiagoKS-7/crm-api.svg)](https://github.com/ThiagoKS-7/crm-api/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Intrasocial's challenge
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [UML](#uml)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

<details>
  <summary style="font-size:30px; font-weight:bold"> <h3>Requisitos</h3></summary>

  ### Requisitos Funcionais:
- O sistema deve permitir o cadastro de clientes, contendo as seguintes informações: `nome, e-mail, telefone, endereço e status.`
- Ao se cadastrar, o cliente deve ser direcionado para ser atendido por um dos 20 agentes disponíveis de forma sequencial, ordenada pelo nome do agente.
- Cada agente deve ter uma lista de clientes atribuídos a ele, ordenada pelo momento em que foram cadastrados.
- Cada agente deve poder editar o status de cada cliente para `"Aguardando Atendimento", "Em Atendimento", "Proposta Feita", "Não Concluído" ou "Vendido"`.
- A tela para exibir os clientes deve conter colunas, sendo cada coluna um status e contendo os clientes que pertencem a ele. Os clientes devem ser ordenados por ordem de chegada na lista do agente.
- As colunas devem ser ordenadas dessa forma:  `"Aguardando Atendimento", "Em Atendimento", "Proposta Feita", "Não Concluído" ou "Vendido"`

### Requisitos Técnicos:
-  A aplicação deve ser desenvolvida utilizando `Node.js, MongoDB, AngularJS e Bootstrap`.
-  A API deve seguir o padrão RESTful e suportar as operações CRUD.
-  A interface web deve permitir o cadastro e edição de clientes, a visualização dos clientes atribuídos a cada agente, e a edição dos status dos clientes.
-  A interface web deve ser responsiva e utilizar Bootstrap para a criação do layout.
-  A aplicação deve ser hospedada online(ex.: Heroku) e o banco de dados deve estar no MongoDB Atlas.
</details>

<details>
  <summary style="font-size:30px; font-weight:bold"> <h3>UML</h3> <a name = "uml"></a></summary>

  ### Casos de uso:
   <img width=400px height=400px src="https://github.com/ThiagoKS-7/crm-api/assets/83460816/58b162d8-008f-4cac-b51a-ed928ced6ad8" alt="Usecase diagram" />

 ### Classes:
  <img width=450px height=350px src="https://github.com/ThiagoKS-7/crm-api/assets/83460816/4b14f2f8-544d-4897-88d5-0b7ba7667a4d" alt="Classes diagram" />
</details>


## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

- Node 18
- Openssl

Cheque a versão do seu node com:
```bash
node -v
```

Caso não possua ssl na sua máquina, instale com (WSL e linux):
```bash
sudo apt install openssl
```

### Installing

Instale as dependências do projeto
```bash
npm install
```

Crie um arquivo .env, a partir do template de .env.example. Troque as informações conforme sua necessidade.
Na pasta raíz do projeto, use:
```bash
cp .env.example .env
```

Crie os schemas do prisma, com o comando:
```bash
npm run gen
```

Crie uma chave privada para o JWT, com o comando:
```bash
openssl genrsa -out private.pem 2048
```

Em seguida, crie uma publica, usando:
```bash
openssl rsa -in private.pem -pubout -out public.pem
```

## 🎈 Usage <a name="usage"></a>

Para testar localmente  o código, depois de seguir o processo de instalação, escreva:
```bash
npm run dev
```


## ⛏️ Built Using <a name = "built_using"></a>

- [MongoDB](https://www.mongodb.com/) - Database
- [Zod](https://zod.dev/) - Schema validation
- [Prisma](https://www.prisma.io/) - Node & Typescript ORM
- [Fastify](https://www.fastify.io/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@ThiagoKS-7](https://github.com/ThiagoKS-7) - Initial work
