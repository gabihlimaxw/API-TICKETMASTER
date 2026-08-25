Fetch API - Ticketmaster
Projeto desenvolvido para a Sprint com o objetivo de consumir a API pública da Ticketmaster utilizando JavaScript e Fetch API.
Objetivo
Permitir que o usuário digite o nome de uma atração e consultar eventos relacionados a ela por meio da Discovery API da Ticketmaster.
Tecnologias
HTML5
CSS3
JavaScript
Fetch API
Ticketmaster Discovery API v2
Estrutura
text
ticketmaster-sprint/
├── index.html
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js

Como executar
Abra a pasta no VS Code.
Abra `js/script.js`.
Substitua `SUA_API_KEY` pela sua Consumer Key/API Key da Ticketmaster.
Abra o `index.html` com o Live Server.
Digite uma atração, como `Ce ta doido`.
Clique em `Consultar Eventos`.
API
Endpoint utilizado:
```text
https://app.ticketmaster.com/discovery/v2/events.json
```
Parâmetros:
`keyword`: atração digitada pelo usuário.
`apikey`: Consumer Key/API Key da Ticketmaster.
Programação assíncrona
O projeto utiliza `async`, `await` e `try/catch` para realizar a requisição e tratar possíveis erros.
Exibição dinâmica
Os eventos retornados são percorridos com `forEach()` e inseridos no `#resultado` usando `innerHTML`.
A aplicação exibe o nome e a data dos eventos encontrados.
Segurança
Não publique o Consumer Secret. Antes de colocar o projeto em um repositório público, lembre-se de que uma API Key colocada diretamente no JavaScript ficará visível no navegador.
Entregáveis
Repositório GitHub: inserir o link após criar o repositório.
Deploy Vercel: inserir o link após realizar o deploy.
Código organizado e comentado.
Prints ou vídeo demonstrando o funcionamento.
Documentação oficial
https://developer.ticketmaster.com/
https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

Feito por 
GABRIELLE DE LIMA BARBOSA
ALICE AMARAL OLIVEIRA