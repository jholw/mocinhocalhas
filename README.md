# Mocinho Calhas CG

Landing page estática desenvolvida com Astro + React para apresentar o negócio, destacar os serviços de calhas e facilitar o contato por WhatsApp.

## Visão geral

Esta aplicação foi criada para funcionar como uma landing page comercial simples, rápida e otimizada para produção. O projeto mantém o conteúdo principal em Astro e usa React apenas para componentes reutilizáveis e interações específicas.

## Ferramentas e linguagens usadas

- Astro 5 — estrutura principal da aplicação e páginas estáticas
- React 18 — componentes reutilizáveis e lógica de interface
- TypeScript — tipagem e organização do código
- Tailwind CSS — estilização rápida e responsiva
- Node.js / npm — ambiente de execução e instalação de dependências

## Estrutura do projeto

- src/pages/index.astro — página principal da landing page
- src/layouts/Layout.astro — layout base da aplicação
- src/components/ServiceCard.tsx — componente reutilizável de serviços
- src/styles/global.css — estilos globais e configuração visual
- astro.config.mjs — configuração do Astro, incluindo a publicação no GitHub Pages
- package.json — scripts e dependências do projeto

## Como executar localmente

1. Instale as dependências:
   npm install
2. Inicie o servidor de desenvolvimento:
   npm run dev
3. Abra o endereço exibido no terminal, normalmente http://localhost:4321

## Como gerar a versão de produção

1. Execute a build:
   npm run build
2. O resultado será gerado na pasta dist/

## Publicação no GitHub Pages

### 1. Preparar o repositório

- Crie o repositório no GitHub com o nome desejado, por exemplo: mocinhocalhas
- Se o projeto já estiver local, faça o primeiro commit:

  git add .
  git commit -m "chore: initial commit"

### 2. Configurar o remoto

- Adicione o repositório remoto:

  git branch -M main
  git remote add origin https://github.com/SEU_USUARIO/mocinhocalhas.git

- Envie o código para o GitHub:

  git push -u origin main

### 3. Ativar GitHub Pages

1. Acesse as configurações do repositório no GitHub.
2. Vá até a seção Pages.
3. Em Source, selecione GitHub Actions.
4. O workflow já está preparado em .github/workflows/deploy.yml para publicar automaticamente toda vez que houver push na branch main.

### 4. Ajuste do domínio/base

O projeto já está preparado com a base do caminho da página:

- site: https://jhonnymoraes.github.io
- base: /mocinhocalhas/

Se o seu nome de usuário no GitHub for diferente, atualize esses valores em astro.config.mjs antes de publicar.

## Observações para estudo e manutenção futura

- A landing page foi estruturada como um projeto estático para facilitar hospedagem barata e rápida.
- A configuração atual usa Astro para gerar HTML otimizado e Tailwind para manter a aparência consistente.
- Para futuras alterações, o ideal é manter o conteúdo textual e os blocos de serviço em componentes reutilizáveis.
- O deploy via GitHub Actions evita a necessidade de montar manualmente uma branch gh-pages.
- Caso queira trocar o nome do projeto, o caminho base em astro.config.mjs também deve ser ajustado.

## Dicas de manutenção

- Atualize textos e informações de contato no arquivo src/pages/index.astro.
- Adicione novos serviços ou cards em src/components/ServiceCard.tsx.
- Sempre valide o build local antes de publicar: npm run build

