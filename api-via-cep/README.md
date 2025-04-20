# API Via CEP

Este projeto é uma API simples em Node.js que permite buscar endereços a partir de um CEP utilizando a API do Via CEP.

## Estrutura do Projeto

```
api-via-cep
├── src
│   ├── index.js         # Ponto de entrada da aplicação
│   └── routes
│       └── cep.js      # Rotas relacionadas ao CEP
├── package.json         # Configuração do npm
└── README.md            # Documentação do projeto
```

## Instalação

Para instalar as dependências do projeto, execute o seguinte comando:

```
npm install
```

## Uso

Para iniciar a aplicação, utilize o comando:

```
npm start
```

A API estará disponível em `http://localhost:3000`.

### Endpoint

- `GET /cep/:cep`

  Este endpoint recebe um CEP como parâmetro e retorna o endereço correspondente no formato JSON.

  **Exemplo de uso:**

  ```
  GET http://localhost:3000/cep/01001-000
  ```

  **Resposta:**

  ```json
  {
    "logradouro": "Praça da Sé",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP"
  }
  ```

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork do repositório e envie um pull request.