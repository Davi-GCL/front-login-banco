//Requisitos Funcionais:
// X-Avisar ao usuario os campos não preenchidos e que são obrigatorios; 
// X-Verificar se o cpf ou email inseridos já estão registrados no banco de dados;
// X-O campo de cadastrar senha para a conta possui requisitos que devem ser cumpridos: quantidade de caracteres;
// X-Opcao de mudar a senha na tela de login;
// -Seção exibindo o extrato das movimentações
// -Mecanismo de pagar conta, inserindo o codigo do boleto;
// -Exibir um relatorio com informações, após uma transação de saque ou transferencia;
/* -Criar o sistema de cartao da conta, onde em uma conta poupança o cartão será do tipo débito, e em conta corrente, será do tipo crédito:
    ~ Ao solicitar um cartão de crédito, o sistema irá verificar as movimentações das contas daquele usuario, e calculará um limite de crédito com base na soma das ultimas movimentações
    ~ Eu criarei uma tabela de cartões, no banco de dados, contendo informações de todos os cartões (numero, validade, ccv, id da conta) 
*/

//Requisitos Não-Funcionais:
// -(Requisito Não-Funcional) Exibir "Carregando..." após o usuario enviar o login;
// -(Requisito N-F) Ao apertar Enter no campo de senha, o formulario de login será enviado, assim como quando se pressiona o botao de Login;

import React from "react";
import {useEffect, useState} from "react";
import './App.css';

import { Outlet } from "react-router-dom";
import NavBar from "./comps/NavBar";


function App() {

  return (
    <React.Fragment>
    <NavBar/>
    <div className="container w-100">
      <div className='row mt-5 justify-content-center'>
        <Outlet />
      </div>
    </div>
    </React.Fragment>
  );
}

export default App;
