# Tutorial App Login Layout

Este projeto é um exemplo de aplicação frontend com foco em autenticação de usuários e layout de login moderno. O objetivo é fornecer uma base sólida para aplicações que necessitam de fluxo de login, formulários protegidos e uma experiência de usuário consistente.

---

## Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar](#como-executar)
- [Estrutura de Diretórios](#estrutura-de-diretórios)
- [Customização do Layout](#customização-do-layout)
- [Boas Práticas](#boas-práticas)
- [Licença](#licença)

---

## Sobre o Projeto

O **Tutorial App Login Layout** foi desenvolvido para demonstrar as melhores práticas na implementação de telas de autenticação (login, cadastro e recuperação de senha) utilizando **React**. Conta com componentes reutilizáveis, validação de formulários e integração simples com backends para autenticação real (JWT, cookies, etc).

---

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construção da interface.
- **React Router**: Gerenciamento de rotas e páginas protegidas.
- **Styled Components** ou **CSS Modules**: Estilização flexível e modular.
- **Formik** + **Yup**: Gerenciamento e validação de formulários.
- **Axios / Fetch**: Comunicação com APIs de autenticação.
- **TypeScript** (opcional): Tipagem estática para maior robustez.

---

## Como Executar

### 1. Clone o repositório

```bash
git clone https://github.com/fabiocberg/tutorial-app-login-layout.git
cd tutorial-app-login-layout
```

### 2. Instale as dependências

```bash
yarn install
# ou
npm install
```

### 3. Defina as variáveis de ambiente (opcional)

Crie um arquivo `.env` para configurar a URL da API de autenticação:

```
REACT_APP_API_URL=https://sua-api.com
```

### 4. Execute o projeto

```bash
yarn start
# ou
npm start
```

Acesse em `http://localhost:3000`.

---

## Estrutura de Diretórios

```
/
├── src/
│   ├── components/          # Componentes de UI (inputs, botões, etc)
│   ├── pages/               # Páginas de login, cadastro, recuperação
│   ├── routes/              # Rotas e proteção de rotas
│   ├── services/            # Serviços de autenticação (ex: auth.js)
│   ├── styles/              # Temas e variáveis globais
│   └── App.js / App.tsx     # Componente principal
├── public/
│   └── index.html
├── .env
├── package.json
└── README.md
```

---

## Customização do Layout

- Alterar cores, logos e fontes em `src/styles/`.
- Adicionar campos extras nos formulários em `src/pages/Login.tsx` ou `src/pages/Register.tsx`.
- Configurar rotas protegidas em `src/routes/PrivateRoute.tsx`.

---

## Boas Práticas

- Sempre valide os dados do formulário no frontend e backend.
- Armazene tokens de autenticação de forma segura (preferencialmente via cookies HttpOnly).
- Utilize Context API, Redux ou outras soluções para gerenciar o estado de autenticação global.
- Implemente feedbacks visuais para erros e carregamentos.

---

## Licença

MIT

---

> Dúvidas ou sugestões? Abra uma issue ou envie um pull request!