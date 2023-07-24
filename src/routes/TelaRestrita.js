import React, { useState, useEffect } from 'react'

function TelaRestrita() {
  const id = localStorage.getItem('loginId');
  const [contas,setContas] = useState([{
    codConta: 0,
    saldo: 0,
    tipo: 0
  }])
  

  async function handleGet(){
    let res = await fetch(`https://localhost:7044/Conta/`, {
      method: 'GET',
    })

    let data = await res.json()
    console.log(data);
    data.forEach(e => {
      if(e.idUsuario == id){
        setContas([...contas,{['codConta']:e.codConta, ['saldo']:e.saldo , ['tipo']:e.tipo}]);
      }  
    })
  }

  //Algoritmo para que faz a função de buscar dados na api só seja executada uma vez:
  useEffect(() => {
    handleGet();
  }, []); // A lista de dependências vazia indica que o efeito será executado apenas uma vez, após a montagem do componente.

  return (
    <React.Fragment>
      {contas.map((conta)=>{
        if(conta.codConta !== 0){
          return (<div className='alert alert-light' key={conta.codConta}>
            <h5>Conta N°{conta['codConta']}</h5>
            <hr></hr>
          <ul>
            <li className='password'>Saldo: R${conta['saldo']}</li>
            <li>Tipo: {conta['tipo'] == 0? 'Poupança':'Corrente'}</li>
          </ul>
        </div>)
        }else{ return null }
      })
      }
    </React.Fragment>
  )
}

export default TelaRestrita