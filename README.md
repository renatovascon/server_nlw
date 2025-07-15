# server_nlw

Servidor Fastify para gerenciamento de salas e perguntas, utilizando PostgreSQL com Drizzle ORM.

## Tecnologias e Bibliotecas Principais

- **Node.js** (TypeScript)
- **Fastify**: Framework web rápido e leve
- **Zod**: Validação de dados e tipagem
- **Drizzle ORM**: ORM para PostgreSQL
- **PostgreSQL** (com extensão pgvector)
- **@google/genai**: Integração com Google Generative AI (se aplicável)
- **Docker**: Para orquestração do banco de dados

## Padrões de Projeto

- **Validação e tipagem**: Utiliza Zod e `fastify-type-provider-zod` para validação de rotas e schemas.
- **Separação de responsabilidades**: Rotas, conexão com banco e validações organizadas em arquivos distintos.
- **Variáveis de ambiente**: Configuração via `.env`.

## Setup e Configuração

### 1. Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

### 2. Instalação

```bash
npm install
```

### 3. Configuração do Banco de Dados

Suba o banco de dados PostgreSQL (com pgvector):

```bash
docker-compose up -d
```

### 4. Variáveis de Ambiente

Copie o arquivo de exemplo e ajuste se necessário:

```bash
cp .env.exemple .env
```

- `PORT`: Porta do servidor HTTP
- `DATABASE_URL`: URL de conexão com o banco

### 5. Migração e Seed do Banco

```bash
npm run db:migrate
npm run db:seed
```

### 6. Rodando o Servidor

Em modo desenvolvimento:

```bash
npm run dev
```

Em produção:

```bash
npm start
```
