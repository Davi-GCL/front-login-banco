import {useState, useEffect} from 'react';

export default function CardCadastro(){

  //State com as informações necessarias para um novo registro na tabela Usuarios
  const [formUser, setFormUser] = useState({
    nome: '', email: ''
  })

  //State com as informações necessarias para um novo registro na tabela Contas
  const [form, setForm] = useState({
    codConta: '', setSenha: '', idUsuario: ''
  })

  //Envio dos dados para a api, registrando uma nova conta, utilizando o id do usuario criado
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formUser)
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data.id);
      setForm({ ...form, idUsuario: data.id });
    })
    .catch(err => console.log(err));
  }

    return(
        <div className='col-md-3 card p-4 mt-5'>
          <div className="card-title">
            <h4 className='text-center'>Cadastre-se gratuitamente!</h4>
          </div>
          <div className='card-body'>
            <div className="row mb-4">
              <label htmlFor="input-name" className="form-label h6">Nome:</label>
              <input type="text" name='input-name' className="form-control" onChange={({currentTarget}) => setFormUser({
                ...formUser, ['nome']: currentTarget.value
              })}/>
            </div>
            <div className="row mb-4">
              <label htmlFor="input-conta" className="form-label h6">Nº Conta:</label>
              <input type="text" name='input-conta' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['codConta']: currentTarget.value
              })}/>
            </div>
            <div className="row mb-4">
              <label htmlFor="input-senha" className="form-label h6">Senha:</label>
              <input type="text" name='input-senha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div>
            {/* <div className="row mb-4">
              <label htmlFor="input-confsenha" className="form-label h6">Confirmar Senha:</label>
              <input type="text" name='input-confsenha' className="form-control" onChange={({currentTarget}) => setForm({
                ...form, ['setSenha']: currentTarget.value
              })}/>
            </div> */}
            <div className="button-area ">
              <button type="submit" className='btn btn-success w-100' onClick={handleSubmit}>Cadastrar</button>
            </div>
          </div>
        </div>
    )
}