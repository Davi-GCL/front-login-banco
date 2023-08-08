import React from 'react';
import {useState, useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

export default function CardLogin({alerta, setAlerta}){
  const [formLogin, setFormLogin] = useState({
    senha:'',
    cpf: ''

  })
  const navigate = useNavigate();
  async function handleSubmit() {

    fetch('https://localhost:7044/Auth/LoginUsuario', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formLogin)
    })
    .then((response) => {
      if(!response.ok){
        throw new Error(response.status + ": " + response.statusText)
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      
        setAlerta([<div className='alert alert-info'>Autenticado com sucesso!</div>]);
        localStorage.setItem('loginId',data.id.toString());
        localStorage.setItem('token', data.token.toString());

        // window.location.href="/contas";

        navigate('/contas')
    })
    .catch(err => {
      console.log(err)
      setAlerta([<div className='alert alert-danger'>CPF ou senha incorretos!</div>]);
    });
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
              <input type="text" name="input-name" className="form-control" placeholder="Ex: 123.456.789-10" 
              value={formLogin['cpf']} 
              onChange={({ currentTarget }) => {
                        const formattedValue = currentTarget.value.replace(/\D/g, ''); // Remove caracteres não numéricos
                        const maskedValue = formattedValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
                        setFormLogin({ ...formLogin, ['cpf']: maskedValue });
                      }}
              required/>
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