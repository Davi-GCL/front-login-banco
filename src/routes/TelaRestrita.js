import React, { useState } from 'react'

function TelaRestrita() {
  const id = localStorage.getItem('loginId');
  const [conta,setConta] = useState({
    codConta: '',
    saldo: 0,
    tipo: 0
  })
  

  fetch(`https://localhost:7044/Conta/`, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach(e => {
      if(e.idUsuario == id){
        setConta({['codConta']:e.codConta, ['saldo']:e.saldo});
      }
    });
  })
  .catch(err => console.log(err));

  

  return (
    <div className='alert alert-light'>
        <h5>Conta N°{conta['codConta']}</h5>
        <hr></hr>
      <ul>
        <li>Saldo: R${conta['saldo']}</li>
        <li>Tipo: {conta['tipo'] == 0? 'Poupança':'Corrente'}</li>
      </ul>
    </div>
  )
}

export default TelaRestrita