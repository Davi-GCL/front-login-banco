import React, {useState, useContext} from 'react';
import { ContaContext } from '../routes/TelaRestrita';
import '../App.css';

function CardConta({conta}) {
  const {censor} = useContext(ContaContext);

  return (
    <div className='card p-4 mb-3 card-account' key={conta.codConta} onClick={()=>window.location.href = `/contas/${conta.codConta}`}>
        <span className='d-flex flex-row justify-content-between'><h5>Conta N°{conta['codConta']}</h5><p>Agência: {conta['agencia']}</p></span>
        <hr></hr>
        <ul>
            <li>Saldo: <span className={censor? 'text-censor' : 'text'}>R${conta['saldo']}</span></li>
            <li>Tipo: {conta['tipo'] == 0? 'Poupança':'Corrente'}</li>
            
        </ul>
    </div>
  )
}

export default CardConta