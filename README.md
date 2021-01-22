# Lottery API

<p align="center">
	<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">  
</p>

<h4 align="center"> 
	🚧  Lottery API - Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-instalação">Instalação</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuindo">Contribuindo</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre

Esta é uma RESTful API que servirá e salvará dados para as aplicações web e mobile do The Greatest Lottery App.


Projeto desenvolvido durante o **Lab Luby** na [Luby Software](https://www.luby.com.br/) durante meu período de treinamento.
Foi utilizado o framework [AdonisJS](https://adonisjs.com/), já que o mesmo oferece bastante ganho de produtividade por ter uma CLI interativa, bootstrap de vários arquivos de configuração e uma boa documentação bem organizada e com bastante exemplos.


## ⚙️ Funcionalidades

A API tem 3 principais entidades:
- Usuário:
- [x] Cadastro de usuário
- [x] Recuperção de senha por email
- [x] Login através de [JWT](https://jwt.io/) token

- Apostas:
- [x] Adicionar/Remover apostas do carrinho
- [x] Salvar múltiplas apostas no banco de dados
- [x] Filtrar suas apostas feitas

- Tipos
- [x] Seed de 3 tipos de apostas (default)
- [x] Carregar os tipos de aposta

```bash
# Para ver os endpoints da aplicação, execute:
$ adonis route:list
```

## 🚀 Instalação

💡Tanto o Frontend quanto o Mobile precisam que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) or [nvm](https://nodejs.org/en/download/package-manager/#nvm) this is a package manager to install/remove/switch differents versions of Node.js.
Instalando o banco de dados:
```bash
$ sudo apt update
$ sudo apt install postgresql
# Para alterar a senha:
$ sudo -u postgres psql
$ \password postgres
# A senha escolhida deve ser colocada no arquivo .env na property DB_password.
# Caso escolha a senha postgres nao precisar alterar o arquivo .env
# Para criar a database:
$ create database lottery;
\q para sair
```

#### 🎲 Rodando o Backend (servidor)

```bash
# Instale a CLI do adonis:
$ npm i -g @adonisjs/cli
# Clone esse repositorio
$ git clone https://github.com/tgwow/lottery-api.git
$ cd lottery-api
$ npm install 
# Para criar nossas tabelas no banco de dados:
$ adonis migration:run
# Para executar a seed e gerar valores default para a tabela type:
$ adonis seed
# Gere uma key para seu APP:
$ adonis key:generate
# Execute a aplicação
$ adonis serve --dev

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

> Obs: A funcionalidade de envio de email precisa de algumas configurações extras, caso queira fazer funcionar, entre em contato que irei providenciar asim que possível.


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:


#### [](https://github.com/tgwow/lottery-api)**Server**  [NodeJS](https://nodejs.org/en/)

-   **[Adonis](https://adonisjs.com/)**
-   **[KnexJS](http://knexjs.org/)**
-   **[Postgresql](https://www.postgresql.org/)**
-   **[Mailtrap](http://mailtrap.io/)**


## 💪 Contribuindo

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)


## 🦸 Autor

<a href="https://www.linkedin.com/in/thiago-oliveira-86758738/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/28604537?s=460&u=3fc99856be98a7aa7823e0af58dfa67d2e8083ac&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Thiago Oliveira</b></sub></a> <a href="https://www.linkedin.com/in/thiago-oliveira-86758738/" title="Rocket">🚀</a>
 <br />

[![Twitter Badge](https://img.shields.io/badge/-@theveloper_tg-1ca0f1?style=flat-square&labelColor=1ca0f1&logo=twitter&logoColor=white&link=https://twitter.com/theveloper_tg)](https://twitter.com/theveloper_tg) [![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-oliveira-86758738/)](https://www.linkedin.com/in/thiago-oliveira-86758738/) 


## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Thiago Oliveira 👋🏽 [Entre em contato!](https://www.linkedin.com/in/thiago-oliveira-86758738/)
