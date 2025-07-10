# NLW Agents

Projeto desenvolvido durante o evento **NLW (Next Level Week)** da **Rocketseat**.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React 19** - Biblioteca JavaScript para construção de interfaces
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática
- **Vite** - Ferramenta de build e desenvolvimento
- **React Router DOM** - Roteamento para aplicações React
- **TanStack Query** - Gerenciamento de estado assíncrono e cache

### Estilização
- **Tailwind CSS 4** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis e sem estilo
- **Lucide React** - Ícones para React
- **Shadcn/ui** - Sistema de componentes baseado em Radix UI + Tailwind

### Ferramentas de Desenvolvimento
- **Biome** - Linter e formatador de código
- **Ultracite** - Configuração de padrões de código

## 🏗️ Padrões de Projeto

- **Component-Based Architecture** - Estrutura baseada em componentes reutilizáveis
- **Custom Hooks** - Hooks personalizados para lógica reutilizável
- **Absolute Imports** - Importações absolutas com alias `@/`
- **Type Safety** - Tipagem rigorosa com TypeScript
- **Atomic Design** - Organização de componentes UI

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── ui/          # Componentes UI base (shadcn/ui)
├── lib/
│   └── utils.ts     # Funções utilitárias
├── pages/           # Páginas da aplicação
│   ├── create-room.tsx
│   └── room.tsx
├── app.tsx          # Componente principal
└── main.tsx         # Ponto de entrada
```

## ⚙️ Setup e Configuração

### Pré-requisitos
- Node.js 18+ 
- npm, yarn ou pnpm

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd web
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Acesse a aplicação em `http://localhost:5173`

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção

## 🔧 Configurações Importantes

- **Tailwind CSS**: Configurado com variáveis CSS e tema personalizado
- **Path Mapping**: Alias `@/` configurado para `./src`
- **Biome**: Formatação e linting de código
- **Shadcn/ui**: Sistema de componentes configurado com tema "new-york"

## 📝 Licença

Este projeto foi desenvolvido durante o evento NLW da Rocketseat.
