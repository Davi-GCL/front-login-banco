import React from 'react';
import {useState, useEffect} from 'react';

export default function CardCadastro({toNextForm , states}){

  const [form, setForm, formUser, alerta, setAlerta] = states;
  const [camposVazios, setCamposVazios] = useState([]);
  
//-----------------------------------\\

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
      .then(res => res.json())
      .then((data) => {
        setAlerta([...alerta, <div className='alert alert-info'>Conta: {data.codConta} Agencia:{data.agencia}, Criado com sucesso!</div>])
      })
      .catch(err => console.log(err));
  }

  useEffect(() => {
    if (form.idUsuario !== '') {
      postConta(form.idUsuario);
    }
  }, [form.idUsuario]);

  async function handleSubmit() {

    const camposVazios = Object.keys(form).filter((campo) => campo != 'idUsuario' && form[campo] === '' || form[campo] === ' ');
    const camposVaziosUser = Object.keys(formUser).filter((campo) => formUser[campo] === '' || formUser[campo] === ' ');

    if (camposVazios.length > 0 || camposVaziosUser.length > 0) {
      
      setCamposVazios(camposVazios);
      setAlerta([
        <div className='alert alert-warning'>Formulário de usuario não preenchidos: {camposVaziosUser.map((aux)=>{return aux+', '})}</div>,
        <div className='alert alert-warning'>Formulário de conta não preenchidos: {camposVazios.map((aux)=>{return aux+', '})}</div>
      ]);
    }
    else{
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
    
  }

    return(
        <div className='card p-4 mt-5 col-md-6'>
          <div className="card-title">
            <h4 className='text-center'>Cadastre-se gratuitamente </h4>
          </div>
          <h6 className='subtitle ms-1 text-primary'>Etapa 2</h6>

          <div className='card-body'>
            <div className="row mb-3">

              <div className='col p-0 pe-4'>
                <label htmlFor="input-agencia" className="form-label h6">Agência:</label>
                <input type="text" name='input-agencia' className="form-control" value={form['agencia']} onChange={({currentTarget}) => setForm({
                  ...form, ['agencia']: currentTarget.value
                })}/>
              </div>

              <div className='col p-0 '>
                <label htmlFor="input-conta" className="form-label h6">Nº Conta:</label>
                <input type="text" name='input-conta' className="form-control" value={form['codConta']} onChange={({currentTarget}) => setForm({
                ...form, ['codConta']: currentTarget.value
                })}/>
              </div>
            </div>
            
            
            
            <div className="row mb-3">
              <label htmlFor="input-tipo" className="form-label h6">Tipo de conta:</label>
              <select className="form-select" name='input-tipo' value={form['tipo']} onChange={({currentTarget}) =>setForm({...form, ['tipo']: currentTarget.value})}>
                <option value="0">Poupança</option>
                <option value="1">Corrente</option>
              </select>
            </div>

            <div className="row mb-3 p-1">
              <label htmlFor="input-senha" className="form-label h6">PIN:</label>
              <input type="password" name='input-senha' value={form['setSenha']} className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
              <li className='form-text'></li>
            </div>
            {/* <div className="row mb-3">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div> */}
            <a className='btn-return' onClick={()=>{toNextForm(0)}}>Retornar</a>
            <div className="button-area row mt-3">
              <button type="submit" className='btn btn-primary w-100' onClick={handleSubmit}>Cadastrar</button>
            </div>
          </div>
        </div>
    )
}


