import React from 'react';
import {useState, useEffect} from 'react';

export default function CardCadastroUs({toNextForm, formUser, setFormUser}){


    return(
        <div className='card p-4 mt-5 col-md-6'>
          <div className="card-title">
            <h4 className='text-center'>Cadastre-se gratuitamente!</h4>
          </div>

          <div className='card-body'>
            <div className="row mb-3">
              <div className='col p-0 pe-4'>
                <label htmlFor="input-name" className="form-label h6">Nome:</label>
                <input type="text" name='input-name' className="form-control" onChange={({currentTarget}) => setFormUser({
                  ...formUser, ['nome']: currentTarget.value
                })}/>
              </div>

              <div className='col p-0'>
                <label htmlFor="input-cpf" className="form-label h6">CPF:</label>
                <input type="text" name='input-name' className="form-control" onChange={({currentTarget}) => setFormUser({
                ...formUser, ['cpf']: currentTarget.value
                })}/>
              </div>
            </div>
            
            <div className="row mb-3">
              <div className='col p-0 pe-4'>
                <label htmlFor="input-name" className="form-label h6">Email:</label>
                <input type="text" name='input-email' className="form-control" onChange={({currentTarget}) => setFormUser({
                ...formUser, ['email']: currentTarget.value
                })}/>
              </div>

              <div className='col p-0'>
                  <label htmlFor="input-tel" className="form-label h6">Telefone:</label>
                  <input type="text" name='input-tel' className="form-control" onChange={({currentTarget}) => setFormUser({
                    ...formUser, ['telefone']: currentTarget.value
                  })}/>
                </div>
            </div>

            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6">Senha:</label>
              <input type="password" name='input-senha' className="form-control" onChange={({currentTarget}) => setFormUser({
                ...formUser, ['senha']: currentTarget.value
              })}/>
            </div>
            {/* <div className="row mb-3">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div> */}
            <div className="button-area row mt-4">
              <button type="submit" className='btn btn-success w-100' onClick={toNextForm}>Avançar</button>
            </div>
          </div>
        </div>
    )
}