# Desafio Clarke Energia

SPA de escolha de fornecedor. Os usuários poderão informar o seu consumo de energia e escolher o melhor fornecedor de acordo com as suas necessidades.

# Dos Requisitos de Produto:

* O usuário deverá informar a sua consumo mensal de energia, exemplo: 30000 kWh (um número fictício > 0)

* Ao informar o consumo, o sistema deverá mostrar quais fornecedores poderiam atender a necessidade do cliente

* Cada fornecedor deve ter as seguintes informações: nome, logo, estado de origem, custo por kWh, limite mínimo de kWh, número total de clientes e avaliação média dos clientes

* Um fornecedor só pode atender um cliente caso o consumo mensal de energia deste seja maior do que o limite mínimo de kWh do fornecedor

# Links do projeto online

> Backend: https://desafio-clarke-energia.onrender.com 

> Frontend: https://desafio-clarke-energia-beta.vercel.app/

# Rodando localmente

## Clone o projeto

```bash
  git clone git@github.com:Ronalt4cs/desafio-clarke-energia.git
```

## Variáveis de Ambiente

#### Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

```bash
# Backend

  DATABASE_URL="postgresql://docker:docker@localhost:5433/api-clarke"
  NODE_ENV
  PORT

# Frontend

  API_URL

```

## Entre no diretório do projeto

```bash
  cd my-project/backend
```

## Instale as dependências 

```bash
  npm install
```

## Rode a imagem do docker

```bash
  docker-compose up -d
```

## Instale as migration do prisma

```bash
  npx prisma migrate dev
```

## Rodando a seed do banco de dados

```bash
  npx prisma db seed
```
## Inicie o servidor

```bash
  npm run dev
```
## Rodando os testes

```bash
  npm run test:watch
```

## Rodando o frontend

Entre no diretório do projeto

```bash
  cd my-project/front
```

## Instale as dependências 

```bash
  npm install
```

## Inicie o servidor

```bash
  npm run dev
```

## Stack utilizada

Node, Fastify, Prisma, Vitest, Docker, NextJs