# Projeto Banco Monolítico em NestJS

Este projeto é um exemplo de uma aplicação monolítica de banco implementada utilizando NestJS.

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte maneira:

```
banco
├── src
│   ├── cliente
│   │   ├── cliente.controller.ts
│   │   ├── cliente.module.ts
│   │   ├── cliente.service.ts
│   │   ├── schemas
│   │   │   └── cliente.schema.ts
│   ├── conta
│   │   ├── conta.controller.ts
│   │   ├── conta.module.ts
│   │   ├── conta.service.ts
│   │   ├── schemas
│   │   │   └── conta.schema.ts
│   ├── gerente
│   │   ├── gerente.controller.ts
│   │   ├── gerente.module.ts
│   │   ├── gerente.service.ts
│   │   ├── schemas
│   │   │   └── gerente.schema.ts
│   ├── app.module.ts
│   ├── main.ts
├── .gitignore
├── nest-cli.json
├── package.json
├── tsconfig.json
├── tsconfig.build.json
```

- **cliente**, **conta**, **gerente**: Módulos separados para gerenciar clientes, contas e gerentes.
- **schemas**: Esquemas de dados relacionados para cada entidade.
- **app.module.ts**: Módulo principal que importa todos os outros módulos.
- **main.ts**: Ponto de entrada da aplicação.

## Instalação

Certifique-se de ter o Node.js e o npm instalados. Clone o repositório e execute:

```bash
npm install
```

## Configuração

Configure as variáveis de ambiente em um arquivo `.env`.

## Executando a Aplicação

Para iniciar a aplicação localmente em modo de desenvolvimento, execute:

```bash
npm start
```

## Rotas

A seguir estão as principais rotas disponíveis na aplicação:

- **Clientes**: `/clientes`
  - `GET /`: Retorna todos os clientes.
  - `POST /`: Cria um novo cliente.
  - `GET /:id`: Retorna um cliente específico.
  - `PUT /:id`: Atualiza um cliente.
  - `DELETE /:id`: Remove um cliente.

- **Contas**: `/contas`
  - `GET /`: Retorna todas as contas.
  - `POST /`: Cria uma nova conta.
  - `GET /:id`: Retorna uma conta específica.
  - `PUT /:id`: Atualiza uma conta.
  - `DELETE /:id`: Remove uma conta.

- **Gerentes**: `/gerentes`
  - `GET /`: Retorna todos os gerentes.
  - `POST /`: Cria um novo gerente.
  - `GET /:id`: Retorna um gerente específico.
  - `PUT /:id`: Atualiza um gerente.
  - `DELETE /:id`: Remove um gerente.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para este projeto. Crie uma issue para discutir novas funcionalidades ou correções de bugs.

## Licença

Este projeto está licenciado sob a [MIT License](/LICENSE).

---

