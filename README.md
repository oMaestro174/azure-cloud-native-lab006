# Documentação Geral dos Projetos e Testes

Este documento integra a documentação dos projetos desenvolvidos e os testes realizados nos workspaces gerados pelo copilot, detalhando as funcionalidades implementadas e os passos para execução.

---

## 1. API Via CEP

### Descrição
API construída com Node.js que permite buscar endereços a partir de um CEP utilizando a API do Via CEP.  
**Endpoint:** `GET /cep/:cep`  
**Resposta Exemplo:**
```json
{
  "logradouro": "Praça da Sé",
  "bairro": "Sé",
  "localidade": "São Paulo",
  "uf": "SP"
}
```

### Estrutura do Projeto
```
api-via-cep
├── src
│   ├── index.js         # Ponto de entrada da aplicação
│   └── routes
│       └── cep.js       # Rotas e lógica de requisição no Via CEP
├── package.json         # Configuração do npm
└── README.md            # Documentação da API
```

### Instalação e Uso
1. **Instalação das dependências**
   ```bash
   npm install
   ```
2. **Execução da aplicação**
   ```bash
   npm start
   ```
3. **Exemplo de requisição**
   ```
   GET http://localhost:3000/cep/01001-000
   ```
   Caso a porta 3000 esteja em uso, é possível alterá-la no arquivo `src/index.js`.

### Tratamento de Erros
- Se o CEP não for encontrado, a resposta é um status 404 com a mensagem: "CEP não encontrado".
- Em caso de falha na requisição à API do Via CEP, retorna status 500 com a mensagem "Erro ao buscar o CEP".

---

## 2. Roulette Game

### Descrição
Projeto interativo que simula um jogo de roleta usando HTML, CSS e JavaScript.  
Contém simulação física para a roleta e movimento da bolinha, permitindo iniciar e parar o jogo via interação do usuário.

### Estrutura do Projeto
```
roulette-game
├── src
│   ├── index.html        # Arquivo HTML principal
│   ├── css
│   │   └── styles.css    # Estilos para o jogo
│   └── js
│       ├── roulette.js   # Classe e lógica da roleta
│       ├── ball.js       # Classe e lógica da bolinha
│       ├── physics.js    # Funções de simulação física
│       └── main.js       # Inicialização do jogo e eventos
├── tests
│   └── physics.test.js   # Testes unitários para funções de física (Jest)
├── package.json          # Configuração do npm (scripts: start e test)
└── README.md             # Documentação do projeto
```

### Instalação e Uso
1. **Instalação das dependências**
   ```bash
   npm install
   ```
2. **Início do jogo**
   - Utilize o comando abaixo para iniciar o projeto com o live-server:
     ```bash
     npm start
     ```
   - Em seguida, abra o arquivo `src/index.html` no navegador.

### Testes Unitários
- Os testes foram implementados com o framework Jest e encontram-se em `tests/physics.test.js`.
- Funções testadas:
  - `calculateAcceleration`
  - `calculateDeceleration`
  - `calculateBounce`
- Para rodar os testes:
   ```bash
   npm test
   ```

---

## 📸 Telas da aplicação e procedimentos

### Codificação do Jogo Roleta
![Tela da aplicação](/assets/01-codigo-roletapng.png)

### Execução do Jogo Roleta
![Tela da aplicação](/assets/1.1-roleta-web.png)


### API Via CEP
![Tela da aplicação](/assets/02-api-via-cep-codigo.png)

### API Via CEP JSON
![Tela da aplicação](/assets/03-api-via-cep-json.png)

### Visão Geral
![Tela da aplicação](/assets/04-project-overview.png)


---