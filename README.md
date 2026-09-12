# Guará.IT

Site institucional da Guará.IT, desenvolvido para apresentar a empresa, seus serviços, proposta de valor e presença digital com uma linguagem moderna, técnica e profissional.

## Visão geral

Este projeto foi pensado como uma vitrine digital institucional para fortalecer a presença online da marca e comunicar de forma clara sua proposta de valor. A interface foi estruturada para transmitir confiança, tecnologia, criatividade e boa percepção de marca, mantendo visual minimalista e alinhado ao perfil de uma empresa que atua no mercado de tecnologia e soluções visuais.

A solução combina apresentação institucional, navegação intuitiva, conteúdo estratégico e organização técnica para facilitar manutenção e evolução futura.

## Stack tecnológica

- Node.js
- Express
- TypeScript
- HTML5
- CSS3
- JavaScript
- Docker

## Estrutura do projeto

```bash
.
├── public/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── documentacao.html
│   └── ...
├── src/
│   └── server.ts
├── imagens/
├── package.json
├── tsconfig.json
├── Dockerfile
├── .dockerignore
├── README.md
├── dist/
└── node_modules/
```

## Como executar localmente

### 1) Instalar dependências

```bash
npm install
```

### 2) Rodar em modo de desenvolvimento

```bash
npm run dev
```

### 3) Compilar para produção

```bash
npm run build
```

### 4) Iniciar a aplicação compilada

```bash
npm start
```

A aplicação estará disponível em:

```bash
http://localhost:3000
```

Para alterar a porta padrão, utilize a variável de ambiente `PORT`:

```bash
PORT=3010 npm start
```

## Rotas principais

- `/` — página inicial institucional
- `/documentacao` — documentação do projeto
- `/documentacao.html` — acesso direto à documentação
- `/health` — verificação de saúde do serviço

## Deploy

A aplicação está preparada para ser publicada em plataformas como Render, serviços de hospedagem compatíveis com Node.js ou ambientes de containerização. O arquivo `Dockerfile` foi adicionado para facilitar a implantação em containers e facilitar a evolução do projeto em infraestrutura profissional.

## Principais melhorias implementadas

- organização mais limpa da estrutura do projeto
- separação entre front-end público e lógica do servidor
- refinamento visual para um look mais premium e menos genérico
- remoção de elementos visuais que comprometiam a identidade institucional
- ajustes de texto, hierarquia visual e foco da mensagem principal
- manutenção da aplicação em ambiente Node com maior robustez técnica
- documentação do processo e estado final do projeto

## Contato e canais oficiais

Para propostas, projetos, parcerias e atendimento institucional, a comunicação pode ser conduzida pelos canais oficiais da empresa.

> Atualize os dados abaixo antes da publicação final do projeto.

- E-mail: [seu-email@guara.it]
- Telefone: [seu telefone]
- WhatsApp: [seu WhatsApp]
- LinkedIn: [seu perfil]
- Site institucional: [url-do-site]

### Chamada para ação

Este projeto foi estruturado para atuar como uma vitrine digital de alto padrão, capaz de apresentar a marca com clareza, sofisticação e foco em valor comercial, posicionamento estratégico e presença profissional no mercado.

## Licença

Este projeto foi desenvolvido para uso institucional e pode ser adaptado conforme as necessidades da empresa, do cliente ou da operação do projeto.
