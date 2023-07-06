import React from 'react';
import {useState, useEffect} from 'react';

export default function CardLogin({alerta, setAlerta}){


  const [formLogin, setFormLogin] = useState({
    senha:'',
    cpf: ''

  })

  async function handleSubmit() {

    fetch('https://localhost:7044/Usuario/Auth', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formLogin)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      if(data == true){
        setAlerta([<div className='alert alert-info'>Autenticado com sucesso!</div>]);
      }else{
        setAlerta([<div className='alert alert-danger'>CPF ou senha incorretos!</div>]);
      }
    })
    .catch(err => console.log(err));
  }

    return(
        <div className='card col-md-5 col-lg-3 p-4 mt-5'>
          <div className="card-title">
            <h4 className='text-center'>Acesse sua conta</h4>
          </div>
          <div className='card-body'>
            <div className="row mb-3">
              <label htmlFor="input-cpf" className="form-label h6">CPF:</label>
              <input type="text" name='input-cpf' className="form-control" onChange={({currentTarget}) => setFormLogin({
                ...formLogin, ['cpf']: currentTarget.value
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
              <input type="password" name='input-senha' className="form-control" onChange={({currentTarget}) => setFormLogin({
                ...formLogin, ['senha']: currentTarget.value
              })}/>
            </div>
            {/* <div className="row mb-3">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div> */}
            <div className="button-area row mt-4">
              <button type="submit" className='btn btn-success w-100' onClick={handleSubmit}>Entrar</button>
            </div>
          </div>
        </div>
    )
}