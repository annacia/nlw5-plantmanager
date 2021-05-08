# Trilha de React Native @Rocketseat 🚀

Projeto PlantManager realizado na trilha de React Native no evento NLW#5 da Rocketseat.

****
## 🌵 PlantManager

1. [Funcionalidades](#funcionalidades)
2. [Tecnologias utilizadas](#tecnologias)
3. [Demonstração](#demo)
4. [Rodando o projeto localmente](#local)

****
<div id='funcionalidades'/>

## 📱 Funcionalidades

- Selecionar plantas a partir de ambientes;
- Receber notificações para lembrar de aguar as plantas selecionadas;
- Cadastrar localmente os dados de usuário.

****
<div id='tecnologias'/>

## 🔧 Tecnologias utilizadas

- [x] React Native
- [x] Expo
- [x] Expo Image Picker
- [x] TypeScript
- [x] React Navigation
- [x] React Lottie
- [x] React Native Gesture Handler
- [x] React Native Async Storage
- [x] Axios
- [x] Json Server

****
<div id='demo'/>

## 📺 Demonstração

- Cadastro de dados do usuário local:
<p align="center">
  <img src="./public/img/demo1.gif" width="350" height="auto" />
</p>
<br/><br/>

- Seleção de plantas a partir do ambiente:
<p align="center">
  <img src="./public/img/demo2.gif" width="352" height="auto" />
</p>

****
<div id='local'/>

## 💻 Rodando o projeto localmente

****

### ⚠ Pré-requisitos:

Node.js, Yarn (ou NPM) e Expo instalado

****

1. Clone o projeto na sua máquina

```sh
git clone https://github.com/annacia/nlw5-plantmanager
```

2. Acesse a pasta do projeto

```sh
cd nlw5-plantmanager
```

3. Instale todas as dependências do projeto

```sh
yarn install
```

4. Rode o projeto na sua máquina

```sh
json-server ./plantmanager/src/services/server.json --host 192.168.0.13 --port 3333 --delay 700
expo start plantmanager/
```