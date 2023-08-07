import React, { useState, useEffect, createContext, useContext } from 'react'
import CardConta from '../comps/CardConta';
import { GlobalContext } from '../App';


export const ContaContext = createContext(); 

function TelaRestrita() {
  const id = localStorage.getItem('loginId');
  const token = localStorage.getItem('token');

  const [loginInfo,setLoginInfo] = useContext(GlobalContext);
  const [censor, setCensor] = useState(true); //Estado que comanda se os valores serão exibidos ou ocultos
  const [contas,setContas] = useState([{
    codConta: 0,
    agencia: '',
    saldo: 0,
    tipo: 0,
    idUsuario: 0
  }])
  

  async function handleGet(){
    let res = await fetch(`https://localhost:7044/Conta/`, {
      method: 'GET',
      headers: {'Authorization': `Bearer ${token}`}
    });
    let data = await res.json()
    
    console.log(data);
    
    let dataArr = [];

    data.forEach(e => {
      if(e.idUsuario == id){
        dataArr.push({['codConta']:e.codConta, ['agencia']:e.agencia,['saldo']:e.saldo , ['tipo']:e.tipo , ['idUsuario']:e.idUsuario});
        setLoginInfo(e.idUsuarioNavigation.nome);
      }  
    });
    
    setContas(dataArr);
  }

  //Algoritmo para que faz a função de buscar dados na api só seja executada uma vez:
  useEffect(() => {
    handleGet();
  }, []); // A lista de dependências vazia indica que o efeito será executado apenas uma vez, após a montagem do componente.

  if(id){
    return (
      <ContaContext.Provider value={{censor}}>
        <div className='header'>
          <h4 className='mb-2'>Olá, {loginInfo}</h4>
          <p>Selecione a conta que deseja movimentar hoje:</p>
          <span className='d-flex justify-content-end'><button className='btn btn-primary mb-4 w-10' 
          onClick={(e)=>{setCensor(!censor);}}>Exibir saldos</button></span>
        </div>

        {contas.map((conta)=>{
          if(conta.codConta !== 0){
            return (<CardConta conta={conta}/>)
          }else{ return null }
        })}
        
      </ContaContext.Provider>
    )
  }else{
    return (<div>
      <h2>Acesso não permitido!</h2>
      <a href='/login'>Faça login em sua conta</a>
      </div>)
  }
}

export default TelaRestrita