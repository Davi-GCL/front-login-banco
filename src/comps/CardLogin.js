import React from 'react';
import {useState, useEffect} from 'react';

export default function CardLogin({alerta, setAlerta}){

  const [form, setForm] = useState({
    codConta: '',
    setSenha: '',
    idUsuario: '',
    agencia: '0001'
  });

  const [formUser, setFormUser] = useState({
    nome:'',
    cpf: '',
    email:'',
    telefone:''
  })

  async function handleGet(){

    fetch(`https://localhost:7044/Usuario`,{
      method:'GET',
      headers:{'content-type':'application/json'},
    }).then(res=>res.json()).then(data=>{console.log(data)})
  }

    return(
        <div className='card col-md-5 col-lg-3 p-4 mt-5'>
          <div className="card-title">
            <h4 className='text-center'>Acesse sua conta</h4>
          </div>
          <div className='card-body'>
            <div className="row mb-3">
              <label htmlFor="input-cpf" className="form-label h6">CPF:</label>
              <input type="text" name='input-cpf' className="form-control" onChange={({currentTarget}) => setFormUser({
                ...formUser, ['cpf']: currentTarget.value
              })}/>
            </div>
            {/* <div className="row mb-3">
              <label htmlFor="input-email" className="form-label h6">Email:</label>
              <input type="text" name='input-email' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['email']: currentTarget.value
              })}/>
            </div> */}

            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6">Senha:</label>
              <input type="password" name='input-senha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['senha']: currentTarget.value
              })}/>
            </div>
            {/* <div className="row mb-3">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div> */}
            <div className="button-area row mt-4">
              <button type="submit" className='btn btn-success w-100' onClick={handleGet}>Entrar</button>
            </div>
          </div>
        </div>
    )
}