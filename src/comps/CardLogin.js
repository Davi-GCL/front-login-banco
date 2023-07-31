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

      if(data.valid == true){
        setAlerta([<div className='alert alert-info'>Autenticado com sucesso!</div>]);
        localStorage.setItem('loginId',data.id.toString());

        window.location.href="/contas";
      }else{
        setAlerta([<div className='alert alert-danger'>CPF ou senha incorretos!</div>]);
      }
    })
    .catch(err => console.log(err));
  }

// --------------------------------------- Código JSX ----------------------------------------------------------
    return(
        <div className='card col-md-5 col-lg-3 p-4 pb-2 mt-5'>
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
            

            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6">Senha:</label>
              <input type="password" name='input-senha' className="form-control" onChange={({currentTarget}) => setFormLogin({
                ...formLogin, ['senha']: currentTarget.value
              })}/>
            </div>
            
            <div className="button-area row mt-4">
              <button type="submit" className='btn btn-primary w-100' onClick={handleSubmit}>Entrar</button>
              <a href='/recuperacao' className='px-0 pt-2' style={{fontSize:'12px'}}>Esqueceu a senha?</a>
            </div>
          </div>
        </div>
    )
}