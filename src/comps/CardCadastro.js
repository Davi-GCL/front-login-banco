import React from 'react';
import {useState, useEffect} from 'react';

export default function CardCadastro({alerta, setAlerta}){


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

  async function postConta(userId) {
    setForm({ ...form, idUsuario: userId });
    console.log(form);

    fetch('https://localhost:7044/Conta/Create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...form, idUsuario: userId })
    })
    .then(res=>res.json())
    .then((data)=>{ setAlerta([...alerta,<div className='alert alert-info'> Conta: {data.codConta} Agencia:{data.agencia}, Criado com sucesso!</div>])})
    .catch(err => console.log(err));
  }

  useEffect(() => {
    if (form.idUsuario !== '') {
      postConta(form.idUsuario);
    }
  }, [form.idUsuario]);

  async function handleSubmit() {

    fetch('https://localhost:7044/Usuario/Create', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formUser)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.id);
      setForm({ ...form, idUsuario: data.id });

      setAlerta([<div className='alert alert-info'>Usuario: {data.nome} Id: {data.id}. Criado com sucesso!</div>]);
    })
    .catch(err => console.log(err));
  }

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
              <label htmlFor="input-conta" className="form-label h6">Nº Conta:</label>
              <input type="text" name='input-conta' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['codConta']: currentTarget.value
              })}/>
            </div>

            <div className="row mb-3">
              <label htmlFor="input-senha" className="form-label h6">Senha:</label>
              <input type="password" name='input-senha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div>
            {/* <div className="row mb-3">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div> */}
            <div className="button-area row mt-4">
              <button type="submit" className='btn btn-success w-100' onClick={handleSubmit}>Cadastrar</button>
            </div>
          </div>
        </div>
    )
}