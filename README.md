# TFC - Futebol Informativo

Bem-vindo ao README do projeto TFC - Futebol Informativo! Aqui você encontrará informações sobre o desenvolvimento deste emocionante projeto, desde a criação de uma API para um site informativo sobre partidas e classificações de futebol até a integração de todas as partes usando Docker Compose.

## Sobre o Projeto

Neste empolgante projeto do Trabalho Final de Curso (TFC), tive a incrível oportunidade de desenvolver uma API para um site informativo sobre partidas e classificações de futebol. Minhas responsabilidades também incluíram a integração das diferentes partes do projeto usando o Docker Compose, garantindo um funcionamento perfeito ao consumir dados de um banco de dados.

## Objetivos do Projeto

Meu principal objetivo foi construir um backend dockerizado utilizando o Sequelize para a modelagem de dados. Fui encarregado de seguir as regras de negócios fornecidas no projeto e assegurar que a API que desenvolvi fosse facilmente utilizada pelo frontend já disponibilizado.

## Funcionalidades-Chave

Durante o desenvolvimento, destaquei algumas funcionalidades-chave que foram implementadas:

1. **Adição de Partida Autenticada:** Implementei a funcionalidade de adicionar uma partida, requerendo autenticação para garantir que apenas usuários logados pudessem realizar alterações.

2. **Relacionamento Eficiente:** Criei um relacionamento eficiente entre as tabelas "times" e "partidas", permitindo atualizações rápidas das informações das partidas.

3. **Regras de Negócios Sólidas:** Implementei regras de negócios robustas no backend para garantir um preenchimento preciso da tabela exibida no frontend.

## Explorando o Projeto

### Banco de Dados

- Configurei um container Docker MySQL no arquivo `docker-compose.yml`, definindo-o como serviço "db".
- O MySQL forneceu os dados essenciais para o serviço backend.
- Durante os testes, acessei o banco de dados via Sequelize e pela porta 3306 no localhost.
- Utilizei um cliente MySQL, como o Workbench ou Beekeeper, para interagir com o banco de dados usando as credenciais definidas no `docker-compose.yml` para o serviço "db".

### Backend

- O backend que desenvolvi roda na porta 3001, visto que o frontend faz solicitações para essa porta por padrão.
- Iniciei a aplicação a partir do arquivo `app/backend/src/server.ts`.
- O Express está completamente funcional, ouvindo a porta especificada nas variáveis de ambiente.
- Todas as dependências adicionais, como joi, boom, express-async-errors e outras, estão listadas em `app/backend/packages.npm`.

### Frontend

- O frontend já estava pronto para uso, não sendo necessárias modificações.
- Todos os testes, a partir do requisito de login, foram realizados com o Puppeteer, simulando interações em `http://localhost:3000/`.
- O frontend se comunicou perfeitamente com o serviço backend via `http://localhost:3001`, utilizando os endpoints criados conforme os requisitos.

### Docker

- O Docker Compose uniu todos os serviços em contêineres (backend, frontend, db) e iniciou o projeto completo com `npm run compose:up`.
- Certifiquei-me de que meus Dockerfiles, nos diretórios raiz do frontend e backend, estivessem configurados adequadamente para a inicialização do projeto.

## Reflexões Finais

Estou extremamente satisfeito com o resultado deste projeto e com a oportunidade de ter desenvolvido a API para este site informativo sobre futebol. Este projeto me proporcionou um aprendizado valioso e experiência prática na criação de um backend dockerizado e sua integração eficiente com frontend e banco de dados. Mal posso esperar para aplicar essas habilidades em projetos futuros!

Se você quiser saber mais detalhes sobre a minha abordagem ou as lições que aprendi, sinta-se à vontade para entrar em contato. Obrigado por acompanhar minha jornada neste emocionante projeto! 🚀
