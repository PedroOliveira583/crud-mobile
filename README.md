# crud-mobile

Sistema CRUD - Gerenciador de Produtos

Sistema completo de CRUD desenvolvido com React Native (Expo) no frontend e Node.js (Express) no backend.

Estrutura do Projeto

O projeto está dividido em dois repositórios:

1. Backend (crud-backend)

•
Tecnologias: Node.js, Express, CORS, UUID

•
Porta: 3000

•
Funcionalidades: API REST completa para gerenciamento de produtos

2. Mobile (crud-mobile)

•
Tecnologias: React Native, Expo, Axios

•
Funcionalidades: Interface mobile para CRUD de produtos

Instalação e Execução

Backend

Bash


cd crud-backend
npm install
node index.js


O servidor será iniciado em http://localhost:3000

Mobile

Bash


cd crud-mobile
npm install
npx expo start


Escaneie o QR Code com o Expo Go para testar no dispositivo.

Endpoints da API

Método
Endpoint
Descrição
GET
/products
Lista todos os produtos
GET
/products/:id
Busca produto por ID
POST
/products
Cria novo produto
PUT
/products/:id
Atualiza produto
DELETE
/products/:id
Exclui produto


Estrutura de Dados

JSON


{
  "name": "string (obrigatório )",
  "price": "number (obrigatório, >= 0)",
  "quantity": "number (obrigatório, inteiro >= 0)"
}


Validações Implementadas

Backend

•
Nome não pode ser vazio ou apenas espaços

•
Preço deve ser número válido e não negativo

•
Quantidade deve ser número inteiro válido e não negativo

•
Retorna mensagens de erro apropriadas

Frontend

•
Validação de campos obrigatórios

•
Validação de tipos numéricos

•
Confirmação antes de excluir

•
Feedback visual de sucesso/erro

•
Estados de carregamento

Funcionalidades do App

•
Listar: Exibe todos os produtos cadastrados

•
Criar: Formulário para adicionar novo produto

•
Editar: Atualiza dados de produto existente

•
Excluir: Remove produto com confirmação

•
Interface responsiva: Design limpo e intuitivo

Arquitetura

Backend

•
Arquitetura RESTful

•
Validação centralizada de dados

•
Tratamento de erros consistente

•
Armazenamento em memória (array)

Frontend

•
Componentização modular

•
Separação de responsabilidades

•
Gerenciamento de estado com hooks

•
Comunicação com API via Axios

•
Tratamento de erros e loading states

Observações

•
O backend armazena dados em memória, portanto os dados são perdidos ao reiniciar

•
Para usar em dispositivo físico, altere API_URL em api.js para o IP da máquina

•
Código sem comentários conforme solicitado

•
Lógica de programação otimizada e limpa

