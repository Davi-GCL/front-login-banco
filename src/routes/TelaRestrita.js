import React, { useState } from 'react'



var controle = 0;
function TelaRestrita() {
  const id = localStorage.getItem('loginId');
  const [contas,setConta] = useState([])
    console.log(fetchContas(id));
    // setConta(fetchContas(id));
    // console.log(contas)
  




  return (
  <div>
    <p onClick={()=>fetchContas(id)}>OI</p>
    {contas.map(conta=>(
  <div className='alert alert-light'>
    <h5>Conta N°{conta['codConta']}</h5>
    <hr></hr>
    <ul>
      <li>Saldo: R${conta['saldo']}</li>
      <li>Tipo: {conta['tipo'] == 0? 'Poupança':'Corrente'}</li>
    </ul>
  </div>))}
  </div>
  )
}

async function fetchContas(id){
  var c = []
  await fetch(`https://localhost:7044/Conta/`, {
    method: 'GET',
  })
  .then((response) => response.json())
  .then((data) => {
    // console.log(data);
    data.forEach(e => {
      if(e.idUsuario == id){
        c.push(e);
      }
    });
    return c;
  })
  .catch(err => console.log(err));
}

export default TelaRestrita